(() => {
  const root = document.querySelector('.pp-bibliography');
  if (!root) return;

  const groups = [];
  for (const heading of [...root.querySelectorAll(':scope > h2')]) {
    const elements = [heading];
    for (let sibling = heading.nextElementSibling; sibling && sibling.tagName !== 'H2'; sibling = sibling.nextElementSibling) {
      elements.push(sibling);
    }
    const lists = elements.flatMap(node => [
      ...(node.matches?.('.pp-bib-list') ? [node] : []),
      ...node.querySelectorAll?.('.pp-bib-list') || []
    ]);
    if (!lists.length) continue;
    const title = heading.cloneNode(true);
    title.querySelector('.pp-bib-count')?.remove();
    groups.push({
      name: title.textContent.trim(),
      elements,
      lists,
      rows: lists.flatMap(list => [...list.querySelectorAll(':scope > li')])
    });
  }
  const records = groups.flatMap(group => group.rows.map(row => {
    const searchable = row.cloneNode(true);
    searchable.querySelector('.pp-bib-links')?.remove();
    const text = searchable.textContent.trim();
    const bibtex = row.querySelector('.pp-copy-bib')?.getAttribute('data-bib') || '';
    const bibYear = bibtex.match(/\byear\s*=\s*[{"']((?:19|20)\d{2})/i);
    const years = [...text.matchAll(/\b(?:19|20)\d{2}\b/g)];
    return {
      row,
      group,
      year: years.length ? years[0][0] : (bibYear?.[1] || ''),
      searchable: fold(text + ' ' + group.name)
    };
  }));
  const years = [...new Set(records.map(record => record.year).filter(Boolean))]
    .sort((a, b) => Number(b) - Number(a));
  const pageSize = 25;
  let category = '';
  let page = 0;
  let filtered = records;

  function fold(value) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  function el(tag, text, className) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  const browser = el('section', '', 'pp-publication-browser');
  browser.setAttribute('aria-label', 'Search and filter publications');
  browser.append(el('h2', 'Explore publications'));

  const types = el('div', '', 'pp-pub-types');
  const buttons = groups.map((group, index) => {
    const button = el('button');
    button.type = 'button';
    button.dataset.category = String(index);
    button.setAttribute('aria-pressed', 'false');
    button.append(el('strong', group.name), el('span', String(group.rows.length)));
    types.append(button);
    return button;
  });
  browser.append(types);

  const filters = el('div', '', 'pp-pub-filters');
  const searchLabel = el('label', 'Search by title, author, venue, or keyword');
  const search = el('input');
  search.type = 'search';
  search.placeholder = 'e.g. information bottleneck, NeurIPS, privacy';
  search.autocomplete = 'off';
  searchLabel.append(search);
  const yearLabel = el('label', 'Publication year');
  const year = el('select');
  year.append(new Option('Any year', ''));
  years.forEach(value => year.append(new Option(value, value)));
  yearLabel.append(year);
  filters.append(searchLabel, yearLabel);
  browser.append(filters);

  const tools = el('div', '', 'pp-pub-tools');
  const count = el('p', '', 'pp-pub-count');
  count.setAttribute('aria-live', 'polite');
  const reset = el('button', 'Show all records');
  reset.type = 'button';
  tools.append(count, reset);
  browser.append(tools);

  const results = el('ol', '', 'pp-pub-results');
  const empty = el('p', 'No publications match those filters. Try a different search or clear the filters.', 'pp-pub-empty');
  empty.hidden = true;
  const pages = el('nav', '', 'pp-pub-pages');
  pages.setAttribute('aria-label', 'Publication pages');
  const previous = el('button', '← Previous');
  previous.type = 'button';
  const pageLabel = el('span');
  const next = el('button', 'Next →');
  next.type = 'button';
  pages.append(previous, pageLabel, next);
  browser.append(results, empty, pages);

  const downloads = root.querySelector('.pp-bib-download');
  if (downloads) downloads.after(browser);
  else root.prepend(browser);

  for (const group of groups) group.elements.forEach(element => { element.hidden = true; });
  for (const record of records) {
    const meta = el('p', record.group.name + (record.year ? ' · ' + record.year : ''), 'pp-pub-result-meta');
    const citation = el('div', '', 'pp-pub-citation');
    while (record.row.firstChild) citation.append(record.row.firstChild);
    record.row.classList.add('pp-pub-result');
    record.row.append(meta, citation);
  }

  function draw() {
    const start = page * pageSize;
    const visible = filtered.slice(start, start + pageSize);
    results.replaceChildren(...visible.map(record => record.row));
    const end = Math.min(start + pageSize, filtered.length);
    count.textContent = filtered.length
      ? `Showing ${start + 1}–${end} of ${filtered.length} records`
      : 'No matching records';
    const pageCount = Math.ceil(filtered.length / pageSize);
    pageLabel.textContent = pageCount ? `Page ${page + 1} of ${pageCount}` : '';
    pages.hidden = pageCount < 2;
    empty.hidden = filtered.length !== 0;
    previous.disabled = page === 0;
    next.disabled = page + 1 >= pageCount;
    buttons.forEach((button, index) => {
      button.setAttribute('aria-pressed', String(category === String(index)));
    });
  }

  function updateUrl() {
    if (location.protocol === 'file:') return;
    const params = new URLSearchParams(location.search);
    for (const [key, value] of [['q', search.value.trim()], ['year', year.value], ['type', category]]) {
      if (value) params.set(key, value);
      else params.delete(key);
    }
    const url = new URL(location.href);
    url.search = params.toString();
    history.replaceState(null, '', url);
  }

  function update() {
    const words = fold(search.value).trim().split(/\s+/).filter(Boolean);
    filtered = records.filter(record =>
      (!category || category === String(groups.indexOf(record.group))) &&
      (!year.value || record.year === year.value) &&
      words.every(word => record.searchable.includes(word))
    );
    page = 0;
    draw();
    updateUrl();
  }

  const params = new URLSearchParams(location.search);
  search.value = params.get('q') || '';
  year.value = params.get('year') || '';
  category = params.get('type') || '';
  if (!groups[Number(category)]) category = '';
  search.addEventListener('input', update);
  year.addEventListener('change', update);
  buttons.forEach(button => button.addEventListener('click', () => {
    category = category === button.dataset.category ? '' : button.dataset.category;
    update();
  }));
  reset.addEventListener('click', () => {
    search.value = '';
    year.value = '';
    category = '';
    update();
    search.focus();
  });
  previous.addEventListener('click', () => {
    page = Math.max(0, page - 1);
    draw();
    count.focus?.();
  });
  next.addEventListener('click', () => {
    page = Math.min(Math.ceil(filtered.length / pageSize) - 1, page + 1);
    draw();
  });
  update();
})();

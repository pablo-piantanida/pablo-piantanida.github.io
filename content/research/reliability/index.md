---
{
  "title": "Uncertainty, Evaluation & Reliable Decision-Making",
  "type": "research-topic",
  "description": "Research on uncertainty, prediction-error detection, evaluation of generated content, and membership-inference privacy.",
  "lead_question": "When should a model prediction be trusted—and what evidence supports that decision?"
}
---

<div class="pp-topic-intro">
<p>My research studies how intelligent systems can recognize uncertainty, identify potential failures, and support decisions about when to act, reject a prediction, or seek additional evidence.</p>
<p>This work connects statistical measures of uncertainty with practical evaluation methods. It spans classification and regression, generated-content assessment, and the privacy risks associated with trained models.</p>
<p>Our work on prediction errors leads to a practical question for auditors: what evidence should they collect next under a limited testing budget? Our <a href="https://hal.science/hal-05498201v1">position paper on language-model auditing</a> examines this question in changing deployment contexts.</p>
</div>
<section class="pp-topic-questions" aria-labelledby="key-questions">
<h2 id="key-questions">Key questions</h2>
<ul>
<li>Can a model appear confident while being wrong?</li>
<li>Which uncertainty measures help identify unreliable predictions?</li>
<li>How should we evaluate generated content and information leakage?</li>
</ul>
</section>
<section aria-labelledby="selected-contributions">
<h2 id="selected-contributions">Selected contributions</h2>
<div class="pp-paper-carousel" data-paper-carousel role="region" aria-roledescription="carousel" aria-label="Figures from selected papers on uncertainty, evaluation, and reliable decision-making">
<div class="pp-paper-carousel-toolbar">
<p data-carousel-status aria-live="off">Figure 1 of 10</p>
<button type="button" data-carousel-toggle aria-pressed="false">Pause</button>
</div>
<div class="pp-paper-carousel-viewport" data-carousel-viewport tabindex="0" aria-label="Figures from published papers. Slides advance automatically; use the left and right arrow keys to browse manually.">
<div class="pp-paper-carousel-track">
<article class="pp-paper-carousel-slide" data-carousel-slide role="group" aria-roledescription="slide" aria-label="1 of 10: DOCTOR: A Simple Method for Detecting Misclassification Errors, Figure 1">
<figure class="pp-paper-carousel-figure"><img src="/images/publications/reliability-doctor-fig1.png" alt="Figure 1: Histograms comparing detector scores for correct and incorrect predictions across datasets." loading="lazy"><figcaption>Figure 1 · Detector score distributions</figcaption></figure>
<div class="pp-paper-carousel-copy">
<p class="pp-topic-venue">NeurIPS · 2021</p>
<h3><a href="/papers/doctor/">DOCTOR: A Simple Method for Detecting Misclassification Errors</a></h3>
<p>Detecting potentially incorrect classifier predictions from the probabilities produced by a trained model.</p>
<div class="pp-topic-paper-links">
<a href="https://proceedings.neurips.cc/paper/2021/hash/2cb6b10338a7fc4117a80da24b582060-Abstract.html" target="_blank" rel="noopener">Paper ↗</a>
<a href="https://arxiv.org/abs/2106.02395" target="_blank" rel="noopener">arXiv ↗</a>
<a href="https://github.com/fgranese/DOCTOR" target="_blank" rel="noopener">Code ↗</a>
<a href="https://neurips.cc/media/neurips-2021/Slides/28016.pdf" target="_blank" rel="noopener">Slides ↗</a>
<a href="https://neurips.cc/virtual/2021/poster/28016" target="_blank" rel="noopener">Presentation ↗</a>
</div>
</div>
</article>
<article class="pp-paper-carousel-slide" data-carousel-slide role="group" aria-roledescription="slide" aria-label="2 of 10: DOCTOR: A Simple Method for Detecting Misclassification Errors, Figure 2">
<figure class="pp-paper-carousel-figure"><img src="/images/publications/reliability-doctor-fig2.png" alt="Figure 2: ROC curves comparing DOCTOR with baseline detectors across four datasets." loading="lazy"><figcaption>Figure 2 · Misclassification detection ROC curves</figcaption></figure>
<div class="pp-paper-carousel-copy">
<p class="pp-topic-venue">NeurIPS · 2021</p>
<h3><a href="/papers/doctor/">DOCTOR: A Simple Method for Detecting Misclassification Errors</a></h3>
<p>Detecting potentially incorrect classifier predictions from the probabilities produced by a trained model.</p>
<div class="pp-topic-paper-links">
<a href="https://proceedings.neurips.cc/paper/2021/hash/2cb6b10338a7fc4117a80da24b582060-Abstract.html" target="_blank" rel="noopener">Paper ↗</a>
<a href="https://arxiv.org/abs/2106.02395" target="_blank" rel="noopener">arXiv ↗</a>
<a href="https://github.com/fgranese/DOCTOR" target="_blank" rel="noopener">Code ↗</a>
<a href="https://neurips.cc/media/neurips-2021/Slides/28016.pdf" target="_blank" rel="noopener">Slides ↗</a>
<a href="https://neurips.cc/virtual/2021/poster/28016" target="_blank" rel="noopener">Presentation ↗</a>
</div>
</div>
</article>
<article class="pp-paper-carousel-slide" data-carousel-slide role="group" aria-roledescription="slide" aria-label="3 of 10: A Data-Driven Measure of Relative Uncertainty for Misclassification Detection, Figure 1">
<figure class="pp-paper-carousel-figure"><img src="/images/publications/reliability-relative-uncertainty-fig1.png" alt="Figure 1: Heatmaps comparing relative uncertainty, class-wise confusion, and the DOCTOR detector matrix." loading="lazy"><figcaption>Figure 1 · Relative-uncertainty comparison</figcaption></figure>
<div class="pp-paper-carousel-copy">
<p class="pp-topic-venue">ICLR · 2024</p>
<h3><a href="/papers/relative-uncertainty/">A Data-Driven Measure of Relative Uncertainty for Misclassification Detection</a></h3>
<p>Learning uncertainty measures that distinguish errors when conventional confidence measures can be misleading.</p>
<div class="pp-topic-paper-links">
<a href="https://proceedings.iclr.cc/paper_files/paper/2024/file/5e0da5da69b71349ae0bd7ad716e4bc9-Paper-Conference.pdf" target="_blank" rel="noopener">Paper ↗</a>
<a href="https://arxiv.org/abs/2306.01710" target="_blank" rel="noopener">arXiv ↗</a>
<a href="https://github.com/edadaltocg/relative-uncertainty" target="_blank" rel="noopener">Code ↗</a>
<a href="https://github.com/edadaltocg/relative-uncertainty/releases/tag/checkpoints" target="_blank" rel="noopener">Model checkpoints ↗</a>
<a href="https://iclr.cc/virtual/2024/poster/17676" target="_blank" rel="noopener">Poster &amp; presentation ↗</a>
</div>
</div>
</article>
<article class="pp-paper-carousel-slide" data-carousel-slide role="group" aria-roledescription="slide" aria-label="4 of 10: A Data-Driven Measure of Relative Uncertainty for Misclassification Detection, Figure 2">
<figure class="pp-paper-carousel-figure"><img src="/images/publications/reliability-relative-uncertainty-fig2.png" alt="Figure 2: False-positive rate versus validation split size for DOCTOR and relative uncertainty." loading="lazy"><figcaption>Figure 2 · Sensitivity to validation split size</figcaption></figure>
<div class="pp-paper-carousel-copy">
<p class="pp-topic-venue">ICLR · 2024</p>
<h3><a href="/papers/relative-uncertainty/">A Data-Driven Measure of Relative Uncertainty for Misclassification Detection</a></h3>
<p>Learning uncertainty measures that distinguish errors when conventional confidence measures can be misleading.</p>
<div class="pp-topic-paper-links">
<a href="https://proceedings.iclr.cc/paper_files/paper/2024/file/5e0da5da69b71349ae0bd7ad716e4bc9-Paper-Conference.pdf" target="_blank" rel="noopener">Paper ↗</a>
<a href="https://arxiv.org/abs/2306.01710" target="_blank" rel="noopener">arXiv ↗</a>
<a href="https://github.com/edadaltocg/relative-uncertainty" target="_blank" rel="noopener">Code ↗</a>
<a href="https://github.com/edadaltocg/relative-uncertainty/releases/tag/checkpoints" target="_blank" rel="noopener">Model checkpoints ↗</a>
<a href="https://iclr.cc/virtual/2024/poster/17676" target="_blank" rel="noopener">Poster &amp; presentation ↗</a>
</div>
</div>
</article>
<article class="pp-paper-carousel-slide" data-carousel-slide role="group" aria-roledescription="slide" aria-label="5 of 10: Beyond the Norms: Detecting Prediction Errors in Regression Models, Figure 1">
<figure class="pp-paper-carousel-figure"><img src="/images/publications/reliability-beyond-norms-fig1.png" alt="Figure 1: Theoretical and data-estimated joint error distributions for reliable and unreliable regression inputs." loading="lazy"><figcaption>Figure 1 · Error distributions for regression</figcaption></figure>
<div class="pp-paper-carousel-copy">
<p class="pp-topic-venue">ICML · 2024</p>
<h3><a href="https://icml.cc/virtual/2024/poster/33759" target="_blank" rel="noopener">Beyond the Norms: Detecting Prediction Errors in Regression Models</a></h3>
<p>Extending prediction-error detection to regression and decision-aware rejection.</p>
<div class="pp-topic-paper-links">
<a href="https://icml.cc/virtual/2024/poster/33759" target="_blank" rel="noopener">Paper &amp; poster ↗</a>
<a href="https://arxiv.org/abs/2406.06968" target="_blank" rel="noopener">arXiv ↗</a>
<a href="https://zenodo.org/records/11281964" target="_blank" rel="noopener">Archived code ↗</a>
<a href="https://icml.cc/media/PosterPDFs/ICML%202024/33759.png?t=1721579758.0505557" target="_blank" rel="noopener">Poster ↗</a>
</div>
</div>
</article>
<article class="pp-paper-carousel-slide" data-carousel-slide role="group" aria-roledescription="slide" aria-label="6 of 10: Beyond the Norms: Detecting Prediction Errors in Regression Models, Figure 2">
<figure class="pp-paper-carousel-figure"><img src="/images/publications/reliability-beyond-norms-fig2.png" alt="Figure 2: An optimal rejection region for a regression model based on its estimated prediction-error probability." loading="lazy"><figcaption>Figure 2 · Optimal rejection region</figcaption></figure>
<div class="pp-paper-carousel-copy">
<p class="pp-topic-venue">ICML · 2024</p>
<h3><a href="https://icml.cc/virtual/2024/poster/33759" target="_blank" rel="noopener">Beyond the Norms: Detecting Prediction Errors in Regression Models</a></h3>
<p>Extending prediction-error detection to regression and decision-aware rejection.</p>
<div class="pp-topic-paper-links">
<a href="https://icml.cc/virtual/2024/poster/33759" target="_blank" rel="noopener">Paper &amp; poster ↗</a>
<a href="https://arxiv.org/abs/2406.06968" target="_blank" rel="noopener">arXiv ↗</a>
<a href="https://zenodo.org/records/11281964" target="_blank" rel="noopener">Archived code ↗</a>
<a href="https://icml.cc/media/PosterPDFs/ICML%202024/33759.png?t=1721579758.0505557" target="_blank" rel="noopener">Poster ↗</a>
</div>
</div>
</article>
<article class="pp-paper-carousel-slide" data-carousel-slide role="group" aria-roledescription="slide" aria-label="7 of 10: COSMIC: Mutual Information for Task-Agnostic Summarization Evaluation, Figure 1">
<figure class="pp-paper-carousel-figure"><img src="/images/publications/reliability-cosmic-fig1.png" alt="Figure 1: A schematic of task-agnostic summarization and downstream concept prediction." loading="lazy"><figcaption>Figure 1 · Task-agnostic summarization</figcaption></figure>
<div class="pp-paper-carousel-copy">
<p class="pp-topic-venue">ACL · 2024</p>
<h3><a href="https://aclanthology.org/2024.acl-long.686/" target="_blank" rel="noopener">COSMIC: Mutual Information for Task-Agnostic Summarization Evaluation</a></h3>
<p>Using information theory to assess whether summaries preserve information useful across downstream tasks.</p>
<div class="pp-topic-paper-links">
<a href="https://aclanthology.org/2024.acl-long.686/" target="_blank" rel="noopener">Paper ↗</a>
<a href="https://arxiv.org/abs/2402.19457" target="_blank" rel="noopener">arXiv ↗</a>
</div>
</div>
</article>
<article class="pp-paper-carousel-slide" data-carousel-slide role="group" aria-roledescription="slide" aria-label="8 of 10: COSMIC: Mutual Information for Task-Agnostic Summarization Evaluation, Figure 2">
<figure class="pp-paper-carousel-figure"><img src="/images/publications/reliability-cosmic-fig2.png" alt="Figure 2: Correlations between automatic summary metrics and human judgments across evaluation dimensions." loading="lazy"><figcaption>Figure 2 · Correlation with human judgments</figcaption></figure>
<div class="pp-paper-carousel-copy">
<p class="pp-topic-venue">ACL · 2024</p>
<h3><a href="https://aclanthology.org/2024.acl-long.686/" target="_blank" rel="noopener">COSMIC: Mutual Information for Task-Agnostic Summarization Evaluation</a></h3>
<p>Using information theory to assess whether summaries preserve information useful across downstream tasks.</p>
<div class="pp-topic-paper-links">
<a href="https://aclanthology.org/2024.acl-long.686/" target="_blank" rel="noopener">Paper ↗</a>
<a href="https://arxiv.org/abs/2402.19457" target="_blank" rel="noopener">arXiv ↗</a>
</div>
</div>
</article>
<article class="pp-paper-carousel-slide" data-carousel-slide role="group" aria-roledescription="slide" aria-label="9 of 10: Fundamental Limits of Membership Inference Attacks on Machine Learning Models, Figure 1">
<figure class="pp-paper-carousel-figure"><img src="/images/publications/reliability-membership-inference-fig1.png" alt="Figure 1: Training and validation accuracy over optimization iterations under different loss thresholds." loading="lazy"><figcaption>Figure 1 · Training and validation accuracy</figcaption></figure>
<div class="pp-paper-carousel-copy">
<p class="pp-topic-venue">JMLR · 2025</p>
<h3><a href="/papers/membership-inference-limits/">Fundamental Limits of Membership Inference Attacks on Machine Learning Models</a></h3>
<p>Characterizing statistical limits on inferring whether a data point was used to train a model.</p>
<div class="pp-topic-paper-links">
<a href="https://www.jmlr.org/papers/v26/24-1515.html" target="_blank" rel="noopener">Paper ↗</a>
<a href="https://arxiv.org/abs/2310.13786" target="_blank" rel="noopener">arXiv ↗</a>
</div>
</div>
</article>
<article class="pp-paper-carousel-slide" data-carousel-slide role="group" aria-roledescription="slide" aria-label="10 of 10: Fundamental Limits of Membership Inference Attacks on Machine Learning Models, Figure 2">
<figure class="pp-paper-carousel-figure"><img src="/images/publications/reliability-membership-inference-fig2.png" alt="Figure 2: Validation accuracy versus input dimension for linear regression and nearest-neighbor models." loading="lazy"><figcaption>Figure 2 · Validation accuracy by dimension</figcaption></figure>
<div class="pp-paper-carousel-copy">
<p class="pp-topic-venue">JMLR · 2025</p>
<h3><a href="/papers/membership-inference-limits/">Fundamental Limits of Membership Inference Attacks on Machine Learning Models</a></h3>
<p>Characterizing statistical limits on inferring whether a data point was used to train a model.</p>
<div class="pp-topic-paper-links">
<a href="https://www.jmlr.org/papers/v26/24-1515.html" target="_blank" rel="noopener">Paper ↗</a>
<a href="https://arxiv.org/abs/2310.13786" target="_blank" rel="noopener">arXiv ↗</a>
</div>
</div>
</article>
</div>
</div>
</div>
<script src="/js/research-paper-carousel.js" defer></script>
</section>
<nav class="pp-topic-explore" aria-label="Explore related research">
<h2>Explore further</h2>
<ul>
<li><a href="/publications/">Full publication list →</a></li>
<li><a href="https://github.com/edadaltocg/relative-uncertainty">Relative Uncertainty implementation ↗</a></li>
<li><a href="/research/foundations/">Mathematical Foundations of Learning, Representation &amp; Reasoning →</a></li>
<li><a href="/research/collaboration/">Collaborative &amp; Resource-Aware Agentic Intelligence →</a></li>
</ul>
</nav>

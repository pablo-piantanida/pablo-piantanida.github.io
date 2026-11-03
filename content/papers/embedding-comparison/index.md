---
{
  "title": "When is an Embedding Model More Promising than Another?",
  "type": "paper",
  "description": "Comparing embedding models before labeled data for the downstream task are available.",
  "paper": {
    "title": "When is an Embedding Model More Promising than Another?",
    "authors": [
      "Maxime Darrin",
      "Philippe Formont",
      "Ismail Ben Ayed",
      "Jackie CK Cheung",
      "Pablo Piantanida"
    ],
    "year": "2024",
    "venue": "Advances in Neural Information Processing Systems",
    "venue_short": "NeurIPS 2024",
    "firstpage": "68330",
    "lastpage": "68379",
    "arxiv": "2406.07640",
    "url": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/7e6f445a74cdb71931aac64f1e3f49c9-Abstract-Conference.html",
    "pdf": "https://proceedings.neurips.cc/paper_files/paper/2024/file/7e6f445a74cdb71931aac64f1e3f49c9-Paper-Conference.pdf",
    "code": "https://github.com/ills-montreal/emir",
    "summary": "Comparing embedding models before labeled data for the downstream task are available.",
    "question": "Suppose you have several embedding models and enough resources to evaluate only two on your application. How should you choose which two to try?",
    "takeaway": "We draw on statistical sufficiency to compare the information that different embeddings preserve. This gives a self-supervised procedure for ranking candidate models. In experiments on language and molecular data, the ranking tracked how useful the models were across the downstream tasks we studied.",
    "use": "Use the ranking to narrow a shortlist before investing in task-specific evaluation.",
    "abstract": "Embedders play a central role in machine learning, projecting any object into numerical representations that can, in turn, be leveraged to perform various downstream tasks. The evaluation of embedding models typically depends on domain-specific empirical approaches utilizing downstream tasks, primarily because of the lack of a standardized framework for comparison. However, acquiring adequately large and representative datasets for conducting these assessments is not always viable and can prove to be prohibitively expensive and time-consuming.  In this paper, we present a unified approach to evaluate embedders. First, we establish theoretical foundations for comparing embedding models, drawing upon the concepts of sufficiency and informativeness. We then leverage these concepts to devise a tractable comparison criterion (information sufficiency), leading to a task-agnostic and self-supervised ranking procedure. We demonstrate experimentally that our approach aligns closely with the capability of embedding models to facilitate various downstream tasks in both natural language processing and molecular biology. This effectively offers practitioners a valuable tool for prioritizing model trials.",
    "volume": "37"
  }
}
---

---
{
  "title": "A Data-Driven Measure of Relative Uncertainty for Misclassification Detection",
  "type": "paper",
  "description": "A learned measure of uncertainty that uses patterns in predicted class probabilities to identify likely classification errors.",
  "paper": {
    "title": "A Data-Driven Measure of Relative Uncertainty for Misclassification Detection",
    "authors": [
      "Eduardo Dadalto Câmara Gomes",
      "Marco Romanelli",
      "Georg Pichler",
      "Pablo Piantanida"
    ],
    "year": "2024",
    "venue": "International Conference on Learning Representations",
    "venue_short": "ICLR 2024",
    "volume": "2024",
    "firstpage": "21826",
    "lastpage": "21848",
    "arxiv": "2306.01710",
    "url": "https://proceedings.iclr.cc/paper_files/paper/2024/hash/5e0da5da69b71349ae0bd7ad716e4bc9-Abstract-Conference.html",
    "pdf": "https://proceedings.iclr.cc/paper_files/paper/2024/file/5e0da5da69b71349ae0bd7ad716e4bc9-Paper-Conference.pdf",
    "code": "https://github.com/edadaltocg/relative-uncertainty",
    "summary": "A learned measure of uncertainty that uses patterns in predicted class probabilities to identify likely classification errors.",
    "question": "Can a prediction look confident while still being unreliable?",
    "takeaway": "The proposed observer-relative measure learns from soft predictions. It can assign high uncertainty to incorrect predictions even when Shannon entropy is low, and is evaluated on multiple image classification tasks.",
    "use": "Relevant when comparing uncertainty scores for error detection or implementing a data-driven alternative to fixed confidence measures. The linked author repository provides the implementation and experimental instructions.",
    "abstract": "Misclassification detection is an important problem in machine learning, as it allows for the identification of instances where the model's predictions are unreliable. However, conventional uncertainty measures such as Shannon entropy do not provide an effective way to infer the real uncertainty associated with the model's predictions. In this paper, we introduce a novel data-driven measure of uncertainty relative to an observer for misclassification detection. By learning patterns in the distribution of soft-predictions, our uncertainty measure can identify misclassified samples based on the predicted class probabilities. Interestingly, according to the proposed measure, soft-predictions corresponding to misclassified instances can carry a large amount of uncertainty, even though they may have low Shannon entropy. We demonstrate empirical improvements over multiple image classification tasks, outperforming state-of-the-art misclassification detection methods."
  }
}
---

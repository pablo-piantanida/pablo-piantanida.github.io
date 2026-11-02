---
{
  "title": "DOCTOR: A Simple Method for Detecting Misclassification Errors",
  "type": "paper",
  "description": "A lightweight way to flag potentially incorrect classifier predictions using the probabilities produced by a trained model.",
  "paper": {
    "title": "DOCTOR: A Simple Method for Detecting Misclassification Errors",
    "authors": [
      "Federica Granese",
      "Marco Romanelli",
      "Daniele Gorla",
      "Catuscia Palamidessi",
      "Pablo Piantanida"
    ],
    "year": "2021",
    "venue": "Advances in Neural Information Processing Systems",
    "venue_short": "NeurIPS 2021",
    "volume": "34",
    "firstpage": "5669",
    "lastpage": "5681",
    "arxiv": "2106.02395",
    "url": "https://proceedings.neurips.cc/paper/2021/hash/2cb6b10338a7fc4117a80da24b582060-Abstract.html",
    "pdf": "https://proceedings.neurips.cc/paper_files/paper/2021/file/2cb6b10338a7fc4117a80da24b582060-Paper.pdf",
    "summary": "A lightweight way to flag potentially incorrect classifier predictions using the probabilities produced by a trained model.",
    "question": "When should a classifier prediction be accepted or rejected?",
    "takeaway": "DOCTOR uses soft predictions to score possible errors, with a second setting that also permits gradient-based input preprocessing. The paper evaluates the approach on image and sentiment classification tasks.",
    "use": "Relevant when studying selective prediction, misclassification detection, or reliability checks for an existing classifier. The reported empirical results apply to the tasks and access settings evaluated in the paper.",
    "abstract": "Deep neural networks (DNNs) have shown to perform very well on large scale object recognition problems and lead to widespread use for real-world applications, including situations where DNN are implemented as “black boxes”. A promising approach to secure their use is to accept decisions that are likely to be correct while discarding the others. In this work, we propose DOCTOR, a simple method that aims to identify whether the prediction of a DNN classifier should (or should not) be trusted so that, consequently, it would be possible to accept it or to reject it. Two scenarios are investigated: Totally Black Box (TBB) where only the soft-predictions are available and Partially Black Box (PBB) where gradient-propagation to perform input pre-processing is allowed. Empirically, we show that DOCTOR outperforms all state-of-the-art methods on various well-known images and sentiment analysis datasets. In particular, we observe a reduction of up to 4% of the false rejection rate (FRR) in the PBB scenario. DOCTOR can be applied to any pre-trained model, it does not require prior information about the underlying dataset and is as simple as the simplest available methods in the literature.",
    "code": "https://github.com/fgranese/DOCTOR",
    "resources": [
      {
        "label": "Slides",
        "url": "https://neurips.cc/media/neurips-2021/Slides/28016.pdf"
      },
      {
        "label": "Presentation",
        "url": "https://neurips.cc/virtual/2021/poster/28016"
      }
    ]
  }
}
---

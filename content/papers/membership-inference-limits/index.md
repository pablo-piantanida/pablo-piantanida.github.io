---
{
  "title": "Fundamental Limits of Membership Inference Attacks on Machine Learning Models",
  "type": "paper",
  "description": "A statistical analysis of the limits of attacks that try to determine whether a data point was used to train a machine learning model.",
  "paper": {
    "title": "Fundamental Limits of Membership Inference Attacks on Machine Learning Models",
    "authors": [
      "Eric Aubinais",
      "Elisabeth Gassiat",
      "Pablo Piantanida"
    ],
    "year": "2025",
    "venue": "Journal of Machine Learning Research",
    "venue_short": "JMLR 2025",
    "volume": "26",
    "issue": "263",
    "firstpage": "1",
    "lastpage": "54",
    "arxiv": "2310.13786",
    "url": "https://www.jmlr.org/papers/v26/24-1515.html",
    "pdf": "https://www.jmlr.org/papers/volume26/24-1515/24-1515.pdf",
    "summary": "A statistical analysis of the limits of attacks that try to determine whether a data point was used to train a machine learning model.",
    "question": "What determines how successfully an attacker can infer training-set membership?",
    "takeaway": "The paper identifies a statistical quantity governing attack success, studies an overfitting nonlinear-regression setting, and develops bounds for several data-distribution settings, illustrated by simulations.",
    "use": "Relevant when analysing membership privacy, interpreting attack success, or connecting overfitting with information leakage. Conclusions depend on the assumptions of each theoretical setting; they are not a universal privacy guarantee.",
    "abstract": "Membership inference attacks (MIA) can reveal whether a particular data point was part of the training dataset, potentially exposing sensitive information about individuals. This article provides theoretical guarantees by exploring the fundamental statistical limitations associated with MIAs on machine learning models at large. More precisely, we first derive the statistical quantity that governs the effectiveness and success of such attacks. We then theoretically prove that in a non-linear regression setting with overfitting learning procedures, attacks may have a high probability of success. Finally, we investigate several situations for which we provide bounds on this quantity of interest. Interestingly, our findings indicate that discretizing the data might enhance the learning procedure's security. Specifically, it is demonstrated to be limited by a constant, which quantifies the diversity of the underlying data distribution. We illustrate those results through simple simulations."
  }
}
---

---
{
  "title": "Collaborative Rational Speech Act: Pragmatic Reasoning for Multi-Turn Dialog",
  "type": "paper",
  "description": "An information-theoretic model of how agents with private information conduct a conversation over several turns.",
  "paper": {
    "title": "Collaborative Rational Speech Act: Pragmatic Reasoning for Multi-Turn Dialog",
    "authors": [
      "Lautaro Estienne",
      "Gabriel Ben Zenou",
      "Nona Naderi",
      "Jackie CK Cheung",
      "Pablo Piantanida"
    ],
    "year": "2025",
    "venue": "Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing",
    "venue_short": "EMNLP 2025",
    "firstpage": "22509",
    "lastpage": "22523",
    "arxiv": "2507.14063",
    "url": "https://aclanthology.org/2025.emnlp-main.1145/",
    "pdf": "https://aclanthology.org/2025.emnlp-main.1145.pdf",
    "code": "https://github.com/LautaroEst/crsa",
    "summary": "An information-theoretic model of how agents with private information conduct a conversation over several turns.",
    "question": "How should a speaker choose what to say when both participants hold private information?",
    "takeaway": "The value of a question or answer depends on what has already been said and what the other speaker can infer. We developed Collaborative Rational Speech Act to model that exchange. Its objective draws on rate-distortion theory to describe how agents choose utterances in pursuit of a shared task.",
    "use": "We evaluated the model in referential games and scripted doctor–patient dialogues. These controlled settings make it possible to examine how a particular utterance changes the partner’s beliefs. The implementation provides a starting point for studying pragmatic communication between agents.",
    "abstract": "As AI systems take on collaborative roles, they must reason about shared goals and beliefs—not just generate fluent language. The Rational Speech Act (RSA) framework offers a principled approach to pragmatic reasoning, but existing extensions face challenges in scaling to multi-turn, collaborative scenarios. In this paper, we introduce Collaborative Rational Speech Act (CRSA), an information-theoretic (IT) extension of RSA that models multi-turn dialog by optimizing a gain function adapted from rate-distortion theory. This gain is an extension of the gain model that is maximized in the original RSA model but takes into account the scenario in which both agents in a conversation have private information and produce utterances conditioned on the dialog. We demonstrate the effectiveness of CRSA on referential games and template-based doctor–patient dialogs in the medical domain. Empirical results show that CRSA yields more consistent, interpretable, and collaborative behavior than existing baselines—paving the way for more pragmatic and socially aware language agents."
  }
}
---

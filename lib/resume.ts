/* Portfolio content — mirrors the source data in ../resume/data/resume.js
   (the file that generates Madhav_Yadav_Resume_ATS.pdf). Edit here to update the site. */

export const profile = {
  name: "Madhav Yadav",
  role: "AI/ML Intern • SDE Intern",
  tagline:
    "I turn models into real products — LLM tooling, retrieval systems, and full-stack platforms, built to be reliable and fast.",
  location: "Delhi, India",
  email: "mymadhavyadav07@gmail.com",
  links: {
    portfolio: { label: "mymadhavyadav07.vercel.app", url: "https://mymadhavyadav07.vercel.app" },
    linkedin: { label: "/mymadhavyadav07", url: "https://linkedin.com/in/mymadhavyadav07" },
    github: { label: "/mymadhavyadav07", url: "https://github.com/mymadhavyadav07" },
  },
  // Résumé link — set NEXT_PUBLIC_RESUME_URL in .env.local (e.g. a Google Drive
  // share link). Falls back to the local PDF in /public if the env var is unset.
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || "/Madhav_Yadav_Resume.pdf",
};

export const about =
  "I'm an AI/ML and software engineer who likes turning models into things people can actually use — LLM tooling, retrieval systems, and full-stack apps — with an eye for real-time performance, reliability, and clean engineering.";

export type Experience = {
  org: string;
  role: string;
  period: string;
  points: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    org: "Agnirath Aerolabs",
    role: "ML & Software Engineer Intern",
    period: "Oct 2025 — Jan 2026",
    points: [
      "Architected and deployed a real-time Ground Control Station (GCS) for UAV monitoring and autonomous mission management, integrating telemetry pipelines with sub-second latency.",
      "Built high-performance FastAPI backend services in Python to ingest, process, and relay drone flight data and command payloads across embedded UAV systems.",
      "Developed responsive Next.js operator dashboards visualizing real-time drone telemetry — position, altitude, battery, and mission status — reducing operator response time significantly.",
    ],
    tech: ["Python", "Django", "Computer Vision", "Transformers", "Next.js", "UAVs"],
  },
];

export const education = [
  { title: "B.Tech in Computer Science", org: "AKTU", period: "Sept 2023 — Present" },
];

export type Project = {
  name: string;
  featured?: boolean;
  blurb: string;
  points?: string[];
  tech: string[];
  link?: { label: string; url: string };
};

export const projects: Project[] = [
  {
    name: "Open–Papertrade",
    featured: true,
    blurb:
      "An AI-powered paper-trading platform to practice trading strategies with real market data and zero financial risk.",
    points: [
      "Engineered a full-stack paper-trading platform simulating real-world market conditions, letting users test algorithmic strategies risk-free before live deployment.",
      "Built a robust REST API backend with Django for order management, portfolio tracking, and real-time market-data ingestion, supporting concurrent user sessions.",
      "Designed for extensibility — the architecture supports future integration of ML-based trading-signal models and backtesting engines.",
    ],
    tech: ["Django", "Next.js", "TypeScript", "REST APIs"],
    link: { label: "GitHub", url: "https://github.com/Open-Papertrade/Open-Papertrade" },
  },
  {
    name: "Github MCP Server",
    blurb:
      "A lightweight Model Context Protocol (MCP) server built with FastMCP to expose and automate GitHub operations using LLM-compatible tools.",
    points: [
      "Retrieve a GitHub user's bio.",
      "Recursively fetch all files and directories from a repo starting at any path.",
      "Fetch the content of a file from a repository.",
      "Create a new branch and then open a pull request on GitHub.",
      "Open an issue on a GitHub repository.",
    ],
    tech: ["Python", "FastMCP", "GitHub API", "LLM Tools"],
    link: { label: "GitHub", url: "https://github.com/mymadhavyadav07/Github-MCP-Server" },
  },
  {
    name: "Steganographic Encoder/Decoder",
    blurb:
      "A Django web app that lets users hide and retrieve secret messages within images — a practical introduction to steganography.",
    points: [
      "Encode hidden messages into images.",
      "Decode secret messages from images.",
      "Friendly web interface built with Django.",
    ],
    tech: ["Python", "Django", "Pillow", "OpenCV"],
    link: { label: "GitHub", url: "https://github.com/mymadhavyadav07/Steganographic-Encoder" },
  },
];

export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    group: "Core LLM / Applied AI",
    items: [
      "Large Language Models (LLMs)", "Prompt Engineering", "Context Engineering",
      "Retrieval-Augmented Generation (RAG)", "Agentic RAG", "Hybrid Search", "Reranking",
      "Vector Search / Semantic Search", "Embeddings", "AI Agents", "Agentic Workflows",
      "Tool Use / Function Calling", "Model Context Protocol (MCP)", "Structured Outputs",
      "Multimodal AI", "Fine-tuning", "LoRA / QLoRA", "RLHF / DPO", "Model Distillation",
    ],
  },
  {
    group: "Evaluation & Quality",
    items: [
      "LLM Evaluation (Evals)", "LLM-as-Judge", "Offline & Online Evaluation",
      "Regression Testing for LLMs", "Guardrails", "Hallucination Mitigation",
      "Prompt Injection Defense", "Responsible / Safe AI", "OWASP LLM Top 10",
    ],
  },
  {
    group: "AI Infra / Platform",
    items: [
      "LLM Inference Optimization", "Model Serving", "vLLM", "TGI", "SGLang", "KV Cache",
      "Continuous Batching", "Quantization (GPTQ/AWQ/GGUF, INT4/INT8/FP8)", "Speculative Decoding",
      "GPU Optimization", "Vector Databases (pgvector, Qdrant, Weaviate, Milvus)", "ANN Indexing (HNSW/IVF)",
    ],
  },
  {
    group: "LLMOps / MLOps",
    items: [
      "LLMOps", "MLOps", "Observability / Tracing (Langfuse, Phoenix, Braintrust)",
      "Prompt Versioning", "Semantic Caching", "Prompt Caching", "Model Routing / Gateway (LiteLLM)",
      "Cost & Latency Optimization", "Model Monitoring", "CI/CD for ML",
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      "LangChain", "LangGraph", "LlamaIndex", "DSPy", "Hugging Face Transformers", "PyTorch",
      "pydantic", "FastAPI", "Anthropic / OpenAI SDKs", "sentence-transformers",
    ],
  },
  {
    group: "Languages & Engineering",
    items: [
      "Python", "TypeScript / JavaScript", "SQL", "async / concurrent programming",
      "REST APIs", "Git", "System Design", "Distributed Systems",
    ],
  },
  {
    group: "Cloud & Deployment",
    items: ["AWS / GCP / Azure", "Docker", "Kubernetes", "Serverless", "GPU Compute", "Postgres", "Redis", "CI/CD"],
  },
  {
    group: "ML Foundations",
    items: [
      "Machine Learning", "Deep Learning", "Neural Networks", "Transformers", "NLP",
      "Model Evaluation Metrics", "Regularization (L1/L2, weight decay)",
    ],
  },
];

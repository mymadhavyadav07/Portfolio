/* Portfolio content — mirrors the source data in ../resume/data/resume.js.
   Edit here to update the site. */

export const profile = {
  name: "Madhav Yadav",
  role: "Machine Learning Engineer · Software Engineer",
  tagline:
    "I build LLM-powered products and clean, reliable systems — from retrieval and agents to the infrastructure that serves them.",
  location: "Delhi, India",
  email: "mymadhavyadav07@gmail.com",
  links: {
    portfolio: { label: "mymadhavyadav07.vercel.app", url: "https://mymadhavyadav07.vercel.app" },
    linkedin: { label: "/mymadhavyadav07", url: "https://linkedin.com/in/mymadhavyadav07" },
    github: { label: "/mymadhavyadav07", url: "https://github.com/mymadhavyadav07" },
  },
  // Résumé link. Set NEXT_PUBLIC_RESUME_URL in .env.local (e.g. a Google Drive
  // share link) — clicking "Résumé" opens it in a new tab. Falls back to the
  // local PDF in /public if the env var is not set.
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || "/Madhav_Yadav_Resume.pdf",
};

export const about =
  "I'm a Machine Learning & Software Engineer focused on turning fuzzy, probabilistic model capabilities into products that are reliable, measurable, and cost-effective. I like working across the whole stack — retrieval, agents, evals, and the serving infrastructure underneath.";

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
    period: "Oct 2025 — Present",
    points: [
      "Improving the UI & UX of Femicam's desktop application built on React, Electron and Material UI.",
      "Designing and building reusable React components for the application dashboard.",
    ],
    tech: ["React", "Electron", "Material UI"],
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
      "A paper-trading platform to practice trading strategies with real market data and zero financial risk.",
    tech: ["React", "Chakra UI", "Express", "MongoDB", "Redis"],
    link: { label: "GitHub", url: "https://github.com/mymadhavyadav07" },
  },
  {
    name: "Github MCP Server",
    blurb:
      "A lightweight Model Context Protocol (MCP) server built with FastMCP to expose and automate GitHub operations using LLM-compatible tools.",
    points: [
      "Retrieve a GitHub user's bio.",
      "Recursively fetch files & directories from a repo at any path.",
      "Read file contents from a repository.",
      "Create branches and open pull requests.",
      "Open issues on a repository.",
    ],
    tech: ["Python", "FastMCP", "GitHub API", "LLM Tools"],
    link: { label: "GitHub", url: "https://github.com/mymadhavyadav07" },
  },
  {
    name: "Steganographic Encoder/Decoder",
    blurb:
      "A Django web app to hide and retrieve secret messages inside images — a practical intro to steganography.",
    points: [
      "Encode hidden messages into images.",
      "Decode secret messages from images.",
      "Friendly web interface built with Django.",
    ],
    tech: ["Python", "Django", "Pillow", "OpenCV"],
    link: { label: "GitHub", url: "https://github.com/mymadhavyadav07" },
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

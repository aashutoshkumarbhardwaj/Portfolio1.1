export type ResearchBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "code"; lang?: string; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; tone?: "info" | "warn" | "spec"; title: string; text: string };

export type ResearchPost = {
  slug: string;
  date: string;
  title: string;
  tag: "PAPER" | "ESSAY" | "FIELD NOTE" | "ENGINEERING" | "RESEARCH" | "OPEN SOURCE";
  note: string;
  readingTime: string;
  body: ResearchBlock[];
};

export const RESEARCH_POSTS: ResearchPost[] = [
{
slug: "building-personal-ai-operating-system",
date: "2026",
title: "Building a Personal AI Operating System",
tag: "FIELD NOTE",
note: "Designing an AI-native layer for knowledge, planning, and decision making.",
readingTime: "9 MIN READ",
body: [
{
type: "p",
text: "Most productivity systems fail because they store information but never understand context. Notes become archives, tasks become clutter, and knowledge remains disconnected from action."
},
{
type: "p",
text: "My goal is to build a Personal AI Operating System capable of understanding projects, goals, learning progress, and decision history through persistent memory and intelligent retrieval."
},
{
type: "h2",
text: "Core Principles"
},
{
type: "list",
items: [
"Memory should compound over time.",
"Knowledge should be retrievable through natural language.",
"Projects, notes, and goals should share context.",
"The system should assist thinking, not replace it."
]
},
{
type: "quote",
text: "The future isn't AI replacing humans. It's AI becoming a better memory layer for humans.",
cite: "FIELD NOTE 001"
}
]
},

{
slug: "lessons-from-building-rag-systems",
date: "2026",
title: "What Production RAG Systems Actually Need",
tag: "ENGINEERING",
note: "The biggest failures rarely come from the language model.",
readingTime: "8 MIN READ",
body: [
{
type: "p",
text: "Most discussions about Retrieval-Augmented Generation focus on embeddings and model selection. In practice, the hardest problems are data quality, retrieval accuracy, and evaluation."
},
{
type: "h2",
text: "Common Failure Modes"
},
{
type: "list",
items: [
"Poor chunking strategies.",
"Outdated knowledge bases.",
"Missing evaluation pipelines.",
"Weak retrieval relevance."
]
},
{
type: "callout",
tone: "warn",
title: "FIELD OBSERVATION",
text: "A stronger retriever usually provides larger gains than a larger model."
},
{
type: "quote",
text: "Most hallucinations start before generation ever begins.",
cite: "RAG NOTE 004"
}
]
},

{
slug: "machine-learning-for-polymer-discovery",
date: "2026",
title: "Machine Learning for Polymer Discovery",
tag: "RESEARCH",
note: "Exploring data-driven approaches for sustainable material development.",
readingTime: "10 MIN READ",
body: [
{
type: "p",
text: "Traditional material discovery requires expensive experimentation and long development cycles. Machine learning provides a path toward faster screening and prediction."
},
{
type: "p",
text: "The objective is to predict polymer properties from existing datasets and identify promising candidates before physical testing."
},
{
type: "h2",
text: "Research Goals"
},
{
type: "list",
items: [
"Property prediction.",
"Virtual screening.",
"Material optimization.",
"Reducing experimental costs."
]
},
{
type: "quote",
text: "The most valuable experiment is often the one you never have to run.",
cite: "RESEARCH NOTE 002"
}
]
},

{
slug: "from-open-source-contributor-to-maintainer",
date: "2026",
title: "From Contributor to Maintainer",
tag: "OPEN SOURCE",
note: "Lessons from reviewing code instead of only writing it.",
readingTime: "6 MIN READ",
body: [
{
type: "p",
text: "Contributing code teaches implementation. Maintaining a project teaches systems thinking."
},
{
type: "p",
text: "As a maintainer, every technical decision affects contributors, future scalability, documentation quality, and project health."
},
{
type: "h2",
text: "Key Lessons"
},
{
type: "list",
items: [
"Good architecture scales contributors.",
"Documentation is a feature.",
"Code reviews are teaching tools.",
"Community health matters as much as code quality."
]
},
{
type: "quote",
text: "The real product of open source is not code. It is collaboration.",
cite: "OSS NOTE 007"
}
]
},

{
slug: "building-products-as-a-student",
date: "2026",
title: "Building Products Before Feeling Ready",
tag: "ESSAY",
note: "Why shipping teaches faster than preparation.",
readingTime: "5 MIN READ",
body: [
{
type: "p",
text: "Many students spend years preparing to build something meaningful. The problem is that confidence usually comes after shipping, not before."
},
{
type: "p",
text: "Every meaningful project I've worked on started with incomplete knowledge and a willingness to learn publicly."
},
{
type: "h2",
text: "What Shipping Teaches"
},
{
type: "list",
items: [
"Users reveal hidden assumptions.",
"Feedback beats speculation.",
"Execution compounds faster than planning.",
"Real projects expose real weaknesses."
]
},
{
type: "quote",
text: "The fastest way to learn is to build something that can fail publicly.",
cite: "BUILDER NOTE 011"
}
]
}
];


export function getPostBySlug(slug: string): ResearchPost | undefined {
  return RESEARCH_POSTS.find((p) => p.slug === slug);
}

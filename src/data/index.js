export const projects = [
  {
    title: "Blog Post",
    subtitle: "NextJs Stack",
    description:
      "A publishing-focused web app with a blog experience, contact flow, and clean content-focused UX.",
    image: process.env.PUBLIC_URL + "/blog-post.gif",
    gallery: [
      process.env.PUBLIC_URL + "/blog-post.gif",
      process.env.PUBLIC_URL + "/food-order.gif",
      process.env.PUBLIC_URL + "/shopping-app.gif",
    ],
    link: "https://blog-post-pink.vercel.app/",
    tags: ["Next.js", "MongoDB", "Blog", "UI/UX"],
    details:
      "Built a content-driven web app with a modern editorial layout, a dedicated contact section, and a scalable structure for future blog growth.",
  },

  {
    title: "Field Sales App",
    subtitle: "Mobile Operations",
    description:
      "A mobile-first workflow for sales coordination, order capture, and field team productivity.",
    image: process.env.PUBLIC_URL + "/landscape-image.jpg",
    gallery: [
      process.env.PUBLIC_URL + "/landscape-image.jpg",
      process.env.PUBLIC_URL + "/portrait-image.jpg",
      process.env.PUBLIC_URL + "/shopping-app.gif",
    ],
    tags: ["Mobile", "Operations", "Sales", "Private"],
    details:
      "Designed a field-friendly workflow to help teams capture orders, track activity, and simplify business operations in real time.",
    privateProject: true,
  },
  {
    title: "Snapsight",
    subtitle: "Event Content Intelligence Platform",
    description:
      "An AI-powered event platform that transforms live sessions into actionable content through real-time transcription, translation, and cross-session event intelligence.",
    image: process.env.PUBLIC_URL + "/snapsight/thumbnail.png",
    gallery: [
      process.env.PUBLIC_URL + "/snapsight/gallery-1.png",
      process.env.PUBLIC_URL + "/snapsight/gallery-2.png",
      process.env.PUBLIC_URL + "/snapsight/gallery-3.png",
      process.env.PUBLIC_URL + "/snapsight/gallery-4.png",
      process.env.PUBLIC_URL + "/snapsight/gallery-5.png",
      process.env.PUBLIC_URL + "/snapsight/gallery-6.png",
    ],
    tags: ["Events", "React", "AI", "Transcription", "Translation"],
    details:
      "Contributed across multiple areas of the Snapsight platform, including the Operator dashboard for capturing live event data, Remix for generating post-event content, and attendee-facing customization for presentations and event experiences. Worked on AI-powered workflows involving real-time transcription, translation, content generation, and intelligent event data processing.",
    privateProject: true,
  },
];

export const skills = [
  "Html",
  "Css",
  "Javascript",
  "Python",
  "ReactJs",
  "Redux",
  "NextJs",
  "Sass",
  "Tailwind CSS",
  "WebPack",
  "GraphQl",
  "Apollo",
  "React-Native",
  "Communication Skill",
  "Git",
  "Github",
  "Team Working",
  "Prompt Engineering",
  "AI-Assisted Development",
  "Generative AI Tools",
  "AI Image Generation",
  "LLM Workflows",
];

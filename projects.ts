// data/projects.ts
export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string; // path relative to /public
  url?: string; // live demo link (optional)
  repo?: string; // source code link (optional)
};

export const projects = [
  {
    title: "Portfolio V2",
    description:
      "A modern responsive portfolio built with Next.js, Tailwind, and Framer Motion.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/images/projects/portfolio.png",
    url: "https://yourusername.vercel.app",
    repo: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Realtime Chat App",
    description:
      "A real‑time chat application using Socket.io, Express, and React.",
    tags: ["Node.js", "Socket.io", "React"],
    image: "/images/projects/chatapp.png",
    url: "https://chatapp-demo.com",
    repo: "https://github.com/yourusername/chat-app",
  },
  // Add as many as you like …
];

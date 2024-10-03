import { HomeIcon, NotebookIcon } from "lucide-react"
import { Icons } from "@/components/icons"

export const DATA = {
  name: "dan",
  initials: "DMA",
  url: "https://danmyles.com",
  location: "Phoenix, AZ",
  locationLink: "https://www.google.com/maps/place/phoenix",
  description:
    "Aspiring Backend Engineer from Mexico City 🇲🇽 now residing in Phoenix, AZ. Passionate about building reliable & scalable systems.",
  summary:
    "I never know what to write here! I'm Dan, I love building performant and scalable systems. Most of my work is written in some sort of systems language, and I love messing with tools like Docker & SST (IaC). I spend too much time messing with my neovim config (oops), also love working out & going to the gym :)",
  avatarUrl: "/pfp1.png",
  skills: [
    "Go",
    "Postgres",
    "Docker",
    "AWS",
    "React",
    "Next.js",
    "Typescript",
    "Node",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact@danmyles.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dan-myles",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/dan-myles",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/danmyles_",
        icon: Icons.x,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Arizona State University",
      href: "https://asu.edu",
      badges: [],
      location: "Tempe, AZ",
      title: "Software Engineer Internship",
      logoUrl: "/asu.png",
      start: "Jul 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Private Markets",
      badges: [],
      href: "https://www.linkedin.com/company/alcoveridge/",
      location: "Tempe, AZ",
      title: "Mobile Engineer Internship",
      logoUrl: "/privatemarkets.png",
      start: "Jan 2021",
      end: "Apr 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Arizona State University",
      href: "https://asu.edu",
      degree: "B.S. Computer Science",
      logoUrl: "/asu.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "FTLL",
      href: "https://ftll.io/",
      dates: "Native Application",
      active: true,
      description:
        "FTLL is a custom made mod-launcher for DayZ. Written in Rust, completely open-source, and blazingly fast.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Rust",
        "FFI",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ftll.io/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dan-myles/ftll",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.imgur.com/q7x6iKC.png",
      video: "",
    },
    {
      title: "Forkman",
      href: "https://github.com/dan-myles/forkman",
      dates: "Cloud Application",
      active: true,
      description:
        "Forkman is the next generation of Discord community tools. Built for enterprise analytics in mind and fully open source.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Go",
        "SQLite",
        "Docker",
        "AWS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/dan-myles/forkman",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.imgur.com/Wc2mE80.png",
      video: "",
    },
  ],
} as const

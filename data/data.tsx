import {
  Personal,
  Project,
  WorkExperience,
  BlogPost,
  SocialLink,
} from "./types"

export const PERSONAL: Personal = {
  name: "Daniel Myles Aguilera",
  title: "Software Engineer",
}

export const DESCRIPTION = () => {
  return (
    <>
      Welcome! 👋
      <br />
      I’m passionate about architecting robust and scalable backend systems,
      uniting code and infrastructure to craft seamless full stack experiences.
      This is my blog, and personal website, where I share my thoughts and
      insights on design, development, and technology.
    </>
  )
}

export const PROJECTS: Project[] = [
  {
    name: "FTLL",
    description:
      "A simple and small mod launcher & manager for DayZ, built with Rust, Tauri, React and modern tools.",
    link: "https://ftll.io",
    image: "https://i.imgur.com/DvyUSWa.png",
    id: "project1",
  },
  {
    name: "Forkman",
    description:
      "ASU's official open-source verification & custom AI RAG Discord application.",
    image: "https://i.imgur.com/W9XGJFh.png",
    link: "https://github.com/dan-myles/forkman",
    id: "project2",
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "American Eagle",
    title: "Front End Developer",
    start: "May 2025",
    end: "Present",
    id: "work0",
  },
  {
    company: "Alcove Ridge Consulting",
    title: "Full Stack Developer",
    start: "Oct 2024",
    end: "May 2025",
    id: "work1",
  },
  {
    company: "Arizone State University",
    title: "Software Engineer Intern",
    start: "Jul 2024",
    end: "Jan 2024",
    id: "work2",
  },
  {
    company: "Alcove Ridge Consulting",
    title: "Software Engineer Intern",
    start: "Jan 2024",
    end: "Jun 2024",
    id: "work3",
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Why SST Should Be Your Next Backend For Your React Native App",
    description: "A dive into using SST w/ Expo and React Native.",
    link: "/blog/why-sst-should-be-your-next-backend-for-your-react-native-app",
    uid: "blog-1",
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/dan-myles",
  },
  {
    label: "Twitter",
    link: "https://twitter.com/danmyles_",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/dan-myles",
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/danmyles",
  },
]

export const EMAIL = "me@danmyles.com"

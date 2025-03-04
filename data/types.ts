export type Personal = {
  name: string
  title: string
}

export type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

export type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link?: string
  id: string
}

export type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

export type SocialLink = {
  label: string
  link: string
}

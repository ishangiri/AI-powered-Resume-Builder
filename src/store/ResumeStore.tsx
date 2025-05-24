import { create } from 'zustand'

type Experience = {
  title: string
  company: string
  startDate: string
  endDate: string
  description: string[]
  location: string
}

type ResumeStore = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  link: string
  summary: string
  skills: {
    category: string
    skills: string[]
  }[]
  experience: Experience[]
  education: {
    degree: string
    institution: string
    period: string
    location: string
    details?: string
  }[]
  projects: {
    name: string
    description: string
  }[]
  certifications: string[]
  setFirstName: (firstName: string) => void
  setLastName: (lastName: string) => void
  setEmail: (email: string) => void
  setPhone: (phone: string) => void
  setAddress: (address: string) => void
  setLink: (link: string) => void
  setSummary: (summary: string) => void
  setSkills: (skills: { category: string; skills: string[] }[]) => void
  setExperience: (experience: Experience[]) => void
  setEducation: (
    education: {
      degree: string
      institution: string
      period: string
      location: string
      details?: string
    }[]
  ) => void
  setProjects: (
    projects: {
      name: string
      description: string
    }[]
  ) => void
  setCertifications: (certifications: string[]) => void
}

export const useResumeStore = create<ResumeStore>((set) => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  link: '',
  summary: '',
  skills: [],
  experience: [],
  education: [],
  projects: [],
  certifications: [],
  setFirstName: (firstName) => set(() => ({ firstName })),
  setLastName: (lastName) => set(() => ({ lastName })),
  setEmail: (email) => set(() => ({ email })),
  setPhone: (phone) => set(() => ({ phone })),
  setAddress: (address) => set(() => ({ address })),
  setLink: (link) => set(() => ({ link })),
  setSummary: (summary) => set(() => ({ summary })),
  setSkills: (skills) => set(() => ({ skills })),
  setExperience: (experience) => set(() => ({ experience })),
  setEducation: (education) => set(() => ({ education })),
  setProjects: (projects) => set(() => ({ projects })),
  setCertifications: (certifications) => set(() => ({ certifications })),
}))

export interface Skill {
  name: string;
  level: number;
}

export interface Service {
  id: string;
  title: string;
  desc: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  cat: string;
  color: string;
  year: string;
  desc: string;
  url: string | null;
  preview: string | null;
}

export interface Principle {
  num: string;
  title: string;
  desc: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
  nextRole: string;
  bio: string;
  skills: Skill[];
  exp: string;
  photo?: string;
  isVacant?: boolean;
}

export interface ActiveModal {
  type: "project" | "service" | "team" | "contact";
  index: number;
}

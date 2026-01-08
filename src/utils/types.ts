export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

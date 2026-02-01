
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  color: string;
  projectPath: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'devops';
}

export interface Achievement {
  title: string;
  image: string;
  issuer?: string;
}

export interface Feedback {
  author?: string;
  image: string;
  type: 'collab' | 'feedback';
}

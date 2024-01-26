export interface IResume {
  id: string;
  cvName: string;
  details: IDetails;
  summary: string;
  workExpeprience: IWorkExperience[];
  education: IEducation[];
  projects: IProject[];
  links: ILink[];
  skills: ISkill[];
  languages: ILanguage[];
  courses: ICourse[];
}

export interface IDetails {
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  photo: string;
}

export interface IWorkExperience {
  id: string;
  jobTitle: string;
  employer: string;
  city: string;
  startEndDate: string;
  description: string;
}

export interface IEducation {
  id: string;
  school: string;
  degree: string;
  city: string;
  startEndDate: string;
  description: string;
}

export interface IProject {
  id: string;
  title: string;
  link: string;
  description: string;
}

export interface ILink {
  id: string;
  title: string;
  link: string;
}

export interface ISkill {
  id: string;
  title: string;
  level: number; // 0 | 20 | 40 | 60 | 80 | 100
}

export interface ILanguage {
  id: string;
  title: string;
  level: string;
}

export interface ICourse {
  id: string;
  course: string;
  institution: string;
  startEndDate: string;
}

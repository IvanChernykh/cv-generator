export interface IResume {
  id: string;
  cvName: string;
  details: IDetails;
  sectionNames: ISectionNames;
  summary: string;
  workExpeprience: IWorkExperience[];
  education: IEducation[];
  projects: IProject[];
  links: ILink[];
  skills: ISkill[];
  languages: ILanguage[];
  courses: ICourse[];
}

export interface ISectionNames {
  contacts: string;
  summary: string;
  workExpeprience: string;
  education: string;
  projects: string;
  links: string;
  skills: string;
  languages: string;
  courses: string;
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
  descriptionDelta: string;
}

export interface IEducation {
  id: string;
  school: string;
  degree: string;
  city: string;
  startEndDate: string;
  description: string;
  descriptionDelta: string;
}

export interface IProject {
  id: string;
  title: string;
  link: string;
  linkToRepo: string;
  description: string;
  descriptionDelta: string;
}

export interface ILink {
  id: string;
  title: string;
  link: string;
}

export interface ISkill {
  id: string;
  title: string;
  level: number;
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

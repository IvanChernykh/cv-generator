import {
  ICourse,
  IEducation,
  ILanguage,
  ILink,
  ISkill,
  IWorkExperience,
} from '../../utils/types/resume';

export const defaultWorkExperienceNoId: Omit<IWorkExperience, 'id'> = {
  jobTitle: '',
  employer: '',
  city: '',
  startEndDate: '',
  description: '',
};

export const defaultEducationNoId: Omit<IEducation, 'id'> = {
  school: '',
  degree: '',
  city: '',
  startEndDate: '',
  description: '',
};

export const defaultLinkNoId: Omit<ILink, 'id'> = { title: '', link: '' };

export const defaultSkillNoId: Omit<ISkill, 'id'> = {
  title: '',
  level: 20,
};

export const defaultLanguageNoId: Omit<ILanguage, 'id'> = {
  title: '',
  level: '',
};

export const defaultCourseNoId: Omit<ICourse, 'id'> = {
  course: '',
  institution: '',
  startEndDate: '',
};

import {
  ICourse,
  IDetails,
  IEducation,
  ILanguage,
  ILink,
  IProject,
  IResume,
  ISkill,
  IWorkExperience,
} from '../../utils/types/resume';

export interface IResumeState extends IResume {
  summaryDelta: string;
}

export type SectionsWithLists = keyof Omit<
  IResume,
  'summary' | 'details' | 'cvName' | 'id'
>;

export type SetDetailsFieldsPayload = {
  field: keyof Omit<IDetails, 'photo'>;
  value: string;
};

export type AddSectionItemPayload = {
  field: SectionsWithLists;
};

export type DeleteSectionItemPayload = {
  id: string;
  field: SectionsWithLists;
};

export type WorkExperienceFields = keyof Omit<IWorkExperience, 'id'>;
export type ProjectsFields = keyof Omit<IProject, 'id'>;
export type EducationFields = keyof Omit<IEducation, 'id'>;
export type LinksFields = keyof Omit<ILink, 'id'>;
export type SkillsFields = keyof Omit<ISkill, 'id'>;
export type LanguagesFields = keyof Omit<ILanguage, 'id'>;
export type CoursesFields = keyof Omit<ICourse, 'id'>;

export type UpdateSectionItemPayload<T> = {
  id: string;
  list: SectionsWithLists;
  field: T;
  value: string | number;
};

export type UpdateSectionListPayload = {
  listName: SectionsWithLists;
  value: IResume[SectionsWithLists];
};

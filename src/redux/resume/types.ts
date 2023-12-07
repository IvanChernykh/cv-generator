import { IDetails, IResume } from '../../utils/types/resume';

export interface IResumeState extends IResume {}

type SectionsWithLists = keyof Omit<
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

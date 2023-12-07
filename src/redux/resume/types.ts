import { IDetails, IResume } from '../../utils/types/resume';

export interface IResumeState extends IResume {}

export type SetDetailsFieldsPayload = {
  field: keyof Omit<IDetails, 'photo'>;
  value: string;
};

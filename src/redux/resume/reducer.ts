import { Action, handleActions } from 'redux-actions';
import {
  setSummary,
  setCvName,
  setDetailsFields,
  setDetailsPhoto,
} from './actions';
import { IResumeState, SetDetailsFieldsPayload } from './types';

const defaultState: IResumeState = {
  id: '',
  cvName: '',
  details: {
    jobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedIn: '',
    city: '',
    photo: '',
  },
  summary: '',
  workExpeprience: [],
  education: [],
  links: [],
  skills: [],
  languages: [],
  courses: [],
};

export default handleActions<IResumeState, any>(
  {
    [`${setCvName}`]: (state, { payload }: Action<string>) => ({
      ...state,
      cvName: payload,
    }),
    [`${setSummary}`]: (state, { payload }: Action<string>) => ({
      ...state,
      summary: payload,
    }),
    [`${setDetailsFields}`]: (
      state,
      { payload }: Action<SetDetailsFieldsPayload>,
    ) => ({
      ...state,
      details: {
        ...state.details,
        [payload.field]: payload.value,
      },
    }),
    [`${setDetailsPhoto}`]: (state, { payload }: Action<string>) => {
      console.log(payload);
      return {
        ...state,
        details: { ...state.details, photo: payload },
      };
    },
  },
  defaultState,
  {},
);

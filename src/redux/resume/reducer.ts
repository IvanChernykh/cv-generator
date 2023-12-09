import { Action, handleActions } from 'redux-actions';
import {
  setSummary,
  setCvName,
  setDetailsFields,
  setDetailsPhoto,
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
} from './actions';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
  IResumeState,
  SetDetailsFieldsPayload,
  UpdateSectionItemPayload,
} from './types';
import { uid } from '../../utils/helpers/generateId';
import {
  defaultWorkExperienceNoId,
  defaultLinkNoId,
  defaultSkillNoId,
  defaultLanguageNoId,
  defaultCourseNoId,
  defaultEducationNoId,
} from './constants';
import { mockResume } from '../../utils/mock/mockData';

const defaultState: IResumeState = mockResume;
// {
//   id: '',
//   cvName: '',
//   details: {
//     jobTitle: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     country: '',
//     city: '',
//     photo: '',
//   },
//   summary: '',
//   workExpeprience: [],
//   education: [],
//   links: [],
//   skills: [],
//   languages: [],
//   courses: [],
// };

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
    [`${setDetailsPhoto}`]: (state, { payload }: Action<string>) => ({
      ...state,
      details: { ...state.details, photo: payload },
    }),
    [`${addSectionItem}`]: (
      state,
      { payload }: Action<AddSectionItemPayload>,
    ) => {
      let newItem = { id: uid() };

      switch (payload.field) {
        case 'workExpeprience':
          newItem = { ...newItem, ...defaultWorkExperienceNoId };
          break;
        case 'education':
          newItem = { ...newItem, ...defaultEducationNoId };
          break;
        case 'links':
          newItem = { ...newItem, ...defaultLinkNoId };
          break;
        case 'skills':
          newItem = { ...newItem, ...defaultSkillNoId };
          break;
        case 'languages':
          newItem = { ...newItem, ...defaultLanguageNoId };
          break;
        case 'courses':
          newItem = { ...newItem, ...defaultCourseNoId };
      }

      return {
        ...state,
        [payload.field]: [...state[payload.field], newItem],
      };
    },
    [`${deleteSectionItem}`]: (
      state,
      { payload }: Action<DeleteSectionItemPayload>,
    ) => ({
      ...state,
      [payload.field]: state[payload.field].filter(
        (item) => item.id !== payload.id,
      ),
    }),
    [`${updateSectionItem}`]: (
      state,
      { payload }: Action<UpdateSectionItemPayload<string>>,
    ) => ({
      ...state,
      [payload.list]: state[payload.list].map((item) =>
        item.id === payload.id
          ? { ...item, [payload.field]: payload.value }
          : item,
      ),
    }),
  },
  defaultState,
  {},
);

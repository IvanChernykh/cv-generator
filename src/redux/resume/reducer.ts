import { Action, handleActions } from 'redux-actions';
import {
  setSummary,
  setCvName,
  setDetailsFields,
  setDetailsPhoto,
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
  updateResume,
  setSummaryDelta,
  updateSectionName,
} from './actions';
import {
  AddSectionItemPayload,
  DeleteSectionItemPayload,
  IResumeState,
  SetDetailsFieldsPayload,
  UpdateSectionListPayload,
  UpdateSectionItemPayload,
  UpdateSectionNamePayload,
} from './types';
import { uid } from '../../utils/helpers/generateId';
import {
  defaultWorkExperienceNoId,
  defaultLinkNoId,
  defaultSkillNoId,
  defaultLanguageNoId,
  defaultCourseNoId,
  defaultEducationNoId,
  defaultProjectNoId,
} from './constants';
import { IResume } from '../../utils/types/resume';

export const defaultState: IResumeState = {
  id: '',
  cvName: '',
  details: {
    jobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    photo: '',
  },
  sectionNames: {
    contacts: 'Details',
    summary: 'Summary',
    workExpeprience: 'Employment History',
    education: 'Education',
    projects: 'Projects',
    links: 'Links',
    skills: 'Skills',
    languages: 'Languages',
    courses: 'Courses',
  },
  summary: '',
  summaryDelta: '',
  workExpeprience: [],
  education: [],
  projects: [],
  links: [],
  skills: [],
  languages: [],
  courses: [],
};

export default handleActions<IResumeState, any>(
  {
    [`${setCvName}`]: (state, { payload }: Action<string>): IResumeState => ({
      ...state,
      cvName: payload,
    }),

    [`${setSummary}`]: (state, { payload }: Action<string>): IResumeState => ({
      ...state,
      summary: payload,
    }),

    [`${setSummaryDelta}`]: (
      state,
      { payload }: Action<string>,
    ): IResumeState => ({
      ...state,
      summaryDelta: payload,
    }),

    [`${setDetailsFields}`]: (
      state,
      { payload }: Action<SetDetailsFieldsPayload>,
    ): IResumeState => ({
      ...state,
      details: {
        ...state.details,
        [payload.field]: payload.value,
      },
    }),

    [`${setDetailsPhoto}`]: (
      state,
      { payload }: Action<string>,
    ): IResumeState => ({
      ...state,
      details: { ...state.details, photo: payload },
    }),

    [`${addSectionItem}`]: (
      state,
      { payload }: Action<AddSectionItemPayload>,
    ): IResumeState => {
      let newItem = { id: uid() };

      switch (payload.field) {
        case 'workExpeprience':
          newItem = { ...newItem, ...defaultWorkExperienceNoId };
          break;
        case 'education':
          newItem = { ...newItem, ...defaultEducationNoId };
          break;
        case 'projects':
          newItem = { ...newItem, ...defaultProjectNoId };
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
    ): IResumeState => ({
      ...state,
      [payload.field]: state[payload.field].filter(
        (item) => item.id !== payload.id,
      ),
    }),

    [`${updateSectionItem}`]: (
      state,
      { payload }: Action<UpdateSectionItemPayload<string>>,
    ): IResumeState => ({
      ...state,
      [payload.list]: state[payload.list].map((item) =>
        item.id === payload.id
          ? { ...item, [payload.field]: payload.value }
          : item,
      ),
    }),

    [`${updateSectionList}`]: (
      state,
      { payload }: Action<UpdateSectionListPayload>,
    ): IResumeState => ({
      ...state,
      [payload.listName]: [...payload.value],
    }),

    [`${updateSectionName}`]: (
      state,
      { payload }: Action<UpdateSectionNamePayload>,
    ): IResumeState => ({
      ...state,
      sectionNames: { ...state.sectionNames, [payload.section]: payload.value },
    }),

    [`${updateResume}`]: (
      state,
      { payload }: Action<IResume>,
    ): IResumeState => ({
      ...state,
      ...payload,
    }),
  },
  { ...defaultState },
  {},
);

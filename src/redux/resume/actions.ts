import { createActions } from 'redux-actions';

export enum ResumeActions {
  SET_CV_NAME = 'SET_CV_NAME',
  SET_SUMMARY = 'SET_SUMMARY',
  SET_SUMMARY_DELTA = 'SET_SUMMARY_DELTA',
  SET_DETAILS_FIELDS = 'SET_DETAILS_FIELDS',
  SET_DETAILS_PHOTO = 'SET_DETAILS_PHOTO',
  ADD_SECTION_ITEM = 'ADD_SECTION_ITEM',
  DELETE_SECTION_ITEM = 'DELETE_SECTION_ITEM',
  UPDATE_SECTION_ITEM = 'UPDATE_SECTION_ITEM',
  UPDATE_SECTION_LIST = 'UPDATE_SECTION_LIST',
  UPDATE_RESUME = 'UPDATE_RESUME',
  UPDATE_SECTION_NAME = 'UPDATE_SECTION_NAME',
}

export const {
  setCvName,
  setSummary,
  setSummaryDelta,
  setDetailsFields,
  setDetailsPhoto,
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
  updateSectionName,
  updateResume,
} = createActions(
  ResumeActions.SET_CV_NAME,
  ResumeActions.SET_SUMMARY,
  ResumeActions.SET_SUMMARY_DELTA,
  ResumeActions.SET_DETAILS_FIELDS,
  ResumeActions.SET_DETAILS_PHOTO,
  ResumeActions.ADD_SECTION_ITEM,
  ResumeActions.DELETE_SECTION_ITEM,
  ResumeActions.UPDATE_SECTION_ITEM,
  ResumeActions.UPDATE_SECTION_LIST,
  ResumeActions.UPDATE_SECTION_NAME,
  ResumeActions.UPDATE_RESUME,
);

import { createActions } from 'redux-actions';

export enum ResumeActions {
  SET_CV_NAME = 'SET_CV_NAME',
  SET_SUMMARY = 'SET_SUMMARY',
  SET_DETAILS_FIELDS = 'SET_DETAILS_FIELDS',
  SET_DETAILS_PHOTO = 'SET_DETAILS_PHOTO',
  ADD_SECTION_ITEM = 'ADD_SECTION_ITEM',
  DELETE_SECTION_ITEM = 'DELETE_SECTION_ITEM',
}

export const {
  setCvName,
  setSummary,
  setDetailsFields,
  setDetailsPhoto,
  addSectionItem,
  deleteSectionItem,
} = createActions(
  ResumeActions.SET_CV_NAME,
  ResumeActions.SET_SUMMARY,
  ResumeActions.SET_DETAILS_FIELDS,
  ResumeActions.SET_DETAILS_PHOTO,
  ResumeActions.ADD_SECTION_ITEM,
  ResumeActions.DELETE_SECTION_ITEM,
);
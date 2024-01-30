import {
  defaultCourseNoId,
  defaultEducationNoId,
  defaultLanguageNoId,
  defaultLinkNoId,
  defaultProjectNoId,
  defaultSkillNoId,
  defaultWorkExperienceNoId,
} from '../../redux/resume/constants';
import { defaultState } from '../../redux/resume/reducer';

const checkCorrectTypesInSection = (iVal: any, iKey: string, key: string) => {
  return (
    (typeof iVal !== 'string' && iKey !== 'level') ||
    (iKey === 'level' && typeof iVal !== 'number' && key !== 'languages')
  );
};

const checkCorrectKeysInSections = (key: string, iKey: string) => {
  return (
    ((key === 'workExpeprience' &&
      !Object.keys(defaultWorkExperienceNoId).includes(iKey)) ||
      (key === 'education' &&
        !Object.keys(defaultEducationNoId).includes(iKey)) ||
      (key === 'projects' && !Object.keys(defaultProjectNoId).includes(iKey)) ||
      (key === 'links' && !Object.keys(defaultLinkNoId).includes(iKey)) ||
      (key === 'skills' && !Object.keys(defaultSkillNoId).includes(iKey)) ||
      (key === 'languages' &&
        !Object.keys(defaultLanguageNoId).includes(iKey)) ||
      (key === 'courses' && !Object.keys(defaultCourseNoId).includes(iKey))) &&
    iKey !== 'id'
  );
};

export const isCorrectType = (obj: any): boolean => {
  if (!Object.keys(obj).length) {
    return false;
  }
  let isValid = true;

  const detailsKeys = Object.keys(defaultState.details);

  Object.entries(obj).forEach(([key, val]: [string, any]) => {
    if (key in defaultState) {
      if (Array.isArray(val)) {
        val.forEach((item) => {
          if (typeof item === 'object' && !Array.isArray(item)) {
            Object.entries(item).forEach(([iKey, iVal]) => {
              if (checkCorrectTypesInSection(iVal, iKey, key)) {
                isValid = false;
              }
              if (checkCorrectKeysInSections(key, iKey)) {
                isValid = false;
              }
            });
          } else {
            isValid = false;
          }
        });
      } else if (typeof val === 'object') {
        Object.entries(([dKey, dVal]: [any, any]) => {
          if (!detailsKeys.includes(dKey) || typeof dVal !== 'string') {
            isValid = false;
          }
        });
      } else if (typeof val !== 'string') {
        isValid = false;
      }
    } else {
      isValid = false;
    }
  });
  return isValid;
};

import { connect } from 'react-redux';

import { StoreType } from '../../../../redux/rootReducer';
import {
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
} from '../../../../redux/resume/actions';
import { WorkExperience } from './WorkExperience';

export default connect(
  (state: StoreType) => ({
    workExpeprience: state.resume.workExpeprience,
    sectionName: state.resume.sectionNames.workExpeprience,
  }),
  {
    addSectionItem,
    deleteSectionItem,
    updateSectionItem,
    updateSectionList,
  },
)(WorkExperience);

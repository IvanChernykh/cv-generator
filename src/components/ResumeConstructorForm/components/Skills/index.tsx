import { connect } from 'react-redux';

import { StoreType } from '../../../../redux/rootReducer';
import {
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
} from '../../../../redux/resume/actions';
import { Skills } from './Skills';

export default connect(
  (state: StoreType) => ({
    skills: state.resume.skills,
    sectionName: state.resume.sectionNames.skills,
  }),
  {
    addSectionItem,
    deleteSectionItem,
    updateSectionItem,
    updateSectionList,
  },
)(Skills);

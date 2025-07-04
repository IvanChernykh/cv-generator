import { connect } from 'react-redux';

import { StoreType } from '../../../../redux/rootReducer';
import {
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
} from '../../../../redux/resume/actions';
import { Education } from './Education';

export default connect(
  (state: StoreType) => ({
    education: state.resume.education,
    sectionName: state.resume.sectionNames.education,
  }),
  {
    addSectionItem,
    deleteSectionItem,
    updateSectionItem,
    updateSectionList,
  },
)(Education);

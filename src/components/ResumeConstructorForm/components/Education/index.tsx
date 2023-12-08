import { connect } from 'react-redux';

import { StoreType } from '../../../../redux/rootReducer';
import {
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
} from '../../../../redux/resume/actions';
import { Education } from './Education';

export default connect(
  (state: StoreType) => ({
    education: state.resume.education,
  }),
  {
    addSectionItem,
    deleteSectionItem,
    updateSectionItem,
  },
)(Education);

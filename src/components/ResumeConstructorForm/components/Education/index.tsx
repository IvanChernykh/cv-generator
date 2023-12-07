import { connect } from 'react-redux';

import { StoreType } from '../../../../redux/rootReducer';
import {
  addSectionItem,
  deleteSectionItem,
} from '../../../../redux/resume/actions';
import { Education } from './Education';

export default connect(
  (state: StoreType) => ({
    education: state.resume.education,
  }),
  {
    addSectionItem,
    deleteSectionItem,
  },
)(Education);

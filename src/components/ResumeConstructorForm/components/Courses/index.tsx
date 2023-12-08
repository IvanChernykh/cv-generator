import { connect } from 'react-redux';

import { StoreType } from '../../../../redux/rootReducer';
import {
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
} from '../../../../redux/resume/actions';
import { Courses } from './Courses';

export default connect(
  (state: StoreType) => ({
    courses: state.resume.courses,
  }),
  {
    addSectionItem,
    deleteSectionItem,
    updateSectionItem,
  },
)(Courses);

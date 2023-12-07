import { connect } from 'react-redux';

import { StoreType } from '../../../../redux/rootReducer';
import {
  addSectionItem,
  deleteSectionItem,
} from '../../../../redux/resume/actions';
import { Skills } from './Skills';

export default connect(
  (state: StoreType) => ({
    skills: state.resume.skills,
  }),
  {
    addSectionItem,
    deleteSectionItem,
  },
)(Skills);

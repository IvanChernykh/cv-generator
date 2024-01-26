import { connect } from 'react-redux';

import { StoreType } from '../../../../redux/rootReducer';
import { Projects } from './Projects';
import {
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
} from '../../../../redux/resume/actions';

export default connect(
  (state: StoreType) => ({
    projects: state.resume.projects,
  }),
  { addSectionItem, deleteSectionItem, updateSectionItem },
)(Projects);

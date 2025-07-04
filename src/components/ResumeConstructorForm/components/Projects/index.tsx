import { connect } from 'react-redux';

import { StoreType } from '../../../../redux/rootReducer';
import { Projects } from './Projects';
import {
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
} from '../../../../redux/resume/actions';

export default connect(
  (state: StoreType) => ({
    projects: state.resume.projects,
    sectionName: state.resume.sectionNames.projects,
  }),
  { addSectionItem, deleteSectionItem, updateSectionItem, updateSectionList },
)(Projects);

import { connect } from 'react-redux';

import { StoreType } from '../../../../redux/rootReducer';
import {
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
} from '../../../../redux/resume/actions';
import { Links } from './Links';

export default connect(
  (state: StoreType) => ({
    links: state.resume.links,
    sectionName: state.resume.sectionNames.links,
  }),
  {
    addSectionItem,
    deleteSectionItem,
    updateSectionItem,
    updateSectionList,
  },
)(Links);

import { connect } from 'react-redux';

import { StoreType } from '../../../../redux/rootReducer';
import {
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
} from '../../../../redux/resume/actions';
import { Links } from './Links';

export default connect(
  (state: StoreType) => ({
    links: state.resume.links,
  }),
  {
    addSectionItem,
    deleteSectionItem,
    updateSectionItem,
  },
)(Links);

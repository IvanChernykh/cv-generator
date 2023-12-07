import { connect } from 'react-redux';

import { StoreType } from '../../../../redux/rootReducer';
import {
  addSectionItem,
  deleteSectionItem,
} from '../../../../redux/resume/actions';
import { Links } from './Links';

export default connect(
  (state: StoreType) => ({
    links: state.resume.links,
  }),
  {
    addSectionItem,
    deleteSectionItem,
  },
)(Links);

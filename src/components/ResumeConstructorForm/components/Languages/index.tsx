import { connect } from 'react-redux';
import { Languages } from './Languages';
import { StoreType } from '../../../../redux/rootReducer';
import {
  addSectionItem,
  deleteSectionItem,
  updateSectionItem,
  updateSectionList,
} from '../../../../redux/resume/actions';

export default connect(
  (state: StoreType) => ({
    languages: state.resume.languages,
  }),
  {
    addSectionItem,
    deleteSectionItem,
    updateSectionList,
    updateSectionItem,
  },
)(Languages);

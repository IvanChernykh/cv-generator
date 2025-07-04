import { connect } from 'react-redux';
import { PersonalDetails } from './PersonalDetails';
import {
  setDetailsFields,
  setDetailsPhoto,
} from '../../../../redux/resume/actions';
import { StoreType } from '../../../../redux/rootReducer';

export default connect(
  (state: StoreType) => ({
    details: state.resume.details,
    sectionName: state.resume.sectionNames.contacts,
  }),
  { setDetailsFields, setDetailsPhoto },
)(PersonalDetails);

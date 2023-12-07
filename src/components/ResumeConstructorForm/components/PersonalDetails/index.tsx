import { connect } from 'react-redux';
import { PersonalDetails } from './PersonalDetails';
import {
  setDetailsFields,
  setDetailsPhoto,
} from '../../../../redux/resume/actions';
import { StoreType } from '../../../../redux/rootReducer';

export default connect(
  (state: StoreType) => {
    console.log(state);
    return {
      details: state.resume.details,
    };
  },
  { setDetailsFields, setDetailsPhoto },
)(PersonalDetails);

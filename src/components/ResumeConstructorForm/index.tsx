import { connect } from 'react-redux';
import { ResumeConstructorForm } from './ResumeConstructorForm';
import { StoreType } from '../../redux/rootReducer';
import { setCvName } from '../../redux/resume/actions';

export default connect(
  (state: StoreType) => ({
    cvName: state.resume.cvName,
  }),
  { setCvName },
)(ResumeConstructorForm);

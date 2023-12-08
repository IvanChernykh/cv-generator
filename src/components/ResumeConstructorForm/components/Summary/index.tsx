import { connect } from 'react-redux';
import { Summary } from './Summary';
import { setSummary } from '../../../../redux/resume/actions';
import { StoreType } from '../../../../redux/rootReducer';

export default connect(
  (state: StoreType) => ({
    summary: state.resume.summary,
  }),
  { setSummary },
)(Summary);

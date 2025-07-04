import { connect } from 'react-redux';
import { Summary } from './Summary';
import { setSummary, setSummaryDelta } from '../../../../redux/resume/actions';
import { StoreType } from '../../../../redux/rootReducer';

export default connect(
  (state: StoreType) => ({
    summary: state.resume.summary,
    sectionName: state.resume.sectionNames.summary,
  }),
  { setSummary, setSummaryDelta },
)(Summary);

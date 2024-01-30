import { connect } from 'react-redux';
import { TopPanel } from './TopPanel';
import { StoreType } from '../../../../redux/rootReducer';
import { updateResume } from '../../../../redux/resume/actions';

export default connect((state: StoreType) => ({ resume: state.resume }), {
  updateResume,
})(TopPanel);

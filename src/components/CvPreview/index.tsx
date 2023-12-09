import { connect } from 'react-redux';
import { CvPreview } from './CvPreview';
import { StoreType } from '../../redux/rootReducer';

export default connect(
  (state: StoreType) => ({
    resume: state.resume,
  }),
  {},
)(CvPreview);

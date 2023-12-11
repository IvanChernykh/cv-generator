import { connect } from 'react-redux';
import { StoreType } from '../../redux/rootReducer';
import { App } from './App';

export default connect(
  (state: StoreType) => ({
    loggedIn: state.auth.loggedIn,
  }),
  {},
)(App);

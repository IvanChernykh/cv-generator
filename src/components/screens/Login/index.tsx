import { connect } from 'react-redux';
import { Login } from './Login';
import { setLoggedIn } from '../../../redux/auth/actions';

export default connect(() => ({}), { setLoggedIn })(Login);

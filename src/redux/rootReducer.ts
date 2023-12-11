import { combineReducers } from 'redux';
import resumeReducer from './resume/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  resume: resumeReducer,
});

export type StoreType = ReturnType<typeof rootReducer>;

export default rootReducer;

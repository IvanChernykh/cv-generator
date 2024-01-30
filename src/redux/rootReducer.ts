import { combineReducers } from 'redux';
import resumeReducer from './resume/reducer';

const rootReducer = combineReducers({
  resume: resumeReducer,
});

export type StoreType = ReturnType<typeof rootReducer>;

export default rootReducer;

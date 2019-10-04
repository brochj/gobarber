import {combineReducers} from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import dietPlan from './dietPlan/reducer';
import meal from './meal/reducer';
import dish from './dish/reducer';

export default combineReducers({
  auth,
  user,
  dietPlan,
  meal,
  dish,
});

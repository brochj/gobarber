import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  calorie: null,
  title: null,
  meals: [],
  loading: false,
};

export default function meal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meal/CREATE_MEAL_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meal/CREATE_MEAL_SUCCESS': {
        draft.id = action.payload.id;
        draft.calorie = action.payload.calorie;
        draft.title = action.payload.title;
        draft.loading = false;
        break;
      }
      case '@meal/CREATE_MULTIPLE_MEALS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meal/CREATE_MULTIPLE_MEALS_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@meal/GET_MEALS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meal/GET_MEALS_SUCCESS': {
        draft.meals = action.payload;
        draft.loading = false;
        break;
      }
      case '@meal/MEAL_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@meal/CHANGE_ACTIVE_MEAL': {
        draft.id = action.payload.id;
        draft.title = action.payload.title;
        break;
      }

      default:
        break;
    }
  });
}

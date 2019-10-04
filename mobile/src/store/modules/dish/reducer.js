import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  title: null,
  dishes: [],
  loading: false,
};

export default function dish(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@dish/CREATE_DISH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@dish/CREATE_DISH_SUCCESS': {
        draft.id = action.payload.id;
        draft.title = action.payload.title;
        draft.loading = false;
        break;
      }

      case '@dish/GET_DISHES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@dish/GET_DISHES_SUCCESS': {
        draft.dishes = action.payload;
        draft.loading = false;
        break;
      }
      case '@dish/DELETE_DISH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@dish/DELETE_DISH_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@dish/DISH_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@dish/CHANGE_ACTIVE_DISH': {
        draft.id = action.payload.id;
        draft.title = action.payload.title;
        draft.loading = false;
        break;
      }

      default:
        break;
    }
  });
}

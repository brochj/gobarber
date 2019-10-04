import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  objective: 'maintainWeight',
  calorieGoal: null,
  calorieIntake: null,
  physicalActivity: 'light',
  loading: false,
};

export default function dietPlan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@dietPlan/CREATE_DIET_PLAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@dietPlan/CREATE_DIET_PLAN_SUCCESS': {
        draft.id = action.payload.id;
        draft.objective = action.payload.objective;
        draft.calorieGoal = action.payload.calorie_goal;
        draft.calorieIntake = action.payload.calorie_intake;
        draft.physicalActivity = action.payload.physical_activity;
        draft.loading = false;
        break;
      }
      case '@dietPlan/DIET_PLAN_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        break;
    }
  });
}

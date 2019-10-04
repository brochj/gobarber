export function createDietPlanRequest(dietPlan) {
  return {
    type: '@dietPlan/CREATE_DIET_PLAN_REQUEST',
    payload: dietPlan,
  };
}

export function createDietPlanSuccess(dietPlan) {
  return {
    type: '@dietPlan/CREATE_DIET_PLAN_SUCCESS',
    payload: dietPlan,
  };
}

export function createDietPlanFailure() {
  return {
    type: '@dietPlan/DIET_PLAN_FAILURE',
  };
}

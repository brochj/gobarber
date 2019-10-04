export function createMealRequest(meal, dietPlanId) {
  return {
    type: '@meal/CREATE_MEAL_REQUEST',
    payload: { meal, dietPlanId },
  };
}

export function createMealSuccess(meal) {
  return {
    type: '@meal/CREATE_MEAL_SUCCESS',
    payload: meal,
  };
}

export function createMultipleMealsRequest(meals, dietPlanId) {
  return {
    type: '@meal/CREATE_MULTIPLE_MEALS_REQUEST',
    payload: { meals, dietPlanId },
  };
}

export function createMultipleMealsSuccess() {
  return {
    type: '@meal/CREATE_MULTIPLE_MEALS_SUCCESS',
  };
}

export function getMealsRequest(dietPlanId) {
  return {
    type: '@meal/GET_MEALS_REQUEST',
    payload: dietPlanId,
  };
}

export function getMealsSuccess(meals) {
  return {
    type: '@meal/GET_MEALS_SUCCESS',
    payload: meals,
  };
}

export function createMealFailure() {
  return {
    type: '@meal/MEAL_FAILURE',
  };
}

export function changeActiveMeal(meal) {
  return {
    type: '@meal/CHANGE_ACTIVE_MEAL',
    payload: meal,
  };
}

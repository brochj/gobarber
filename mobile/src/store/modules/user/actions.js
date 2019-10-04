export function updateRequest(user) {
  return {
    type: '@user/UPDATE_REQUEST',
    payload: user,
  };
}

export function updateSuccess(user) {
  return {
    type: '@user/UPDATE_SUCCESS',
    payload: user,
  };
}

export function updateFailure() {
  return {
    type: '@user/UPDATE_FAILURE',
  };
}

export function changePhysicalActivity(level) {
  return {
    type: '@user/CHANGE_PHYSICAL_ACTIVITY',
    payload: level,
  };
}

export function changeCalorieIntake(calorie) {
  return {
    type: '@user/CHANGE_CALORIE_INTAKE',
    payload: calorie,
  };
}

export function changeObjective(objective) {
  return {
    type: '@user/CHANGE_OBJECTIVE',
    payload: objective,
  };
}

export function changeCalorieGoal(calorieGoal) {
  return {
    type: '@user/CHANGE_CALORIE_GOAL',
    payload: calorieGoal,
  };
}

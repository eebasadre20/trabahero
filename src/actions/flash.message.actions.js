import { alertConstants } from '../constants/alert.constants';

export const alertActions = {
  success,
  error,
  clear,
  warning,
};

function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}

function warning() {
  return { type: alertConstants.WARNING, messsage }
}
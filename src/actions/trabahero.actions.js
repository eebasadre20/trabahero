import { userConstants } from '../constants/user.constants';
import { trabaheroService } from '../services/trabahero.service';
// import { flashMesssages } from './flash.message.actions';
// import axios from 'axios';

export function createTrabahero(data) {
  return dispatch => {
    return trabaheroService.register(data);
  }
}

export function trabaheroCreated(data) {
  return {
    type: 'CREATE_TRABAHERO_SUCCESS',
    msg: data.msg
  }
}

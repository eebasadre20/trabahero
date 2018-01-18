import { userConstants } from '../constants/user.constants';
import { trabaheroService } from '../services/trabahero.service';
// import { flashMesssages } from './flash.message.actions';
import axios from 'axios';

export function registerTrabahero(data) {
  return dispatch => {
    return trabaheroService.register(data)
  }
}

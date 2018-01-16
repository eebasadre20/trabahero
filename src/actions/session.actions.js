import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';
// import { flashMesssages } from './flash.message.actions';
import axios from 'axios';

export function login(username, password) {
  return dispatch => {
    userService.login(username, password)
      .then(response => {
        console.log( response );
      }).catch(error => {
        console.log(error);
      });
  }
}
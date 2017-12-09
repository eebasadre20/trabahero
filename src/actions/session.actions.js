import { userConstants } from '../constants';
import { userService } from '../services';
import { flashMesssages } from './';
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
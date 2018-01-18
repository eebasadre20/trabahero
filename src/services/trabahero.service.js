import axios from 'axios';

export const trabaheroService = {
  register,
}

function register(data) {
  return axios({
    method: 'POST',
    url: 'http://demo4252276.mockable.io/register/trabahero',
    data: data,
    headers: { 'Content-Type': 'application/json' },
  })
}

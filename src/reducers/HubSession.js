const initial = {
  username: null,
  password: null,
}

const hub = (state=initial, action) => {
  switch(action.type) {
    case 'LOGIN_HUB_USER':
      console.log('LOGIN_HUB_USER');
    default:
      return state;
  }
}

export default hub;

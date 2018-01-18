const initial = {
  msg: 'Hello, Edsil!',
  isRequesting: false,
}

const trabahero = (state=initial, action) => {
  switch(action.type) {
    case 'CREATE_TRABAHERO_SUCCESS':
      console.log('CREATE_TRABAHERO_SUCCESS')
      return Object.assign({}, state, { msg: action.msg });
    case 'POST_REQUEST':
      console.log('POST_REQUEST');
      // return Object.assign({}, state, { isRequesting: isRequesting })
    default:
      return state;
  }
}

export default trabahero;
import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegisterAsTrabaheroForm from './registerForm'
import { registerTrabahero } from '../../actions/trabahero.actions'

class RegisterAsTrabaheroPage extends Component {
  render(){
    return (
      <RegisterAsTrabaheroForm/>
    )
  }
}

// RegisterAsTrabaheroPage.propTypes = {
//   registerTrabahero: React.PropTypes.func.isRequired,
// }

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegisterTrabahero: () => {
      console.log('Register trabahero');
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterAsTrabaheroPage);

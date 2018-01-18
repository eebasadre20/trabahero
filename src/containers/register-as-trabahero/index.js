import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegisterAsTrabaheroForm from '../../components/Trabahero/PreRegistration/PreRegistrationFormPage'
import { createTrabahero, trabaheroCreated } from '../../actions/trabahero.actions'

class RegisterAsTrabaheroPage extends Component {
  render(){
    return (
      <RegisterAsTrabaheroForm registerTrabahero={ this.props.registerTrabahero } trabaheroCreated={ this.props.trabaheroCreated } trabahero={ this.props.trabahero } history={ this.props.history }/>
    )
  }
}

// RegisterAsTrabaheroPage.propTypes = {
//   registerTrabahero: React.PropTypes.func.isRequired,
// }

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerTrabahero: (data) => {
      return dispatch(createTrabahero(data));
    },
    trabaheroCreated: (data) => {
      return dispatch(trabaheroCreated(data));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterAsTrabaheroPage);

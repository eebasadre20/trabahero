import React, { Component } from 'react'

class ThankYouPage extends Component {
  componentWillMount() {
    // debugger;
    // console.log(this.props.history.entries[this.props.history.index - 1]);
  }

  render() {
    return (
      <div>
        <h2>Thanks for Pre-registering. There will be an email will be sent to you for further info.</h2>
      </div>
    )
  }
}


export default ThankYouPage;
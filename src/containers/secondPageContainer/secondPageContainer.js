import React, { Component } from 'react'
import { connect } from 'react-redux'


export  class SecondPageContainer extends Component {
  render() {
    return (
      <div>secondPageContainer</div>
    )
  }
}
const mapStateToProps = state => {
    return {
        ctr: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // setup : () => { dispatch(setup()) },
    }
}

export default (connect(mapStateToProps,mapDispatchToProps)(SecondPageContainer))

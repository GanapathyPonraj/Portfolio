import React, { Component } from 'react'
import HomePageComponent from '../../components/homePage/homePageComponent'
import { connect } from 'react-redux';
import {setup} from '../../store/action';

class HomeContainer extends Component {
    // constructor(props){
    //     super(props);
    // }

    callState = () => {
       this.props.setup()
    }

  render() {
    return (
      <div>
        {/* homeContainer
        <button onClick={this.callState}>ClickMe</button> */}
        <HomePageComponent/>
      </div>
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
        setup : () => { dispatch(setup()) },
    }
}

export default (connect(mapStateToProps,mapDispatchToProps)(HomeContainer))

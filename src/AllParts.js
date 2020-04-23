import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import from child components..;
import BottomPart from './BottomPart.js';
import DisplayPart from './DisplayPart.js';



class Wrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //console.log('All parts', this.props.data[0])
    console.log('allPart length', this.props)
    return(
      <div>
        <DisplayPart data={this.props.data} dButtonClick={this.props.dButtonClick}/>
        <hr></hr>
        <BottomPart totalLength={this.props.totalLength}/>
      </div>
    )
  }

}

export default Wrapper;


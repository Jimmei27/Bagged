import React, { Component } from 'react';
import DisplayBox from './DisplayBox.js';

class DisplayPart extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      // console.log('displaypart', this.props.data[0])
      // console.log('length', this.props.data.length)
      const dBox = [];
      for (let i = 0; i < this.props.data.length; i+= 1){
        dBox.push(<DisplayBox key={i} uKey={1} data={this.props.data[i]} dButtonClick={this.props.dButtonClick}/>)
      }
      return(
        <div className="DisplayPart" id="DisplayP">
   {dBox}
  </div>
      )
    }

  }
export default DisplayPart;
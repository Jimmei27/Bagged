import React, { Component } from 'react';


class DisplayBox extends Component {
    constructor(props) {
      super(props);
    }


    render() {
      //console.log('displayBox', this.props.data.product)
      return(
        <div className="DisplayBox" id="DisplayB">
   <h3 id='p1'>{this.props.data.product}</h3><img id='image' src={this.props.data.image}/><h4 id='af1'>${this.props.data.af}</h4><h4 id='pp1'>${this.props.data.pp}</h4><h4 id='fd2'>${this.props.data.fd}</h4>
   <div><button type="Submit" id='sButton'>-</button><button type="Submit" id='pButton'>+</button><button type="Submit" id='dButton' onClick={ () => { this.props.dButtonClick(this.props.uKey);}}>X</button></div>
  </div>
      )
    }

  }
export default DisplayBox;
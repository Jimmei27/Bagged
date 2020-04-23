import React, { Component } from 'react';

class BottomPart extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      console.log('hihihi')
      return(
        <div className="bottomPage" id="bottom">
        <label htmlFor="totalItems">Total Items: </label>
        <span id="totalItems">{this.props.totalLength}</span>
        <p>
          <label htmlFor="totalPrices">Total Price: $</label>
          <span id="totalPrices">N/A</span>
        </p>
      </div>
      )
    }

  }
export default BottomPart;
import React, { Component } from 'react';
import Wrapper from './AllParts.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holder : [],
      value : '',
      totalLength : 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dButtonClick = this.dButtonClick.bind(this)
  };

  handleChange(event) {
    //console.log(this.state.value)
    event.preventDefault()
    this.setState({value: event.target.value});
    
  };

  handleSubmit() {
    //console.log(this.state.value)
    event.preventDefault()
    let url = 'http://localhost:3000/search/' /* + this.state.value */
    console.log('state', JSON.stringify(this.state.value))
    //console.log(url)
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ 1 : this.state.value}),
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      let obj = {};
      obj.product = data[0].product;
      obj.image = data[0].image;
      obj.af = data[0].af;
      obj.pp = data[0].pp;
      obj.fd = data[0].fd;
      let newHolder = this.state.holder
      newHolder.push(obj)
      let newCount = this.state.totalLength
      this.setState({holder : newHolder, 
        totalLength: newCount += 1,
        value : ''})
    })
    // alert('hi')
  };

  dButtonClick(key) {
    event.preventDefault()
    let newCount = this.state.totalLength
    this.setState({
      holder : this.state.holder.filter((_, i) => i !== key),
      totalLength: newCount -= 1,
    });
  };

  render() {
    return(
     <div>
       <h2>Add Your Item Here</h2>
       <form>
         <input type='text' onChange={this.handleChange} value={this.state.value}/>
         <input type='submit' value='Add Item' onClick={ () => {
           this.handleSubmit()
         }}/>
       </form>
       <hr></hr>
       <div id="textLine">
       <h3 id='p'>Product</h3><h3 id='i'>Image</h3><h3 id='af'>Amazon Fresh</h3><h3 id='pp'>PeaPod</h3><h3 id='fd'>Fresh<span id='fd1'>Direct</span></h3>
       </div>
       <hr></hr>
       <Wrapper data={this.state.holder} totalLength={this.state.totalLength} dButtonClick={this.dButtonClick}/>
       </div>
    )
  }
}


export default App;

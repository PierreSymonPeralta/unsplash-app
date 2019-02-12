import React, { Component } from 'react';
import TestComponent from '../../components/TestComponent';

class AboutPage extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Initial',
      other: 'Initial Other'
    }
  }

  setName(){
    this.setState({
      name: 'Pedro'
    });
  }

  setOthers(){
    this.setState({
      other: 'Next Other'
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    // console.log('Page -> shouldComponentUpdate');
    // console.log('Page -> Initial Props ', this.props);
    // console.log('Page -> Initial State:', this.state);
    // console.log('Page -> nextProps:', nextProps);
    // console.log('Page -> nextState ', nextState);
    return true;
  }


  render() {
    console.log('Page -> Render');
    return (
      <div className="container"> 
        <h2>About Page</h2>
        <TestComponent data={this.state.name} />
        <button onClick={this.setName.bind(this)}>Set Name</button>
        <button onClick={this.setOthers.bind(this)}>Set Other</button>
      </div>
    );
  }
}
export default AboutPage;

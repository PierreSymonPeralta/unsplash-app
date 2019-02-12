import React from 'react';

class TestComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: props.data
    }
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('Component -> shouldComponentUpdate');
  //   console.log('Component -> Initial Props ', this.props);
  //   console.log('Component -> nextProps:', nextProps);
  //   console.log('Component -> Initial State:', this.state);
  //   console.log('Component -> nextState ', nextState);
  
  //   if(nextProps.data !== this.props.data){
  //   // if(this.state.data !== nextProps.data){
  //     this.setState({
  //       data: this.props.data
  //     });
  //     console.log('Component -> SET THE STATE');
  //     return false
  //   }
  //   return false;
  // }

  setOwnState(){
    this.setState({
      data: 'SHIT!!!!!!!!'
    });
  }

  render(){
    console.log('Component -> ====== Render =====');
    return (
      <div >
        <button onClick={this.setOwnState.bind(this)}>
          Set own state
        </button>
        {this.props.data}
      </div>
    );
  }
}
  
export default TestComponent;
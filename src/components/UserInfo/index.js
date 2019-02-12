import React from 'react';
import './style.scss';

class UserInfo extends React.PureComponent {
  constructor(props) {
    super();
  }

  render(){
    return (
      <div className="user-info" onClick={this.props.onClick}>
        <ul>
          <li>{this.props.user.name}</li>
          <li>{this.props.user.email}</li>
        </ul>
      </div>
    );
  }
}
  
export default UserInfo;
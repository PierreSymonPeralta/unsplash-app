import React, { Component } from 'react'
import userService from '../../service/user-service'
import { UserInfo, Dialog } from '../../components'

class UserPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      openDialog: false
    }
    this.handleUserClickInfo = this.handleUserClickInfo.bind(this);
  }

  // ******** LIFECYCLE METHODS *********** //

  componentDidMount(){
    userService.getAllUser().then(users => {
      this.setState({ users: users});
    });
  }
  
  render() {
    return (
      <div className="container"> 
        <Dialog open={this.state.openDialog}/>
        <h2>User Page</h2>
        { this.state.users.length > 0 &&
          this.state.users.map(user=> {
              return <UserInfo key={user.id} user={user} onClick={this.handleUserClickInfo.bind(this, user)}/>
            }
          )
        }
      </div>
    );
  }

  // ******** CUSTOM METHODS *********** //

  handleUserClickInfo(userObj){
    console.log(userObj);
    this.setState({
      openDialog: !this.state.openDialog
    });
  }
}
export default UserPage;

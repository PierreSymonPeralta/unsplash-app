import React, { Component } from 'react';

// Service
import unsplashService from '../../service/unsplash-service';

// Components
import { UserBanner } from '../../components'

class UserPage extends Component {
  constructor(){
    super();
    this.state = {
      tick: 0
    }
  }

  // ******** LIFECYCLE METHODS *********** //

  componentDidMount(){
    const userName = this.props.match.params.username || '';
    unsplashService.getUserProfile(userName).then(user => {
      this.setState({user});
    });
    setInterval(() => {
      this.setState({
        tick: 1
      });
    }, 2000);
  }
  
  render() {
    return (
      <div className="container"> 
        { !!this.state.user &&
          <UserBanner data={this.state.user}/>
        }
      </div>
    );
  }

  // ******** CUSTOM METHODS *********** //


}
export default UserPage;

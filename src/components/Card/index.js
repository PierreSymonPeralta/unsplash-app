import React from 'react';
import './style.scss';

class Card extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      showOverlay: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  // ******** LIFECYCLE METHODS *********** //

  render() {
    const showOverlay = {opacity: this.state.showOverlay ? 1: 0}
    const card = this.props.data;
    return (
      <div className="card" 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>

        <img src={card.urls.small} alt={card.id}/>
        <div className="card__overlay" style={showOverlay}>
          <div className="card__overlay__content">
            <div className="top__section">
              <span className="pill">{card.likes} <span className="red">&#10084;</span>	</span>
              <span className="pill"> + Add to Fav </span>
            </div>
            <div className="bottom__section">
              <span className="user">
                 <img src={card.user['profile_image'].small} alt={card.user.username}/>
                 <h3>{card.user.name}</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
      )
  }

  // ******** CUSTOM METHODS *********** //

  handleMouseEnter(evt){
    this.setState({
      showOverlay: !this.state.showOverlay
    });
  }

  handleMouseLeave(){
    this.setState({
      showOverlay: !this.state.showOverlay
    });
  }
};
  
export default Card;
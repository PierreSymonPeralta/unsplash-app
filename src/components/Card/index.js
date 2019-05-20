import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import config from '../../config/constants';

/**
 * @props data {Object} Photo details
 * @props size {text}   Size of photo to be fetched
 */
class Card extends React.PureComponent {
  constructor(props){
    super();
    this.state = {
      showOverlay: false,
      card: props.data,
      size: props.size === 'mobile'? 330 : 400
    }
    this.imgEl = React.createRef();
    this.toogleOverlay = this.toogleOverlay.bind(this);
    this.handleObeserver = this.handleObeserver.bind(this);
  }

  // ******** LIFECYCLE METHODS *********** //
  componentDidMount(){
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01
    }
    this.observer = new IntersectionObserver(this.handleObeserver, options);
    this.observer.observe(this.imgEl);
  }

  render() {
    const showOverlay = {opacity: this.state.showOverlay ? 1: 0}
    const c = this.state.card;
    const imgStyle = {
      backgroundColor: c.color, 
      minWidth: `100%`, 
      minHeight: (c.height/(c.width/this.state.size))
    }

    if(this.props.size === config.PHOTO_MOBILE ? true: false){
      return (
        <div className="card card--mobile" onClick={this.toogleOverlay}>
          <span className="user">
              <Link to={`/users/${c.user.username}`}>
                <img src={c.user['profile_image'].small} alt={c.user.username}/>
                <div className="user__details">
                  <span>{c.user.name}</span>
                  { c.user.location && <span>{c.user.location}</span>}
                </div>
              </Link>
          </span>
          <img src='' alt='' style={imgStyle} ref={(el) => this.imgEl = el }/>
          <div className="card__overlay" style={showOverlay}>
            <div className="card__overlay__content"></div>
          </div>
          <span className="pill">{c.likes} <span className="red">&#10084;</span></span>
        </div>
        )
    }else{
      return (
        <div className="card" onMouseEnter={this.toogleOverlay} onMouseLeave={this.toogleOverlay} >
          <img src='' alt="" style={imgStyle} ref={(el) => this.imgEl = el }/>
          <div className="card__overlay" style={showOverlay}>
            <div className="card__overlay__content">
              <div className="top__section">
                <span className="pill">{c.likes} <span className="red">&#10084;</span>	</span>
                <span className="pill"> + Add to Fav </span>
              </div>
              <div className="bottom__section">
                <span className="user">
                  <Link to={`/users/${c.user.username}`}>
                    <img src={c.user['profile_image'].small} alt={c.user.username} />
                    <span>{c.user.name}</span>
                  </Link>
                </span>
              </div>
            </div>
          </div>

        </div>
        )
    }
  }

  // ******** CUSTOM METHODS *********** //

  handleObeserver(entities, observe){

    entities.forEach(e => {
      // console.log(e.isIntersecting);
      // console.log(this.state.card);
      if(e.isIntersecting){
        this.imgEl.src = this.state.card.urls[this.props.size];
        this.observer.unobserve(this.imgEl); // Unsubscribe!! unless will gonna duplicate image call
      }
    });
  }
  
  toogleOverlay(){
    this.setState({
      showOverlay: !this.state.showOverlay
    });
  }
};

export default Card;
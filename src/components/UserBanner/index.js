import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import locationIco from '../../assets/location.svg';

class UserBanner extends React.PureComponent {
  render(){
    const u = this.props.data || {};
    const { photos } = u; 
    const { custom  } = u.tags;
    const bgImages = photos.map(p => p.urls.small.replace('w=400', `w=${(window.innerWidth/3) + 3}`));
    
    const bgStyle = {
      backgroundImage: `url(${bgImages[0]}),url(${bgImages[1]}),url(${bgImages[2]})`,
      backgroundPosition: `left center, center center ,right center`,
      backgroundRepeat: `no-repeat, no-repeat, no-repeat`
    }
    return (
      <div className="user-banner">
        <div className="user-photo">
          <img src={u['profile_image'].large.replace('h=128&w=128', 'h=150&w=150')} alt={u.username}/>
        </div>
        <div className="user-details">
          <div className="photo-details" style={bgStyle}>
            <div>
              <Link to="#">
                <h1>{u['total_photos']}</h1>
              </Link>
              <span>Photos</span>
            </div>
            <div>
              <Link to="#">
                <h1>{u['total_likes']}</h1>
              </Link>
              <span>Likes</span>
            </div>
            <div>
              <Link to="#">
                <h1>{u['total_collections']}</h1>
              </Link>
              <span>Collections</span>
            </div>
          </div>
          <div className="user-profile">
            <div>
              <h3>{u.name}</h3><small>{u.username}</small>
              <div><img src={locationIco} alt="location"/>{u.location}</div>
              <div>{u.bio}</div>
              {/* {
                u['twitter_username'] &&
              <span>Twitter: @{u['twitter_username']}</span>
              }
              
              {
                u['instagram_username'] &&
                <span>Instagram: @{u['instagram_username']}</span>
              } */}
            </div>
            <label>Interest: </label>
            {
              custom &&
              custom.map(i => {
                return (
                 <p className="pill" key={i.title}>{i.title.toUpperCase()}</p>
                )
              })
            }
          </div>
        </div>
        
      </div>
    );
  }
};

  
export default UserBanner;
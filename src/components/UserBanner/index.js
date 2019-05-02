import React from 'react';
// import { Link } from 'react-router-dom';

import './style.scss';
import locationIco from '../../assets/location.svg';

class UserBanner extends React.PureComponent {
  render(){
    const u = this.props.data || {};
    const { photos } = u; 
    const { custom  } = u.tags;

    // TODO - improve this code

    const bgImages = photos.map(p => {
      if(window.innerWidth > 360){
        return p.urls.small.replace('w=400', `w=${(window.innerWidth/3) + 3}`);
      }else{
        return p.urls.small;
      }
    });

    const threeColumnBg = {
      backgroundImage: `url(${bgImages[0]}),url(${bgImages[1]}),url(${bgImages[2]})`,
      backgroundPosition: `left center, center center ,right center`,
      backgroundRepeat: `no-repeat, no-repeat, no-repeat`
    }
    // End TODO
  
    return (
      <div className="banner">
        <div className="banner__photos" style={threeColumnBg}></div>
        <div className="banner__whitespace"></div>

        <div className="banner__user__details">
        
          <div className="banner__user__photo">
            <img src={u['profile_image'].large.replace('h=128&w=128', 'h=150&w=150')} alt={u.username}/>
          </div>
      

          <div className="banner__user__info">
            <div className="banner__user__info__top">
                <div><h1>{u['total_photos']}</h1>Photo</div>
                <div><h1>{u['total_likes']}</h1>Like</div>
                <div><h1>{u['total_collections']}</h1>Collection</div>
            </div>
            <div className="banner__user__info__bottom">
                <div className="name">{u.name}</div>
                <div className="location"><img src={locationIco} alt={u.username}/> {u.location}</div>
                <div className="links">
                  <b>instagram:</b> {`@${u['username']}`} <br />
                  <b>website:</b> <a rel="noopener noreferrer" target="_blank" href={u['portfolio_url']}>{u['portfolio_url']}</a>
                </div>
                <div> { custom.map((tag, i) => <span key={i} className="tag">{tag.title}</span>)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

  
export default UserBanner;
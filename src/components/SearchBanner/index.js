import React from 'react';
import './style.scss';

// Component
import { SearchInput } from '../'

// Services
import unsplashService from '../../service/unsplash-service';

class SearchBanner extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      photo: null
    };
  }
 
  componentDidMount(){
    unsplashService.getRandomPhoto().then(photo => {
      this.setState({ photo: photo });
    })
  }
  render(){
    const bg = {backgroundImage: !!this.state.photo ? `url(${this.state.photo.urls.full})`: ''}
    return (
      <div className="search-banner" style={bg}>
        <div className="search-banner__content">
          <span className="title">Copy of Unsplash</span>
          <span className="description">Beautiful, free photos.</span>
          <span className="description">Gifted by the world’s most generous community of photographers. </span>
            <SearchInput/>
        </div>
      </div>
    );
  }
};
  
export default SearchBanner;
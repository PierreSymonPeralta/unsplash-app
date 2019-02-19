import React from 'react';
import './style.scss';
import {SearchInput} from '../'

class SearchBanner extends React.Component {
  constructor(){
    super();
    this.state ={}
  }
  shouldComponentUpdate(nextProps, nextState){
    // console.log('Banner Props->', nextProps);
    return true;
  }
  componentDidMount(){
    // console.log('Banner Props->', this.props.data);
  }
  render(){
    // console.log('Banner -> Render');
    const bg = {backgroundImage: !!this.props.data ? `url(${this.props.data.urls.full})`: ''}
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
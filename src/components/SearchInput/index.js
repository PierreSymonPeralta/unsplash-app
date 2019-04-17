import React from 'react';
import debounce from 'lodash/debounce';

// Services
import unsplashService from '../../service/unsplash-service';

// Redux 
import { connect } from "react-redux";
import { setFilter, loadPhotos } from './actions';

import './style.scss';


class SearchInput extends React.PureComponent {
  constructor(){
    super();

    this.onSearchChange = this.onSearchChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount(){
    this.searchInput = document.getElementById('search');
  }

  render(){
    return (
      <div className="search-input">
        
        <input type="text" name="search" id="search" placeholder="Search photo. . ." onChange={debounce(this.onSearchChange, 500)}/>

        <button className="search-icon">
          <svg version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false">
            <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"></path>
          </svg>
        </button>
        { this.props.query.trim() && 
          <button onClick={this.clearSearch} className="clear-icon">
            <svg version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false">
              <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
            </svg>
          </button>}
      </div>
    );
  }


  // ******** CUSTOM METHODS *********** //

  onSearchChange(e){
    unsplashService.searchPhoto(this.searchInput.value).then(photos => {
      this.props.loadPhotos(loadPhotos(photos, 0));
    });
    this.props.searchAction(setFilter(this.searchInput.value));
  }

  clearSearch(){
    this.searchInput.value = '';
    unsplashService.getAllPhoto().then(photos => {
      this.props.loadPhotos(loadPhotos(photos));
    });
    this.props.searchAction(setFilter(this.searchInput.value));
  }
};


const mapStateToProps = (state) =>{
  const homePageState = state.homeReducer;
  return ({
    query: homePageState.query
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    searchAction: payload => dispatch(payload),
    loadPhotos: action => dispatch(action),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
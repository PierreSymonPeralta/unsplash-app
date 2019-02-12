import React from 'react';
import './style.scss';


class SearchInput extends React.Component {
  constructor(){
    super();
    this.state = {
      query:''
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }
  componentDidMount(){
    
  }
  render(){
    return (
      <div className="search-input">
        <button>
          <svg version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false">
            <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"></path>
          </svg>
        </button>
        <input type="search" name="query" id="query" placeholder="Search photo. . ."/>
        <button>
        <svg class="BAGAv _1azRR _18QGm" version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false">
          <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
        </svg>
        </button>
      </div>
    );
  }
};
  
export default SearchInput;
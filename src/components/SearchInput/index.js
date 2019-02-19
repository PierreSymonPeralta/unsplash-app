import React from 'react';
import './style.scss';


class SearchInput extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      search:''
    }
    this.onSearchChange = this.onSearchChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  render(){
    return (
      <div className="search-input">
        <button>
          <svg version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false">
            <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"></path>
          </svg>
        </button>
        <input type="text" name="search" id="search" placeholder="Search photo. . ." onChange={this.onSearchChange}/>
       
        {this.state.search.trim() && 
          <button onClick={this.clearSearch}>
            <svg version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false">
              <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
            </svg>
          </button>
        }
      </div>
    );
  }


  // ******** CUSTOM METHODS *********** //

  onSearchChange(e){
    this.searchInput = document.getElementById('search');
    this.setState({
      search: this.searchInput.value
    });
    // dispatch value
  }

  clearSearch(){
    this.searchInput.value = '';
    this.setState({
      search: ''
    });
  }
};
  
export default SearchInput;
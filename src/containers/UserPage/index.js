// Dependencies
import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';


// Service
import unsplashService from '../../service/unsplash-service';


// Components
import { UserBanner, Gallery, EllipsisLoader } from '../../components';


// Redux 
import { loadPhotos, changeDimension, clearPhotos, initialState } from './actions';

class UserPage extends Component {
  constructor(){
    super();
    this.state = {
      user: null
    }
    // Helpers
    this.breakPoints = {
      sm: 480,
      md: 935,
      lg: 1321
    };
    this.colSet = false;

    this.setupObserver = this.setupObserver.bind(this);
    this.handleObeserver = this.handleObeserver.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.updateDimension = this.updateDimension.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 500);
  }

  // ******** LIFECYCLE METHODS *********** //

  componentDidMount(){
    const userName = this.props.match.params.username || '';
    this.userName = userName;
    this.updateDimension(); 
    this.setupObserver();
    this.getUserData(); 
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount(){
    this.props.initialState(initialState());
    window.removeEventListener('resize', this.onResize);
  }
  
  render() {
    return (
      <div className="container"> 
        { !!this.state.user &&
          <UserBanner data={this.state.user}/>
        }
        {
          this.props.photos.length > 0 && <Gallery photos={this.props.photos} col={this.props.col}/> 
        }
        <div id="observer-target"><EllipsisLoader show/></div>
      </div>
    );
  }

  // ******** CUSTOM METHODS *********** //

  getUserData(){
    unsplashService.getUserProfile(this.userName).then(user => {
      this.setState({user});
      this.getPhotos();
    });
  }

  updateDimension(){
    const d = this.getDimension();
    this.props.changeDimension(changeDimension(d));
    this.colSet = true;
  }

  onResize(){
    this.updateDimension();
    this.props.clearPhotos(clearPhotos());
    this.getPhotos();
  }

  setupObserver(init){
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.02
    }
    this.observer = new IntersectionObserver(this.handleObeserver, options)
    const targetEntry = document.getElementById('observer-target');
    this.observer.observe(targetEntry);
  }

  handleObeserver(entities, observe){
    const x = entities[0].intersectionRect.x;
    // (x === 0) Prevents initial intersection, when the page load
    if(entities[0].isIntersecting && x === 0){
      // console.log('Obeserver Fetch')
      this.getPhotos();
    }
  }

  getPhotos(){
    let page = this.props.page;
    unsplashService.getPhotosByUser(this.userName, page).then(data => {
      // check if data has values
      if (!!data.length) {
        const temp = data.map(p => Object.assign({}, p, {id:`page${page}-${p.id}`}));
        const photos = [...this.props.photos, ...temp];
        page++;
        this.props.loadPhotos(loadPhotos(photos, page));
      }
    });
  }




  // TODO improve this!!!
  getDimension(){
    const d = { col: 3, viewWidth: window.innerWidth };
    if(d.viewWidth <= this.breakPoints.lg){
      if(d.viewWidth <= this.breakPoints.md) {
        d.viewWidth <= this.breakPoints.sm ? d.col = 1 : d.col = 1;
      }else{
        d.col = 2
      }
    }else{
      d.col = 3
    }
    return d;
  }


}

const mapStateToProps = (storeState, ownProps) => {
  // fetch here
  // console.log('HOME PHOTOS:', storeState.homeReducer.photos.length);
  // console.log('USER PHOTOS:', storeState.userReducer.photos.length);
  const userPageState = storeState.userReducer;

  return({
    ...userPageState
  });
}

const mapDispatchToProps = dispatch => {
  return({
    clearPhotos: action => dispatch(action),
    loadPhotos: action => dispatch(action),
    changeDimension: action => dispatch(action),
    initialState: action => dispatch(action)
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);



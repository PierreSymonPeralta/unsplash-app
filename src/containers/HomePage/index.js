

// Dependencies
import React from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';

// Services
import unsplashService from '../../service/unsplash-service';


// Components
import { Gallery, EllipsisLoader, SearchBanner } from '../../components';


// Style
import './style.scss';


// Redux 
import { loadPhotos, changeDimension, clearPhotos, initialState } from './actions';


class HomePage extends React.PureComponent {
  constructor(){
    super();

    // Helper
    this.breakPoints = {
      sm: 480,
      md: 935,
      lg: 1321
    };

    this.colSet = false;

    this.setupObserver    = this.setupObserver.bind(this);
    this.handleObeserver  = this.handleObeserver.bind(this);
    this.getPhotos        = this.getPhotos.bind(this);
    this.updateDimension  = this.updateDimension.bind(this);
    this.onResize         = debounce(this.onResize.bind(this), 500);
  }
  

  // ******** LIFECYCLE METHODS *********** //

  componentDidMount(){
    this.updateDimension();   // Updates the { col, viewWidth } of the store
    this.getPhotos();         // Updates the { photos, page } of the store
    this.setupObserver();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount(){
    this.props.initialState(initialState());
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    return (
      <React.Fragment>
        <SearchBanner/>
        <div className="container"> 
            { 
              (this.props.photos.length > 0  && this.colSet) &&
              <Gallery photos={this.props.photos} col={this.props.col}/> 
            }
            <div id="observer-target">
              <EllipsisLoader show/>
            </div>
        </div>
      </React.Fragment>
    );
  }

  // ******** CUSTOM METHODS *********** //


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

  setupObserver(){
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
      console.log('Obeserver Fetch')
      this.getPhotos();
    }
  }

  getPhotos(){
    let page = this.props.page;
    
    if (!!this.props.query) {
      unsplashService.searchPhoto(this.props.query, page).then(data => {
        const temp = data.map(p => Object.assign({}, p, {id:`page${page}-${p.id}`}));
        const photos = [...this.props.photos, ...temp];
        // Update Store
        page++;
        this.props.loadPhotos(loadPhotos(photos, page));
      });
    } else {
      unsplashService.getAllPhoto(page).then(data => {
        const temp = data.map(p => Object.assign({}, p, {id:`page${page}-${p.id}`}));
        const photos = [...this.props.photos, ...temp];
        // Update Store
        page++;
        this.props.loadPhotos(loadPhotos(photos, page)); // Update store
      });
    }
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
  console.log(storeState);
  const homePageState = storeState.homeReducer;
  return({
    ...homePageState
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

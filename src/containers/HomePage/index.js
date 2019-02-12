import React, { Component } from 'react';
import unsplashService from '../../service/unsplash-service';
import { Gallery, EllipsisLoader, SearchBanner } from '../../components';
import './style.scss';

class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      banner: null,
      photos: [],
      page: 0,
      prevY: 0
    }

    this.setupObserver = this.setupObserver.bind(this);
    this.handleObeserver = this.handleObeserver.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.getBannerPhoto = this.getBannerPhoto.bind(this);
  }
  

  // ******** LIFECYCLE METHODS *********** //

  shouldComponentUpdate(nextProps, nextState){
    const loadingChanges = nextState.loading !== this.state.loading ? true: false;
    const photosChange = nextState.photos.length !== this.state.photos.length ? true: false;
    const bannerChange = !!nextState.banner;
    return loadingChanges || photosChange || bannerChange;
  }

  componentDidMount(){
    this.getBannerPhoto();
    this.getPhotos(this.state.page);
    this.setupObserver();
  }

  render() {
    console.log('Home -> Render');
    return (
      <React.Fragment>
        { !!this.state.banner && <SearchBanner data={this.state.banner}/>}
      <div className="container"> 
        { (this.state.photos.length > 0 && !!this.state.banner) && <Gallery data={this.state.photos}/> }
        <div id="observer-target">
          <EllipsisLoader show/>
        </div>
      </div>
      </React.Fragment>
    );
  }


  // ******** CUSTOM METHODS *********** //

  setupObserver(){
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    this.observer = new IntersectionObserver(this.handleObeserver, options)
    const targetEntry = document.getElementById('observer-target');
    this.observer.observe(targetEntry);
  }

  handleObeserver(entities, observe){
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const page = this.state.page + 1;
      this.getPhotos(page);
      this.setState({ page: this.state.page + 1 });
    }
    this.setState({ prevY: y});
  }

  getPhotos(page){
    console.log('Home -> Get Photo', page);
    unsplashService.getAllPhoto(page).then(data => {
      const temp = data.map(p => Object.assign({}, p, {id:`page${page}-${p.id}`}));
      this.setState({ photos: [...this.state.photos, ...temp] });
    });
  }

  getBannerPhoto(){
    console.log('Home -> Get Banner Photo');
    unsplashService.getRandomPhoto().then(data => {
      console.log('SET BANNER');
      this.setState({ banner: data });
    });
  }

}
export default HomePage;

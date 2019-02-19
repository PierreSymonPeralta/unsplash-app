import React from 'react';

import unsplashService from '../../service/unsplash-service';
import { Gallery, EllipsisLoader, SearchBanner } from '../../components';
import { debounce } from '../../utils';
import './style.scss';

class HomePage extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      banner: null,
      hasBanner: false,
      photos: [],
      col: 3
    }
    
    // Helpers
    this.prevY = 0;
    this.page = 0;
    this.breakPoints = {
      sm: 480,
      md: 935,
      lg: 1321
    };

    this.setInitialState = this.setInitialState.bind(this);
    this.setupObserver = this.setupObserver.bind(this);
    this.handleObeserver = this.handleObeserver.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.updateDimension = debounce(this.updateDimension.bind(this), 500)
  }
  

  // ******** LIFECYCLE METHODS *********** //

  componentDidMount(){
    this.setInitialState(); // Set Initial state at once to minimize render to be called
    this.setupObserver();
    window.addEventListener('resize', this.updateDimension);
  }

  componentWillUnmount(){
    // Remove Listeners
    window.removeEventListener('resize', this.updateDimension);
  }

  render() {
    // console.log('Home -> Render');
    return (
      <React.Fragment>
        { 
          this.state.banner && 
          <SearchBanner data={this.state.banner}
        />}
      <div className="container"> 
        { 
          (this.state.photos.length > 0 && this.state.banner) && 
          <Gallery photos={this.state.photos} col={this.state.col}/> 
        }
        <div id="observer-target">
          <EllipsisLoader show/>
        </div>
      </div>
      </React.Fragment>
    );
  }

  // ******** CUSTOM METHODS *********** //
  
  setInitialState(){
    const p = Promise.all([
      unsplashService.getRandomPhoto(),
      unsplashService.getAllPhoto(0)
    ])
    p.then(res => {
      const d = this.getDimension();
      this.setState(
        { banner: res[0], 
          photos: res[1],
          hasBanner: true,
          ...d
        });
    });
  }


  updateDimension(e){
    const d = this.getDimension();
    this.setState(d);
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
    // const y = entities[0].boundingClientRect.y;
    
    // if (this.prevY > y) {
    if(entities[0].isIntersecting){
      this.page = this.page + 1;
      this.getPhotos(this.page);
      console.log('GET!!!!', this.page);
    }
    // }
    // this.prevY = y;
  }

  getPhotos(page){
    unsplashService.getAllPhoto(page).then(data => {
      const temp = data.map(p => Object.assign({}, p, {id:`page${page}-${p.id}`}));
      this.setState({ photos: [...this.state.photos, ...temp] });
    });
  }

  getDimension(){
    if(window.innerWidth <= this.breakPoints.lg){
      if(window.innerWidth <= this.breakPoints.md) {
        if(window.innerWidth <= this.breakPoints.sm){
          console.log('SMALL -> 1 COL', window.innerWidth);
          // alert('SMALL -> 1 COL:' + window.innerWidth);
          return { col: 1 };
        }else{
          console.log('MID -> 1 COL', window.innerWidth);
          // alert('SMALL -> 1 COL: ' + window.innerWidth);
          return { col: 1 };
        }
      }else{
        console.log('LG -> 2 COL',window.innerWidth);
        // alert('SMALL -> 1 COL: '+ window.innerWidth);
        return { col: 2 };
      }
    }else{
      console.log('DEFAULT -> 3 COL',window.innerWidth);
      // alert('SMALL -> 1 COL: '+ window.innerWidth);
      return { col: 3 };
    }
  }

}
export default HomePage;

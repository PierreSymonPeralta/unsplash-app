import React from 'react';
import './style.scss';
import { Card } from '../';

class Gallery extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      photos: [],
      page: 0,
      loading: false,
      prevY: 0
    }

    this.colOne = {height:0, photos:[]};
    this.colTwo = {height:0, photos:[]};
    this.colThree = {height:0, photos:[]};

    this.formatPhotos = this.formatPhotos.bind(this);
  }

  render(){
    // Distribute photos in 3 column
    this.formatPhotos(); 
    console.log('Galery -> Render');
    return (
      <div className="gallery">
        <div className="gallery__column colOne">
         { this.colOne && this.colOne.photos.length > 0 && this.colOne.photos.map(p => (<Card key={p.id} data={p}/>))}
        </div>
        <div className="gallery__column colTwo">
        { this.colTwo && this.colTwo.photos.length > 0 && this.colTwo.photos.map(p => (<Card key={p.id} data={p}/>))}
        </div>
        <div className="gallery__column colThree">
        { this.colThree && this.colThree.photos.length > 0 && this.colThree.photos.map(p => (<Card key={p.id} data={p}/>))}
        </div>
      </div>
    )
  } 

  // ******** CUSTOM METHODS *********** //

  formatPhotos(){
  
    const temp = {
      colOne: { height: this.colOne.height, photos: [] },
      colTwo: { height: this.colTwo.height, photos: [] },
      colThree: { height: this.colThree.height, photos: [] }
    }

    this.props.data.forEach((p, i) => {
      const arr = Object.keys(temp).map(c => {
        return {
          n: c,
          h: temp[c].height
        }
      });

      const lowest = arr.reduce((l, c, i) => {
        if (i === 0){
          return c
        }else{
          return (c.h < l.h) ? c : l
        }
      }, {});

      const {n} = lowest;

      temp[n].height += p.height;
      temp[n].photos.push(p);
    });

    this.colOne = Object.assign({}, temp.colOne, { height: this.colOne.height + temp.colOne.height });
    this.colTwo = Object.assign({}, temp.colTwo, { height: this.colTwo.height + temp.colTwo.height });
    this.colThree = Object.assign({}, temp.colThree, { height: this.colThree.height + temp.colThree.height });

  }

};
  
export default Gallery;
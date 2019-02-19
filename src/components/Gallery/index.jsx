import React from 'react';
import './style.scss';
import { Card } from '../';
import config from '../../config/constants'


/**
 * @props photos {Array}   Array of photo objects
 * @props col    {Number}  Number of columns to be rendered
 */
class Gallery extends React.PureComponent{
  constructor(props){
    super();
    this.state = {
      loading: false,
    }
    this.columns = {}
    this.formatPhotos = this.formatPhotos.bind(this);
  }
  
  render(){
    // console.log('Galery -> Render');
    this.formatPhotos(); 
    return (
      <div className="gallery">
        {
          Object.keys(this.columns).map((k,i) => {
            return(
              <div key={i} className="gallery__column">
                { this.columns[k].length > 0 && 
                  this.columns[k].map(p => (
                    <Card key={p.id} data={p} size= {
                      this.props.col === 1 ? config.PHOTO_MOBILE: config.PHOTO_SMALL
                    }
                    />
                  ))
                }
              </div>)
          })
        }
      </div>
    )
  } 

  // ******** CUSTOM METHODS *********** //

  formatPhotos(){
    this.columns = {};
    for (let c = 0; c < this.props.col; c++) {
      this.columns[`col-${c}`] = []
    }
    // TODO: height balancing for each column
    this.props.photos.forEach((p, i) =>{
      this.columns[`col-${i % this.props.col}`].push(p)
    });
  }
};
  
export default Gallery;

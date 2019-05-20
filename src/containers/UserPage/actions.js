const USER_LOAD_PHOTOS = 'USER_LOAD_PHOTOS';
const USER_CLEAR_PHOTOS = 'USER_CLEAR_PHOTOS';
const USER_CHANGE_DIMENSION = 'USER_CHANGE_DIMENSION';
const USER_INITIALIZE_STORE = 'USER_INITIALIZE_STORE';


const loadPhotos = (photos, page) => {
  return {
    type: USER_LOAD_PHOTOS,
    payload: {
      photos: photos,
      page: page
    }
  }
}

const clearPhotos = () => {
  return {
    type: USER_CLEAR_PHOTOS
  }
}

const changeDimension = (d) => {
  return {
    type: USER_CHANGE_DIMENSION,
    payload: {
      col: d.col,
      viewWidth: d.viewWidth
    }
  }
}
const initialState = (state) => {
  return {
    type: USER_INITIALIZE_STORE
  }
}

export {
  loadPhotos,
  clearPhotos,
  changeDimension,
  initialState,
  USER_LOAD_PHOTOS,
  USER_CLEAR_PHOTOS ,
  USER_CHANGE_DIMENSION,
  USER_INITIALIZE_STORE

}
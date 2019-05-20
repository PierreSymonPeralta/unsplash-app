const HOME_LOAD_PHOTOS = 'HOME_LOAD_PHOTOS';
const HOME_CLEAR_PHOTOS = 'HOME_CLEAR_PHOTOS';
const HOME_GET_PHOTOS = 'HOME_GET_PHOTOS';
const HOME_CHANGE_DIMENSION = 'HOME_CHANGE_DIMENSION';
const HOME_SEARCH = 'HOME_SEARCH';
const HOME_INITIAL_STATE = 'HOME_INITIAL_STATE';


const loadPhotos = (photos, page) => {
  return {
    type: HOME_LOAD_PHOTOS,
    payload: {
      photos: photos,
      page: page
    }
  }
}

const initialState = () => {
  return {
    type: HOME_INITIAL_STATE
  }
}

const clearPhotos = () => {
  return {
    type: HOME_CLEAR_PHOTOS
  }
}

const changeDimension = (d) => {
  return {
    type: HOME_CHANGE_DIMENSION,
    payload: {
      col: d.col,
      viewWidth: d.viewWidth
    }
  }
}

export {
  loadPhotos,
  clearPhotos,
  changeDimension,
  initialState,
  HOME_CHANGE_DIMENSION,
  HOME_CLEAR_PHOTOS,
  HOME_GET_PHOTOS,
  HOME_LOAD_PHOTOS,
  HOME_SEARCH,
  HOME_INITIAL_STATE
}
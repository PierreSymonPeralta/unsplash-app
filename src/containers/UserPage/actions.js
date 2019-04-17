const loadPhotos = (photos, page) => {
  return {
    type: 'LOAD_PHOTOS',
    payload: {
      photos: photos,
      page: page
    }
  }
}

const clearPhotos = () => {
  return {
    type: 'CLEAR_PHOTOS'
  }
}

const changeDimension = (d) => {
  return {
    type: 'CHANGE_DIMENSION',
    payload: {
      col: d.col,
      viewWidth: d.viewWidth
    }
  }
}
const initializeStore = (state) => {
  return {
    type: 'INITIALIZE_STORE',
    payload: state
  }
}

export {
  loadPhotos,
  clearPhotos,
  changeDimension,
  initializeStore
}
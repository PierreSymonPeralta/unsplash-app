// Dependent to Home Reducer

const setFilter = (query) => {
  return {
    type: 'HOME_SEARCH',
    payload: query,
  }
}

const loadPhotos = (photos, page) => {
  return {
    type: 'HOME_LOAD_PHOTOS',
    payload: {
      photos: photos,
      page: page
    }
  }
}


export {
  setFilter,
  loadPhotos
}
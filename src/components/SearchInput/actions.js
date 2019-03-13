const setFilter = (query) => {
  return {
    type: 'SEARCH',
    payload: query
  }
}

const loadPhotos = (photos, page) => {
  return {
    type: 'LOAD_PHOTOS',
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
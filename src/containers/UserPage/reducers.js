const initialState = {
  photos: [],
  col: 3,
  page: 0,
  viewWidth: window.innerWidth
}
function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PHOTOS':
    const { photos, page } = action.payload;
      return {
        ...state,
        photos: photos,
        page: page
      }
    case 'GET_PHOTOS':
      return {
        ...state,
        photos: state.photos
      }
    case 'CLEAR_PHOTOS':
      return {
        ...state,
        photos: [],
        page: 0
      }
    case 'CHANGE_DIMENSION':
      const { col, viewWidth } = action.payload;
      return {
        ...state,
        col: col,
        viewWidth: viewWidth
      }
    default:
      return state
  }
}

export default userReducer;
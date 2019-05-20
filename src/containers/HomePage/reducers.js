import {
  HOME_CHANGE_DIMENSION,
  HOME_CLEAR_PHOTOS,
  HOME_GET_PHOTOS,
  HOME_LOAD_PHOTOS,
  HOME_SEARCH,
  HOME_INITIAL_STATE
} from './actions';

const initialState = {
  query: '',
  photos: [],
  col: 3,
  page: 0,
  viewWidth: window.innerWidth
}
function homeReducer(state = initialState, action) {
  switch (action.type) {
    case HOME_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0
      }
    case HOME_LOAD_PHOTOS:
    const { photos, page } = action.payload;
      return {
        ...state,
        photos: photos,
        page: page
      }
    case HOME_GET_PHOTOS:
      return {
        ...state,
        photos: state.photos
      }
    case HOME_CLEAR_PHOTOS:
      return {
        ...state,
        photos: [],
        page: 0
      }
    case HOME_CHANGE_DIMENSION:
      const { col, viewWidth } = action.payload;
      return {
        ...state,
        col: col,
        viewWidth: viewWidth
      }
    case HOME_INITIAL_STATE:
      return initialState;
    default:
      return state
  }
}

export default homeReducer;
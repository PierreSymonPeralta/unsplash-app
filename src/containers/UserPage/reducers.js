import { 
  USER_CHANGE_DIMENSION,
  USER_CLEAR_PHOTOS,
  USER_LOAD_PHOTOS,
  USER_INITIALIZE_STORE
} from './actions';

const initialState = {
  photos: [],
  col: 3,
  page: 0,
  viewWidth: window.innerWidth
}
function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOAD_PHOTOS:
    const { photos, page } = action.payload;
      return {
        ...state,
        photos: photos,
        page: page
      }
    case USER_CLEAR_PHOTOS:
      return {
        ...state,
        photos: [],
        page: 0
      }
    case USER_CHANGE_DIMENSION:
      const { col, viewWidth } = action.payload;
      return {
        ...state,
        col: col,
        viewWidth: viewWidth
      }
    case USER_INITIALIZE_STORE:
      return initialState;
    default:
      return state
  }
}

export default userReducer;
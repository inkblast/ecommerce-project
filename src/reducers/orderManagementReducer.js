import SET_PRODUCT_STATUS from '../utils/types.js'


const initialState = {
    products : []
  };
  
  const orderManagementReducer= (state = initialState, action) => {
    switch (action.type) {
      case FETCH_EXAMS_PAPERS:
        return {
          ...state,
          products: action.data
        };
      default:
        return state;
    }
  };
  
  export default examPaperReducer;
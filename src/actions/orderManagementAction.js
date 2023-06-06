import axios from 'axios';
import {
    SET_PRODUCT_STATUS
  } from '../utils/type';

  export const updateStatus = () => {
    return async (dispatch) => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api2/Delivered/');
        dispatch({
          type: SET_PRODUCT_STATUS,
          data: res.data
        });
      } catch (e) {
        console.error('Something went wrong', e);
      }
    };
  };
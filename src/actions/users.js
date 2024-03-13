import axios from "axios";

const path = 'https://reqres.in';

export const GET_USERS_LIST_LOADING = '@@users/GET_USERS_LIST_LOADING';
export const GET_USERS_LIST_SUCCESS = '@@users/GET_USERS_LIST_SUCCESS';
export const GET_USERS_LIST_FAILURE = '@@users/GET_USERS_LIST_FAILURE';

export const getUsersList = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_USERS_LIST_LOADING
    });

    try {
      const response = await axios.get(`${path}/api/users`);

      dispatch({
        type: GET_USERS_LIST_SUCCESS,
        payload: response?.data?.data
      })

    } catch(error) {
      dispatch({
        type: GET_USERS_LIST_FAILURE,
        payload: error
      })
    }
  }
}

export const GET_USERBYID_LOADING = '@@users/GET_USERBYID_LOADING';
export const GET_USERBYID_SUCCESS = '@@users/GET_USERBYID_SUCCESS';
export const GET_USERBYID_FAILURE = '@@users/GET_USERBYID_FAILURE';

export const getUserById = (id)=>{
  return async function(dispatch){
    dispatch({
      type: GET_USERBYID_LOADING,
    })

    try{
      const response = await axios.get(`${path}/api/users/${id}`)
     
      dispatch({
        type: GET_USERBYID_SUCCESS,
        payload: response?.data?.data,
      })
    } catch(error){
      dispatch({
        type: GET_USERBYID_FAILURE,
        payload: error,
      })
    }
  }
}

export const DELETE_USER_LOADING = '@@users/DELETE_USER_LOADING';
export const DELETE_USER_SUCCESS = '@@users/DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = '@@users/DELETE_USER_FAILURE';

export const deleteUserById = (userId) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_USER_LOADING,
    })

    try{
      const response = await axios.delete(`${path}/api/users/${userId}`);
      console.log(response);

      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: userId,
      })
    } catch(error){
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: error,
      })
    }
  }
}
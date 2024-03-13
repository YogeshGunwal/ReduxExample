import { GET_USERS_LIST_FAILURE, GET_USERS_LIST_LOADING, GET_USERS_LIST_SUCCESS } from "../actions/users";

import { GET_USERBYID_SUCCESS, GET_USERBYID_LOADING, GET_USERBYID_FAILURE } from "../actions/users";

import { DELETE_USER_FAILURE, DELETE_USER_LOADING, DELETE_USER_SUCCESS} from "../actions/users";

import { CREATE_USER_FAILURE, CREATE_USER_LOADING, CREATE_USER_SUCCESS } from "../actions/users";

import { UPDATE_USER_LOADING, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from "../actions/users";

import { UPDATE_USER_DETAIL_LOADING, UPDATE_USER_DETAIL_FAILURE, UPDATE_USER_DETAIL_SUCCESS } from "../actions/users";

const initialState = {
  loading: false,
  userLoading: false,
  deleteUserLoading: false,
  error: '',
  deleteUserError: null,
  list: [],
  userDetails: {},
  submitting: false,
  createUserError: null,
  createdUser: {},
  updateUserLoading: false,
  updateUserError: null,
}

export default function users(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case GET_USERS_LIST_LOADING: {
      return {
        ...state,
        loading: true
      }
    }

    case GET_USERS_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: payload
      }
    }

    case GET_USERS_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
        list: [],
        error: 'some error'
      }
    }

    case GET_USERBYID_LOADING:{
      return{
        ...state,
        userLoading: true,
      }
    }

    case GET_USERBYID_SUCCESS:{
      console.log("User Details: ",payload);
      return{
        ...state,
        userLoading:false,
        userDetails: payload,
      }
    }

    case GET_USERBYID_FAILURE:{
      return{
        ...state,
        userLoading: false,
        error: payload.message,
      }
    }

    case DELETE_USER_LOADING:{
      return{
        ...state,
        deleteUserLoading: true,
      }
    }

    case DELETE_USER_SUCCESS:{
      return{
        ...state,
        deleteUserLoading: false,
        list: state.list.filter(item => item.id !== payload)
      }
    }

    case DELETE_USER_FAILURE:{
      return{
        ...state,
        deleteUserLoading: false,
        deleteUserError: payload.message,
      }
    }

    case CREATE_USER_LOADING:{
      return{
        ...state,
        submitting: true,
      }
    }

    case CREATE_USER_SUCCESS:{
      return{
        ...state,
        submitting: false,
        createdUser: payload,
      }
    }

    case CREATE_USER_FAILURE:{
      return{
        ...state,
        submitting: false,
        createdUser: {},
        createUserError: 'Failed To Create User',
      }
    }

    case UPDATE_USER_LOADING:{
      return{
        ...state,
        updateUserLoading: true,
      }
    }

    case UPDATE_USER_SUCCESS:{
      console.log("Updated User(PUT) Info: ",payload);
      return{
        ...state,
        updateUserLoading: false,
      }
    }

    case UPDATE_USER_FAILURE:{
      return{
        ...state,
        updateUserLoading: false,
        updateUserError: 'Failed to Update User',
      }
    }

    case UPDATE_USER_DETAIL_LOADING:{
      return{
        ...state,
        updateUserLoading: true,
      }
    }

    case UPDATE_USER_DETAIL_SUCCESS:{
      console.log("Updated User(PATCH) Info: ",payload);
      return{
        ...state,
        updateUserLoading: false,
      }
    }

    case UPDATE_USER_DETAIL_FAILURE:{
      return{
        ...state,
        updateUserLoading: false,
        updateUserError: 'Failed to Update User',
      }
    }

    default: return state;
  }
}
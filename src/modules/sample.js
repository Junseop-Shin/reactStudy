import { handleActions } from "redux-actions";
import * as api from "../lib/api";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USER = "sample/GET_USER";
const GET_USER_SUCCESS = "sample/GET_USER_SUCCESS";
const GET_USER_FAILURE = "sample/GET_USER_FAILURE";

// thunk

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const reponse = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: reponse.data,
    });
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
    throw e; // 나중에 컴포넌트 단에서 에러를 조회할 수 있게 해줌
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USER });
  try {
    const reponse = await api.getUsers();
    dispatch({
      type: GET_USER_SUCCESS,
      payload: reponse.data,
    });
  } catch (e) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

const initialState = {
  loading: {
    GET_POST: false,
    GET_USER: false,
  },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true,
      },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
    }),
    [GET_USER]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USER: true,
      },
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
      users: action.payload,
    }),
    [GET_USER_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
    }),
  },
  initialState
);

export default sample;

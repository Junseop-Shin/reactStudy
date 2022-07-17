import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
// import createRequestThunk from "../lib/createRequestThunk";
import { call, put, takeLatest } from "redux-saga/effects";
import { finishLoading, startLoading } from "./loading";
import createRequestSaga from "../lib/createRequestSaga";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USER = "sample/GET_USER";
const GET_USER_SUCCESS = "sample/GET_USER_SUCCESS";
const GET_USER_FAILURE = "sample/GET_USER_FAILURE";

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USER);
export const getPostSaga = createRequestSaga(GET_POST, api.getPost);
export const getUsersSaga = createRequestSaga(GET_USER, api.getUsers);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USER, getUsersSaga);
}
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
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState
);

export default sample;

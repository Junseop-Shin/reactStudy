import { createAction, handleActions } from "redux-actions";
// 액션 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 리듀서 함수
const initialState = 0; // 상태는 꼭 객체일 필요 없음

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;

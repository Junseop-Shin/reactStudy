import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({
//   // 임시 함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) => bindActionCreators({ increase, decrease }, dispatch),
  //{ increase, decrease, }, 두 번째 파라미터를 객체 형태로 넣어주면 connect가 내부적으로 bindActionCreators 작업을 대신 해줌
)(CounterContainer);

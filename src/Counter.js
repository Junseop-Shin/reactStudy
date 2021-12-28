import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
          onClick={() => {
            // this.setState({ number: number + 1});을 두번 반복한다고 +2가 되진 않음
            // setState를 사용해도 state값이 바로 바뀌지 않기 때문에
            // 이럴 때는 함수 인자 전달을 반복해 원하는 변화를 줄 수 있다.
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

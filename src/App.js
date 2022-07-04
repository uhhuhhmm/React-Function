import "./App.css";
import React, { Component, useState } from "react";
// hook사용을 위해 usesState import

// 함수형태는 render x
function App() {
  return (
    <div className="container">
      <h1>Hello No TEST!</h1>
      {/* 프록스 이름은 내가 정함  initNumber */}
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

// 함수형태의 component는 프롭스를 받을때 매개변수를 통해 받는다.
// 사용방식은 동일
// Hook이라는 개념을 통해 함수형태의 component에서도 state를 사용가능하다 (use)
function FuncComp(props) {
  // let numberState = useState(props.initNumber);
  // let number = numberState[0];
  // let setNumber = numberState[1];
  const [number, setNumber] = useState(0);

  // let dateState = useState(new Date().toDateString());
  // let _date = dateState[0];
  // let setDate = dateState[1];
  // console.log(numberState);

  const [_date, setDate] = useState(new Date().toString());

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number:{props.initNumber}</p>
      <p>Number:{number}</p>
      <p>Date:{_date}</p>

      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>

      <input
        type="button"
        value="Increase"
        onClick={function () {
          setNumber(number + 1);
        }}
      ></input>

      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

let classStyle = "color:red";

// life cycle
// 1.constructor -> 2.componentWillMount -> 3.render -> componentDidMount

class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  // componentWillMount() {
  //   console.log("%cclass => componentWillMount", classStyle);
  // }
  // componentDidMount() {
  //   console.log("%cclass => componentDidMount", classStyle);
  // }

  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number (props):{this.props.initNumber}</p>
        <p>Number (state):{this.state.number}</p>
        <p>Date (setState):{this.state.date}</p>

        <input
          type="button"
          value="Random"
          onClick={function () {
            // 클래스내 핸들러문에 .bind(this) 해야 state값을 가져올수있다
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>

        <input
          type="button"
          value="Increase"
          onClick={function () {
            this.setState({ number: this.state.number + 1 });
          }.bind(this)}
        ></input>

        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

//props: 고정 데이터
//state: 변동 데이터
export default App;

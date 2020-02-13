# React Study
* Nomadcoder -'ReactJS로 웹 서비스 만들기'

## JSX & Props

* Component는 HTML을 반환하는 함수이다.
  
* React는 Component를 사용해서 HTML처럼 작성한다.
  
* JSX: javascript와 HTML사이의 조합 
  
* React Application에서는 하나의 컴포넌트만을 렌더링할 수있다. 
  Application안에는 여러개의 컴포넌트를 넣을 수 있으며, 이러한 컴포넌트안에 더 많은 컴포넌트를 import할 수 있다.

* Props를 통해 컴포넌트에서 컴포넌트로, parent컴포넌트에서 children 컴포넌트로 정보를 보냄 

* PropTypes : props로 보낸 데이터 타입 체크 
  <br> 모듈설치 (npm i prop-types)

## State

* state는 Object

* dynamic한 data를 처리할 때 사용하는 것이 State이며 Props에서는 처리 X

* Function Component : 함수이고 리턴값이 있으며 screen에 표시됨
* Class Component: react compont로부터  extend되고 screen에 표시됨

* state는 직접 바꿀 수 없고 setState를 통해 변경해야한다 (setState를 사용하지 않으면 새 State와 함께 render 함수가 호출되지 않음)
* setState를 사용하면 리액트는 새로운 state값과 Rerendering한다
* setState를 사용할 때 state 안에 반드시 default값들을 선언할 필요 X

* Componet LifeCycle (https://reactjs.org/docs/state-and-lifecycle.html)

# react Study
* Nomadcoder -'ReactJS로 웹 서비스 만들기'

## JSX & Props

* Component는 HTML을 반환하는 함수이다.
  
* React는 Component를 사용해서 HTML처럼 작성한다.
  
* JSX: javascript와 HTML사이의 조합 
  
* React Application에서는 하나의 컴포넌트만을 렌더링할 수있다. 
  Application안에는 여러개의 컴포넌트를 넣을 수 있으며, 이러한 컴포넌트안에 더 많은 컴포넌트를 import할 수 있다.

* Props를 통해 parent컴포넌트에서 children 컴포넌트로 정보를 보냄 
* children 컴포넌트에서는 props를 받아오기만하고, 받아온 props를 직접 수정 할 수 없다.

* PropTypes : props로 보낸 데이터 타입 체크 
  <br> 모듈설치 (npm i prop-types)

## State

* state는 Object
* dynamic한 data를 처리할 때 사용하는 것이 State이며 Props에서는 처리 X
* sate는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있다.
* state는 직접 바꿀 수 없고 setState를 통해 변경해야한다 (setState를 사용하지 않으면 새 State와 함께 render 함수가 호출되지 않음)
* setState를 사용하면 리액트는 새로운 state값과 Rerendering한다
* setState를 사용할 때 state 안에 반드시 default값들을 선언할 필요 X

* Function Component : 함수이고 리턴값이 있으며 screen에 표시됨
* Class Component: react compont로부터  extend되고 screen에 표시됨


## Componet LifeCycle (참고사이트: https://velopert.com/3631, https://reactjs.org/docs/state-and-lifecycle.html)

* 컴포넌트 초기생성

  Constructor
  컴포넌트 생성자 함수. 컴포넌트가 새로 만들어 질 때 마다 호출

  ```
  constructor(props) {
  super(props)
  }
  ```

  componentDidMount 

  외부 라이브러리 연동: D3, masonry, etc
  컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등

  ```
  componentDidMount() {
  }
  ```

* 컴포넌트 업데이트

  static getDerivedStateFromProps
  props로 받아온 값을 state로 동기화하는 작업을 해줘야 하는 경우 사용

  ```
  static getDerivedStateFromProps(nextProps, prevState) {
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.
   /*
    if (nextProps.value !== prevState.value) {
      return { value: nextProps.value };
    }
    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
    */
  }
  ```

  shouldComponentUpdate
  컴포넌트를 최적화하는 작업에 유용하게 사용됨
  기본적으로 true를 반환하지만, 조건에 따라 false를 반환하면, 해당 조건에는 render함수를 호출하지 않는다.

  ```
  shouldComponentUpdate(nextProps, nextState) {
    // return false 하면 업데이트를 안함
    // return this.props.checked !== nextProps.checked
    return true;
  }
  ```

  getSnapshotBeforeUpdate

  발생시점
  1. render()
  2. getSnapshotBeforeUpdate()
  3. 실제 DOM에 변화발생
  4. componentDidUpdate

  DOM에 변화가 일어나기 직전의 DOM 상태를 가져오고, 리턴값은 componentDidUpdate에서 3번째 파라미터로 받아올 수 있다.

  ```
  getSnapshotBeforeUpdate(prevProps, prevState) {
      // DOM 업데이트가 일어나기 직전의 시점입니다.
      // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
      // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
      // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데, 
      // 이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
      if (prevState.array !== this.state.array) {
        const {
          scrollTop, scrollHeight
        } = this.list;

        // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있습니다.
        return {
          scrollTop, scrollHeight
        }
      }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (snapshot) {
        const { scrollTop } = this.list;
        if (scrollTop !== snapshot.scrollTop) return; // 기능이 이미 구현되어있다면 처리하지 않습니다.
        const diff = this.list.scrollHeight - snapshot.scrollHeight;
        this.list.scrollTop += diff;
      }
    }
  ```

  componentDidUpdate

  컴포넌트에서 render()를 호출한 다음에 발생. 
  this.props와 this.state가 바뀐 시점으로,파라미터를 통해 이전값(prevState, prevProps)을 조회할 수 있다.
  세번째 파라미터로 getSnapshotBeforeUpdate에서 반환한 snapshot값을 받아온다.

  ```
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  ```

 * 컴포넌트 제거

    componentWillUnmount
  
    등록했던 이벤트 제거, setTimeout을 걸은 것이 있다면 clearTimeout을 통해 제거.
  
    ```
    componentWilUnmount() {
    //이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
    }
  
    ```


import React from 'react'

//컴포넌트 LiftCycle 예제 
class Counter extends React.Component {
  state = {
    number: 0
  }

  constructor(props) {
    super(props)
    console.log('constructor')
  }

  componentWillMount() {
    console.log('componentWillMount (deprecated)')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    if (nextState.number % 5 === 0) return false;
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate')
  }

  componentDidUpdate(prevPros, prevState) {
    console.log('componentDidUpdate')
  }

  handleIncrease = () => {
    const {number} = this.state
    this.setState({
      number: number + 1
    })
  }

  handleDecrease = () => {
    const {number} = this.state
    this.setState({
      number: number - 1
    })
  }

  render() {
    console.log('render')
    return (
      <div>
      <h1>카운터</h1>
      <div>값: {this.state.number}</div>
      <button onClick={this.handleIncrease}>+</button>
      <button onClick={this.handleDecrease}>-</button>
    </div>
    )
  }
}
export default Counter
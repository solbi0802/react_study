import React from 'react'

//class component
class App extends React.Component{
  state = {
    count: 0 
  }
  add = () => {
    // this.setState({count: this.state.count + 1})
    //current : 현재값을 가져옴
    this.setState(current => ({count: current.count + 1}))
  }
  minus = () => {
    // this.setState({count: this.state.count - 1})
    //current : 현재값을 가져옴
    this.setState(current => ({count: current.count - 1}))
  }

  render() {
    return (
    <div>
      <h1>The number is: { this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;

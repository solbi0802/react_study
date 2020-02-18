import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Detail from './routes/Detail'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    // BrowserRouter도 사용가능 (#표시 제거됨)
    //Route - exact : 이것만 렌더링
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;

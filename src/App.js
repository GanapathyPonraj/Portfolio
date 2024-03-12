import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "antd/dist/antd.min.css";
import HomeContainer from './containers/homeContainer/homeContainer';
import SecondPageContainer from './containers/secondPageContainer/secondPageContainer';


class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' exact element={<HomeContainer/>} /> 
              <Route path='/second' exact element={<SecondPageContainer/>} />
            </Routes>
          </BrowserRouter>
      </div>
    )
  }
}

export default App;

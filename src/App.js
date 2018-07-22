import React, { Component } from 'react';
import Header from './components/Header';
import Home from './containers/HomeContainer';
import Kajian from './containers/KajianCodingContainer';
import Mondok from './containers/MondokContainer';
import About from './containers/AboutContainer';
import { Jumbotron, Button } from 'reactstrap';
import './App.css';

class App extends Component {
  state = {
    page: "home"
  }

  ganti = (page)=> {
    this.setState({
      page: page
    })
  }

  render() {
    return (
      <div>
        <Header pindahHalaman={this.ganti}/>
      
        {this.state.page == 'home' && <Home/>}
        {this.state.page == 'kajian' && <Kajian/>}
        {this.state.page == 'mondok' && <Mondok/>}
        {this.state.page == 'about' && <About/>}
      </div>
    );
  }
}

export default App;
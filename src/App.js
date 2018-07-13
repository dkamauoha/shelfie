import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';



class App extends Component {
  constructor () {
    super();
    this.state = {
      inventory: [],
    }
    this.updateInventory = this.updateInventory.bind(this);
  }

  componentDidMount () {
    axios.get('/api/inventory').then(response => {
      // console.log('hello');
      this.setState({
        inventory: response.data,
      })
    })
  }

  updateInventory() {
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }

  render() {
    console.log(this.state.inventory);
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main className='display-area'>
          <div className='dashboard'>
            <Dashboard inventory={this.state.inventory}
              updateInventory={this.updateInventory}/>
          </div>
          <div classname='form'>
            <Form updateInventory={this.updateInventory}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

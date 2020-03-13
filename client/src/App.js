import React from 'react';
import axios from 'axios'
import List from './components/List'

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        this.setState({
          data: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <h1>WOMENS WORLD CUP</h1>
        <List />
      </div>
    )
  }

}
export default App;

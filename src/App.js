import React, { Component } from 'react'
import TEST from './Test/Test';
class App extends Component {
  constructor() {
    super();
    this.state = {
      myVar: 'Hello Arpit!'
    }
  }
  render() {
    return (
      <div><TEST />
        {this.state.myVar}

        {/* Redering and Rerending */}
      </div>
    )
  }
}

export default App;
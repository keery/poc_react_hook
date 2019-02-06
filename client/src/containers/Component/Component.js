import React, { Component } from 'react';

class ComponentTest extends Component {
  
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() { 
    return (
      <div>Component</div>
    )
  }
}

ComponentTest.defaultProps = {};

export default ComponentTest

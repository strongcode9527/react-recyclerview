import React, {Component} from 'react'
import {render} from 'react-dom'

class A extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        hello world
      </div>
    )
  }
}

render(<A />, document.getElementById('root'))
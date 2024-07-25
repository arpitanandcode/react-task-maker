import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {

  return (
    <div>
      <p>Welcome to tasks app!</p>
      <Link to="/tasks">Go to Tasks</Link>
    </div>
  )
}

export default Welcome;

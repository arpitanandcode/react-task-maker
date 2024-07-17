import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div>
      <h1>Welcome to my Tasks</h1>
      <Link to="/tasks">Go to Tasks</Link>
    </div>
  )
}

export default Welcome
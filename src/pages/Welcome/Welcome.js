import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';

function Welcome() {
  const navigate = useNavigate();
  const LogoutHandler = () => {
    localStorage.removeItem("token");
    navigate('/login');
  };

  const [bools, setBools] = useState(false);

  return (
    <div>
      <p>Welcome to tasks app!</p>
      <Link to="/tasks">Go to Tasks</Link>
      <Button myClick={LogoutHandler} title='Logout' />
      <Button myClick={() => setBools(true)} title='change bools' />
      <Comp1 bools={bools} />
      <Comp2 />
    </div>
  )
}

const Comp1 = ({ bools }) => {
  console.log('Comp1 rerender')
  return (
    <h1>Comp1 {bools.toString()}</h1>
  )
};

const Comp2 = React.memo(() => {
  console.log('comp2 rerender');
  return (
    <h1>Dumb component</h1>
  )
});

// Pure component

export default Welcome;

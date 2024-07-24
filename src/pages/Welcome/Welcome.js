import React, { createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import useApi from '../../hooks/useApi';
import useStorage from '../../hooks/useStorage';

const welcomeContext = createContext();

function Welcome() {
  const [data] = useApi('https://jsonplaceholder.typicode.com/todos/1', 'GET');
  const [x] = useStorage("myKey");

  return (
    <div>
      <p>This is coming from server {(data?.data?.title)}</p>
      <p>{x}</p>
      <welcomeContext.Provider value={'Welcome to my app'}>
        <Header title="" />
      </welcomeContext.Provider>
      <Link to="/tasks">Go to Tasks</Link>
    </div>
  )
}

export default Welcome;


const Header = ({ title }) => {

  return (
    <Title title={title} />
  )
};

const Title = ({ title }) => {

  return (
    <div>
      <P></P>
    </div>
  )
};

const P = (props) => {
  const data = useContext(welcomeContext);
  return (
    <h1>{data}</h1>
  )
};
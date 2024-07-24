import React, { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
import useStorage from '../../hooks/useStorage';

function Tasks() {
  // useState 
  const [tasks, setTasks] = useState([
    {
      title: 'Arpit'
    }
  ]);

  const [data, error, loading] = useApi('https://jsonplaceholder.typicode.com/todos/1', 'GET');

  const [data1] = useStorage('myKey', 'Arpitanand');

  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const changeNameHandler = () => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[0].title = "Anand";
      return newTasks;
    });
  };

  return (
    <div>
      {tasks[0]?.title}
      {!loading ? !error ? <p>This is coming from server {(data?.data?.title)}</p> : 'soME ERROR HAPPEND' : 'LOADING...'}

      <button onClick={changeNameHandler}>Change me!</button>
      <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
      <input type="text" value={text2} onChange={(e) => { setText2(e.target.value) }} />
    </div>
  );
}

export default Tasks;

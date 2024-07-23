import React, { useEffect, useState } from 'react'

function Tasks() {

  // useState 
  const [tasks, setTasks] = useState([
    {
      title: 'Arpit'
    }
  ]);

  const [text, setText] = useState("");

  const [text2, setText2] = useState("");

  const changeNameHandler = () => {
    const newTasks = [...tasks];
    newTasks[0].title = "Anand";
    setTasks(newTasks);
  };

  useEffect(() => {
    console.log('I am being called!');
    // API CALL 

  }, []);

  useEffect(() => {
    console.log('I am input called!');
  }, [text]);

  return (
    <div>
      {tasks[0]?.title}

      <button onClick={changeNameHandler}>Change me!</button>
      <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
      <input type="text" value={text2} onChange={(e) => { setText2(e.target.value) }} />
    </div>
  )
}

export default Tasks
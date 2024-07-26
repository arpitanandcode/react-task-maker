import React, { useEffect, useState } from 'react';
import styles from "./Task.module.css";
import Button from "../../components/Button/Button";
import { AddTaskService, DeleteService, GetTaskService } from '../../services/Tasks/Tasks';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';
function Tasks() {

  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newTask, setNewTask] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    GetTaskService().then(response => {
      setIsLoading(false);
      setState(response.data.data);
    });
  }, []);

  const deleteHandler = (id) => {
    DeleteService(id).then(response => {
      const newState = [...state];
      const index = newState.findIndex(item => item._id === id);
      newState.splice(index, 1);
      setState(newState);
    });
  };

  const addHandler = () => {
    AddTaskService(newTask).then(response => {
      const newState = [...state];
      newState.push({ title: newTask, _id: response?.data?.data?._id }); // no view update 
      setState(newState);
    });
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    navigate('/login')
  };

  return (
    <div className={styles.container}>
      <h2>Add Item</h2>
      <Button title='Logout' myClick={logoutHandler} />
      <Input onChange={(e) => setNewTask(e.target.value)} name={'add'} type={'text'} value={newTask} placeholder={'Add a task'} />
      <br />
      <Button title='Add item' myClick={addHandler} />
      <br />
      {
        isLoading ? 'Loading...' : <div>
          {
            state.length > 0 && state.map((item, index) => {
              return (
                <div className={styles.Task} key={index}>
                  <p onClick={() => deleteHandler(item._id)}>{item.title}</p>
                  <div>
                    <Button variant="success" title="Edit" />
                    &nbsp;&nbsp;
                    <Button variant="error" title="Delete" myClick={() => deleteHandler(item._id)} />
                  </div>
                </div>
              )
            })
          }
        </div>
      }
    </div >
  );
}

export default Tasks;

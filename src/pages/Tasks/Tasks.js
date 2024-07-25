import React, { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
import { BASEURL } from '../../consts/BASEURL';
import styles from "./Task.module.css";
import Button from "../../components/Button/Button";
function Tasks() {

  const [url, setUrl] = useState(null);

  const [method, setMethod] = useState(null);

  const [data, _error, isLoading] = useApi(url, method);

  useEffect(() => {
    setUrl(`${BASEURL}/task/get`);
    setMethod('GET');
  }, [])

  const deleteHandler = (id) => {
    setUrl(`${BASEURL}/task/${id}/delete`);
    setMethod('DELETE');
  };

  return (
    <div className={styles.container}>
      {
        isLoading ? 'Loading...' : <div>
          {
            data?.data.length > 0 && data?.data ? data?.data.map((item, index) => {
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
            }) : null
          }
        </div>
      }
    </div >
  );
}

export default Tasks;

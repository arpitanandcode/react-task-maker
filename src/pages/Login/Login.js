import React, { useEffect, useState } from 'react'
import Input from "../../components/Input/Input";
import Button from '../../components/Button/Button';
import styles from "./Login.module.css";
import { LoginService } from '../../services/Auth/Auth';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [loginDetails, setloginDetails] = useState({
    email: '',
    password: '',
  })

  const token = localStorage.getItem("token") || null;

  const changeHanlder = (e) => {
    const { name, value } = e.target;
    setloginDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clickHandler = () => {
    LoginService(loginDetails).then((response) => {
      if (response?.data?.data?.token) {
        localStorage.setItem("token", response?.data?.data?.token);
        navigate('/welcome');
      }
    });
  };


  useEffect(() => {
    if (token) navigate('/welcome');
  }, [token])

  return (
    <div className={styles.Form}>
      <h1>Login</h1>
      <label>Email</label>
      <Input name="email" placeholder={'Enter Email'} type={'text'} value={loginDetails.email} onChange={changeHanlder} />
      <br />
      <label>Password</label>
      <Input name="password" placeholder={'Enter Password'} type={'password'} value={loginDetails.password} onChange={changeHanlder} />
      <br />
      <Button title="Login Me" myClick={clickHandler} />
    </div>
  )
}

export default Login;
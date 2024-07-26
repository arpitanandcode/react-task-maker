import React, { useEffect, useState } from 'react'
import Input from "../../components/Input/Input";
import Button from '../../components/Button/Button';
import styles from "./Register.module.css";
import { RegisterService } from '../../services/Auth/Auth';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  const [registerDetails, setRegisterDetails] = useState({
    email: '',
    password: '',
  })

  const token = localStorage.getItem("token") || null;

  const changeHanlder = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setRegisterDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clickHandler = () => {
    RegisterService(registerDetails).then(response => {
      navigate('/login');
    });
  };

  useEffect(() => {
    if (token) navigate('/welcome');
  }, [token])

  return (
    <div className={styles.Form}>
      <h1>Register</h1>
      <label>Email</label>

      <Input name="email" placeholder={'Enter Email'} type={'text'} value={registerDetails.email} onChange={changeHanlder} />
      <br />
      <label>Password</label>
      <Input name="password" placeholder={'Enter Password'} type={'password'} value={registerDetails.password} onChange={changeHanlder} />
      <br />
      <Button title="Register Me" myClick={clickHandler} />
    </div>
  )
}

export default Register
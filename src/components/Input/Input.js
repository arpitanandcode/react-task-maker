import React from 'react'
import styles from "./Input.module.css";

function Input({ type, placeholder, value, onChange, name }) {
  return (
    <input name={name} placeholder={placeholder} className={styles.Input} type={type} value={value} onChange={onChange} />


  )
}

export default Input
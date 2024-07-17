import React from 'react'
import styles from "./Input.module.css";

function Input({ type, placeholder }) {
  return (
    <input placeholder={placeholder} className={styles.Input} type={type} />


  )
}

export default Input
import React from 'react';
import styles from "./Button.module.css";
import cx from 'classnames';

function Button({ title = "My Submit", myClick, variant = "primary" }) {
  //b
  return (
    <button className={cx(styles.Button, styles.pointer, {
      [styles.ButtonPrimary]: variant === "primary",
      [styles.ButtonSucess]: variant === "success",
      [styles.ButtonError]: variant === "error",
    })} onClick={myClick}>
      {title}
    </button>
  )
}
// clasnames allows you to pass multiple css classes commoa separating.
// primary, error, sucess 
export default Button;
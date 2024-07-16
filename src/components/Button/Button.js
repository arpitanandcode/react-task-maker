function Button({ title = "My Submit", myClick }) {
  return (
    <button onClick={myClick}>
      {title}
    </button>
  )
}

export default Button;
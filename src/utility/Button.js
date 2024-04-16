import './Button.css'

const Button = (props) => {
  return (
    <button id='btn'>{props.children}</button>
  )
}

export default Button

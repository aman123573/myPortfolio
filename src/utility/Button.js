// import './Button.css'

const Button = (props) => {
  return (
    <button
      className='bg-[#6e57e0] text-white border-none rounded-md p-3 text-sm my-2 hover:bg-[#664de3] hover:translate-y-1 transition-all '>
      {props.children}</button>
  )
}

export default Button

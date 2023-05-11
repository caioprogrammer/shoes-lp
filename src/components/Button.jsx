const Button = (props) => {
  return (
    <a className={`${props.buttonClass} button`} href={props.buttonLink}>
      {props.buttonImage &&
        <img src={props.buttonImage} />
      }
      {props.buttonText && 
        <span>{props.buttonText}</span>
      }
    </a>
  )
}

export default Button
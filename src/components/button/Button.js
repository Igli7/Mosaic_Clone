import React from "react"
import { Link } from "gatsby"
import buttonStyles from "./button.module.scss"

const Button = props => {
  return (
    <Link
      style={{ width: props.width }}
      className={buttonStyles.button}
      to={props.to}
    >
      {props.text}
    </Link>
  )
}

export default Button

import * as React from 'react'

export function Form(props) {
  const { children, ...other } = props
  return <form {...other}>{props.children} </form>
}

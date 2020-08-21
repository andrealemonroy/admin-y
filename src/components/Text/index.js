import React from 'react'
import { TextWrapper } from './styles'
const Text = (props) => {
  return <TextWrapper {...props}>{props.children}</TextWrapper>
}

export default Text

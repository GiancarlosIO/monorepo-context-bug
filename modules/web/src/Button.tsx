import React from 'react'

import styled from 'styled-components';

const Div = styled.div`
  color: ${props => props.theme.colors.red};
`

export const Button = props => {
  return <Div>MyButton</Div>
}

export default Button
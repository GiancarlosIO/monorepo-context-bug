import React from 'react';
import { ThemeProvider } from 'styled-components'
const theme = {
  main: "mediumseagreen",
  colors: {
    red: 'red'
  }
};

export const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export * from './Button'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

import { Button, Provider } from '@my-org/web'

const Div = styled.div`
  color: ${props => props.theme.colors.red};
`

const Home = () => {
  return (
    <Provider>
      <div className={styles.container}>
        <Button />
        <Div>custom div</Div>
      </div>
    </Provider>
  )
}

export default Home

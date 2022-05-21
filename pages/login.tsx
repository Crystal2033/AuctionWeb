import type { NextPage } from 'next'
import styled from '@emotion/styled'
import LoginForm from './src/components/LoginForm'
import { useStore } from './src/stores/useStoreContext';
import MainHeader from './src/components/MainHeader';


const Main = styled.main`
  align-items: center; // y
  //justify-content: center; // x
  //flex-direction: column;
  justify-content: center;
  height: 75vh;
  display: flex;
  margin: 0 auto;
`;

const Container = styled.div`   
    & > * {
        
        max-width: 350px;
        width: 100%;
        margin: 10px auto; // середина 
    }
`;


const Login: NextPage = () => {

  return (
    <div>
      <MainHeader />
      <Main>
        <Container>
          <LoginForm />
        </Container>
      </Main >
    </div>
  )
}

export default Login

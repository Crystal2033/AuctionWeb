import type { NextPage } from 'next'
//import Container from '../src/components/Container';
import styled from '@emotion/styled';
import LoginForm from '../src/components/LoginForm';

const Main = styled.main`
  align-items: center; // y
  //justify-content: center; // x
  //flex-direction: column;
  justify-content: center;
  height: 100vh;
  display: flex;
`;

const Container = styled.div`

    // для любого компонета для уровня вложенности 1

    & > * {
        //width: 0px;
        //width: 20%; // Должно же быть так?
        max-width: 350px;
        width: 100%;
        //flex: 1; // размер относительно родителя 
        margin: 10px auto; // середина 
        //display: flex;

        color: darkslategray;
    }
`;

const Home: NextPage = () => {
  return (
    <Main>
      <Container>
        <h1>Регистрация</h1>
        <LoginForm/>
      </Container>
    </Main>
  )
}

export default Home

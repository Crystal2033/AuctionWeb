import type { NextPage } from 'next'
import styled from '@emotion/styled'
import ProductForm from './src/components/ProductForm'
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

const PageHeader = styled.h1`
    color: white;
`

const Login: NextPage = () => {

  return (
    <div>
      <MainHeader />
      <Main>
        <Container>
            <PageHeader>Добавление товара</PageHeader>
            <ProductForm />
          </Container>
      </Main>

    </div>
  )
}

export default Login

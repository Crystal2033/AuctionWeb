import type { NextPage } from 'next'
import Container from '../src/components/Container';
import LoginForm from '../src/components/LoginForm';


const Home: NextPage = () => {
  return (
    <Container>
        <h1>Регистрация</h1>
        <LoginForm/>
    </Container>
  )
}

export default Home

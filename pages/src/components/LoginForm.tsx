import styled from '@emotion/styled';
import React, { useState } from 'react'
import { login, signup } from '../api/authApi';
import { getUserById } from '../api/mainApi';
import InputLine from './InputLine'


type LoginInfo = {
    email?: string;
    password?: string;
}

const RegButton = styled.button`
    font-family: sans-serif;
    color: white;
    font-size: 15px;
    display:block;
    //width: 397px;

    padding: .8em 2em calc(.8em + 3px);
    margin-top: .5em;
    border-radius: 10px;
    background: #056ee4;
    transition: 0.2s;
    :hover { background: #034692; }
    :disabled {
        background-color: #282727;
        color: #fcfcfc;
    }
`

const StyledInputEmail = styled(InputLine)`
    border-radius: 10px 10px 0 0;
`

const StyledInputPass = styled(InputLine)`
    border-radius: 0 0 10px 10px;
  
`
const StyledForm = styled.div`
    display:flex;
    flex-direction:column;
    padding: 30px;
`

const LoginForm = () => {

    const [loginData, setLoginData] = useState<LoginInfo>()


    const clickAutho = () => {

        if (loginData?.email && loginData?.password) {
            console.log("Authorization");
            login(loginData.email, loginData.password).then((response) => {
                console.log(response.data);
            }).catch(console.error);
        }

    }
    const clickRegister = () => {

        if (loginData?.email && loginData?.password) {
            console.log("Registration");
            signup(loginData.email, loginData.password).then((response) => {
                getUserById(response.data.id);
            }).catch(console.error);
        }
    }

    return (
        <StyledForm>
            <StyledInputEmail placeholder="Почта" onChange={(value) => {
                setLoginData({ email: value, password: loginData ? loginData.password : "" })
            }} />

            <StyledInputPass placeholder="Пароль" dataType="password" onChange={(value) => {
                setLoginData({ email: loginData ? loginData.email : "", password: value })
            }} />
            {/* <PassShowButton></PassShowButton> */}
            {(!loginData?.email || !loginData?.password) ? <RegButton onClick={clickAutho} disabled>Войти</RegButton> : <RegButton onClick={clickAutho}>Войти</RegButton>}
            {(!loginData?.email || !loginData?.password) ? <RegButton onClick={clickRegister} disabled>Зарегистрироваться</RegButton> : <RegButton onClick={clickRegister}>Зарегистрироваться</RegButton>}

        </StyledForm>
    )
}


export default LoginForm
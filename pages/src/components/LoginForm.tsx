import styled from '@emotion/styled';
import React, { useState } from 'react'
import { login, signup } from '../api/authApi';
import { getAccount } from '../api/mainApi';
import { saveSession } from '../utils/authKeyStorageService';
import InputLine from './InputLine'
import { observer } from 'mobx-react-lite'
import { useStore } from '../stores/useStoreContext';
import { action } from 'mobx';
import Router, { useRouter } from 'next/router'

type LoginInfo = {
    email?: string;
    password?: string;
}

const RegButton = styled.button`
    font-family: sans-serif;
    color: white;
    font-size: 15px;
    display:block;

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
    font-size: 14px;
    background-color: #1a232f;
    border: 2px solid #303945;
    border-radius: 10px;
    max-width: 350px;
    margin: 10px auto; // середина 
`

type Props = {
    path?: string;
}

const LoginForm = ({ path }: Props) => {

    const [loginData, setLoginData] = useState<LoginInfo>();
    const { userStore } = useStore();
    const router = useRouter();
    const clickAutho = () => {

        if (loginData?.email && loginData?.password) {
            console.log("Authorization");
            userStore.login(loginData.email, loginData.password);
            if (typeof userStore.user !== null) {
                path ?
                    router.push(path)
                    : router.back();
            }
        }
    }


    const clickRegister = () => {

        if (loginData?.email && loginData?.password) {
            console.log("Registration");
            userStore.signup(loginData.email, loginData.password);

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
            {(!loginData?.email || !loginData?.password) ? <RegButton onClick={clickAutho} disabled>Войти</RegButton> : <RegButton onClick={clickAutho}>Войти</RegButton>}
            {(!loginData?.email || !loginData?.password) ? <RegButton onClick={clickRegister} disabled>Зарегистрироваться</RegButton> : <RegButton onClick={clickRegister}>Зарегистрироваться</RegButton>}

        </StyledForm>
    )
}


export default LoginForm
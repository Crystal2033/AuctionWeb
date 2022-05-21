import styled from '@emotion/styled';
import React, { useState } from 'react'
import { login, signup } from '../api/authApi';
import { getAccount } from '../api/mainApi';
import { saveSession } from '../utils/authKeyStorageService';
import InputLine from './InputLine'
import { observer } from 'mobx-react-lite'
import { useStore } from '../stores/useStoreContext';
import { action } from 'mobx';
import { useRouter } from 'next/router'
import { addProduct } from '../api/productsApi';

type ProductInfo = {
    name?: string;
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
`

const LoginForm = () => {

    const [productData, setProductData] = useState<ProductInfo>();

    const clickAutho = () => {

        if (productData?.name) {
            console.log("Add product");
            addProduct(productData.name);
        }
    }

    return (
        <StyledForm>
            <StyledInputEmail placeholder="Название товара" onChange={(value) => {
                setProductData({ name: value });
            }} />
            
            {(productData?.name) ? <RegButton onClick={clickAutho}>Добавить</RegButton> : ""}
    
        </StyledForm>
    )
}


export default LoginForm
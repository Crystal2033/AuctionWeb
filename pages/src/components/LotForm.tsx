import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'
import { login, signup } from '../api/authApi';
import { getAccount } from '../api/mainApi';
import { saveSession } from '../utils/authKeyStorageService';
import InputLine from './InputLine'
import { observer } from 'mobx-react-lite'
import { useStore } from '../stores/useStoreContext';
import { action, observe } from 'mobx';
import { useRouter } from 'next/router'
import { addProduct } from '../api/productsApi';
import { Button, FormControl, Input, InputAdornment, InputLabel, Link, Paper, TextField } from '@mui/material';
import router from 'next/router';
import { LotInfo } from '../../lots/add';
import { useForm } from 'react-hook-form';

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

const HeaderSection = styled.div`
    display: flex;
    align-items:center;
    flex-wrap:wrap;
    color:white;
    font-size: 20px;
`

const PageHeader = styled.h1`
    color: white;
`

type Props = {
    setData: (name: string, price: number) => void;
}

const Form = styled.form`
display:flex;
flex-direction: column;
justify-content:center;
//align-items:center;
`

type InputData = {
    inputName?: string,
    inputStartPrice?: number
}

const MyButton = styled(Button)`
    margin-top: 5px;
`

const Container = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
background-color: #367c57;
`

const MyInput = styled(Input)`
    margin: 5px;
`

const LotForm = ({ setData }: Props) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const { userStore } = useStore();
    const { user, isLoading } = userStore;
    useEffect(() => {

    }, [])


    const getDataFunc = (data: InputData) => {
        debugger;
        if (typeof data !== 'undefined') {
            if (typeof data.inputName !== 'undefined' && typeof data.inputStartPrice !== 'undefined') {
                setData(data.inputName, data.inputStartPrice);
            }
        }

    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(getDataFunc)}>
                <MyInput
                    id="standard-adornment-weight"
                    endAdornment={<InputAdornment position="end">Название</InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    {...register("inputName", { required: true })}
                    inputProps={{
                        'aria-label': 'Название',
                    }}
                />

                <MyInput
                    id="standard-adornment-weight"

                    endAdornment={<InputAdornment position="end">Цена</InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    {...register("inputStartPrice", { required: true })}
                    inputProps={{
                        'aria-label': 'Цена',
                    }}
                />


                <MyButton type="submit" variant="contained" color="success">
                    Добавить лот
                </MyButton>

            </Form>

        </Container>


        // user ?
        //     <StyledForm>
        //         <StyledInputEmail placeholder="Название товара" onChange={(value) => {
        //             setProductData({ name: value });
        //         }} />
        //         {(productData?.name) ? <RegButton onClick={clickAutho}>Добавить</RegButton> : ""}
        //     </StyledForm>
        //     :
        //     <HeaderSection>
        //         Пользователь не авторизирован
        //     </HeaderSection>

    )
}

export default observer(LotForm)
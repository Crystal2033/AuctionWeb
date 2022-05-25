import styled from '@emotion/styled';
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { string } from 'mobx-state-tree/dist/internal';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { addMoney } from '../api/accountApi';
import { addBet } from '../api/betApi';
import { useStore } from '../stores/useStoreContext';


const Form = styled.form`
display:flex;
flex-direction: column;
justify-content:center;
//align-items:center;
`

type MoneyValue = {
    money?: number;
}

const MyButton = styled(Button)`
    margin-top: 5px;
`

type Props = {
    message?: string;
    lotId? : string;
}

export const MoneyField = ({ message, lotId }: Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { userStore } = useStore();
    const { user, isLoading } = userStore;
    useEffect(() => {

    }, [user, userStore])

    const getDataFunc = (data: MoneyValue) => {

        if (message && message == "Пополнить")
        {
            data.money ?
                addMoney(data.money).then(() => {


                }).catch((e) => {
                    console.log(e);

                }) : null;
            console.log(data.money);
        }

        else if (message && message == "Сделать ставку" && lotId)
        {
            debugger;
            data.money ?
                addBet(data.money, lotId).then(() => {


                }).catch((e) => {
                    console.log(e);

                }) : null;
            console.log(data.money);
        }
    };


    return (
        <FormControl fullWidth sx={{ m: 1 }}>
            <Form onSubmit={handleSubmit(getDataFunc)}>
                <InputLabel htmlFor="outlined-adornment-amount"> amount</InputLabel>
                <OutlinedInput inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    id="outlined-adornment-amount"
                    {...register("money", { required: true })}
                    startAdornment={<InputAdornment position="start">₽</InputAdornment>}
                    label="amount"
                    error={errors.money}

                />

                <MyButton type="submit" variant="contained" color="success">
                    {message}
                </MyButton>
            </Form>
        </FormControl>
    )
}

export default observer(MoneyField);

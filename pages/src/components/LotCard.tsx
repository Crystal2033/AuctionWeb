import styled from '@emotion/styled'

import React, { useState } from 'react'
import { Lot } from '../types/types'
import { Box, Button, Card, CardContent, Modal, Typography } from "@mui/material";
import MoneyField from './MoneyField';

type Props = {
    data: Lot
}

const MyCard = styled(Card)`
    background-color: #344a71;
    margin:10px;
    width: 100vw;
`

const ContainerModal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
`

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#266b83',
    border: '2px solid #229b47',
    boxShadow: '0 0 10px #360ec8',
    borderRadius: '5px',
    p: 4,
    "& label.Mui-focused": {
        color: "#89cdd1"

    },
};

const SetMoneyBtn = styled(Button)`
    color: #000104;
    border-color: #1d2dc1;
    box-shadow: 0 0 10px #1d2dc1;
    margin-top: 10px;
`

export const LotCard = ({ data }: Props) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <MyCard sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <div>
                        <h2>Содержание:</h2>
                        {data.lotProducts.map((product) => (
                            // eslint-disable-next-line react/jsx-key
                            <div> {product.name}</div>
                        ))}
                        <h3>Шаг ставки</h3>
                        <div>{data.bidStep}</div>
                        <h3>Начальная цена</h3>
                        <div>{data.startPrice}</div>
                    </div>
                </Typography>

                <SetMoneyBtn onClick={handleOpen} variant="outlined" color="success">Сделать ставку</SetMoneyBtn>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" align="center" paddingBottom='10px'>
                            Введите сумму
                        </Typography>
                        <ContainerModal>
                            <MoneyField message="Сделать ставку" lotId={data.id}/>
                        </ContainerModal>
                    </Box>
                </Modal>
              
            </CardContent>
        </MyCard>

    )
}

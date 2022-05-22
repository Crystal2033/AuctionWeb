import styled from "@emotion/styled";
import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MoneyField from "./MoneyField";

const Container = styled.div`
  margin-top: 15px;
  //background-color:white;
`
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#38958a',
    border: '2px solid #298b47',
    boxShadow: '0 0 10px #17c593',
    borderRadius: '5px',
    p: 4,
};


const SetMoneyBtn = styled(Button)`
    color: #5ec580;
    border-color: #9fe19f;
    box-shadow: 0 0 10px #88d965;
`

const ContainerModal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
`


const MoneyModal = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {

        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <Container >
            <SetMoneyBtn onClick={handleOpen} variant="outlined" color="success">Пополнить счет</SetMoneyBtn>
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
                        <MoneyField />
                    </ContainerModal>
                </Box>
            </Modal>
        </Container >
    );
}

export default MoneyModal
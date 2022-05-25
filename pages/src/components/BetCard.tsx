import styled from '@emotion/styled'
import { Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material'
import React from 'react'
import { FaDatabase, FaMoneyBillAlt } from 'react-icons/fa'
import { Bet } from '../types/types'

type Props = {
    data: Bet
}

const Container = styled.div`

`
const MyCard = styled(Card)`
    background-color: #2b632f;
    margin:10px;
    width: 100vw;
    background: linear-gradient(to bottom right, #2ddd5c, #1e5c5c);
    
`

const MoneyContainer = styled.div`
color: black;
    align-items:center;
    display: flex;
    flex-wrap:wrap;
    margin-bottom: 15px;
    justify-content:center;
`

const MoneyIcon = styled(FaMoneyBillAlt)`
    width: 50px;
    height:50px;
    padding-right: 20px;
    color:#117355;
`

const DataBaseIcon = styled(FaDatabase)`
    /* opacity: 0.5; */
    margin-right: 10px;
    color:black;
`
const DataBaseContainer = styled.div`
    opacity: 0.5;
    color:black;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content:center;
`

export const BetCard = ({ data }: Props) => {
    return (
        <Container>

            <MyCard sx={{ maxWidth: 345 }}>
                {/* <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
            /> */}
                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        <MoneyContainer>
                            <MoneyIcon />
                            {data.betSize}
                        </MoneyContainer>
                    </Typography>
                    <Typography fontSize={14} component="div">
                        <DataBaseContainer>
                            <DataBaseIcon />
                            {data.id}
                        </DataBaseContainer>
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button onClick={getInfo} size="small">Поместить в лот</Button>
                </CardActions> */}
            </MyCard>
        </Container>
    )
}
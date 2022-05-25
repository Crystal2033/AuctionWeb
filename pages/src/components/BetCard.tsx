import styled from '@emotion/styled'
import { Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material'
import React from 'react'
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
                        {data.betSize}
                    </Typography>
                    <Typography fontSize={14} component="div">
                        {data.id}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button onClick={getInfo} size="small">Поместить в лот</Button>
                </CardActions> */}
            </MyCard>
        </Container>
    )
}
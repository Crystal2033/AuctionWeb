import styled from '@emotion/styled'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Lot } from '../types/types'

type Props = {
    lot: Lot
}

const MyCard = styled(Card)`
    background-color: #344a71;
    margin:10px;
    width: 100vw;

    
`

export const LotCard = ({ lot }: Props) => {
    return (

        <MyCard sx={{ maxWidth: 345 }}>
            {/* <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
            /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {lot.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <div>
                        <h2>Содержание:</h2>
                        {lot.lotProducts.map((product) => (
                            // eslint-disable-next-line react/jsx-key
                            <div> {product.name}</div>
                        ))}
                        <h3>Шаг ставки</h3>
                        <div>{lot.bidStep}</div>
                        <h3>Начальная цена</h3>
                        <div>{lot.startPrice}</div>
                    </div>
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Поместить в лот</Button>
            </CardActions>
        </MyCard>

    )
}
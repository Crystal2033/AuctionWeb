import styled from '@emotion/styled'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Lot } from '../types/types'

type Props = {
    lot: Lot
}

const MyCard = styled(Card)`
    background-color: #344a71;
    margin:10px;
    
`

export const LotCard = ({ lot }: Props) => {
    return (
        // <div>
        //     <div>{data.id}</div>
        //     <div>{data.name}</div>
        //     <div>{data.startPrice}</div>
        //     <div>{data.bidStep}</div>
        // </div>
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
                        <div>{lot.bidStep}</div>
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

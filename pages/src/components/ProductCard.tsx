import React from 'react'
import { Product } from '../types/types'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import styled from '@emotion/styled'
type Props = {
    data: Product
}

const Container = styled.div``


const MyCard = styled(Card)`
    background-color: #344a71;
    margin:10px;
    
`


export const ProductCard = ({ data }: Props) => {
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
                        {data.name}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                        </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small">Поместить в лот</Button>
                </CardActions>
            </MyCard>
        </Container>
    )
}
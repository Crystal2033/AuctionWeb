import React from 'react'
import { Product } from '../types/types'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite'

type Props = {
    data: Product
}

const Container = styled.div`

`


const MyCard = styled(Card)`
    background-color: #344a71;
    margin:10px;
`


const ProductCard = ({ data }: Props) => {
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
                </CardContent>
                <CardActions>
                    <Button size="small">Поместить в лот</Button>
                </CardActions>
            </MyCard>
        </Container>
    )
}

export default ProductCard
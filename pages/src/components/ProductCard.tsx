import React from 'react'
import { Product } from '../types/types'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite'

type Props = {
    data: Product,
    getId?: (id: string) => void;
}

const Container = styled.div`

`



const MyCard = styled(Card)`
    background-color: #344a71;
    margin:10px;
`


const ProductCard = ({ data, getId }: Props) => {

    const getInfo = () => {
        // console.log(data.name);
        // console.log(data.id);
        getId ? getId(data.id) : "";
    }


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
                    <Button onClick={getInfo} size="small">Поместить в лот</Button>
                </CardActions>
            </MyCard>
        </Container>
    )
}

export default ProductCard
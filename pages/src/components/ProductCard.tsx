import React from 'react'
import { Product } from '../types/types'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite'
import { FaDatabase } from 'react-icons/fa'

type Props = {
    data: Product,
    getId?: (id: string) => void;
}

const Container = styled.div`

`

const MyButton = styled(Button)`
color:#6a598f;
:hover{
    
}
`

const MyCard = styled(Card)`
    background: linear-gradient(to bottom right, #9b78bb, #a2b429);
    margin:10px;
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
                    <Typography fontSize={14} component="div">
                        <DataBaseContainer>
                            <DataBaseIcon />
                            {data.id}
                        </DataBaseContainer>
                    </Typography>
                </CardContent>
                <CardActions>
                    <MyButton onClick={getInfo} size="small">Поместить в лот</MyButton>
                </CardActions>
            </MyCard>
        </Container>
    )
}

export default ProductCard
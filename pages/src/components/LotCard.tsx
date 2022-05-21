import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Lot } from '../types/types'

type Props = {
    data: Lot
}


export const LotCard = ({ data }: Props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <div>
                            <div>{data.id}</div>
                            <div>{data.bidStep}</div>
                            <div>{data.startPrice}</div>
                            {/* <div>data.lotProducts</div> */}
                        </div>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Open
                </Button>
            </CardActions>
        </Card>
    )
}

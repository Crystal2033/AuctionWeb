import { Paper } from '@mui/material'
import React from 'react'
import { Bet } from '../types/types'

type Props = {
    data: Bet
}



export const BetCard = ({ data }: Props) => {
    return (
        <Paper>
            <div>{data.id}</div>
            <div>{data.betSize}</div>
        </Paper>
    )
}
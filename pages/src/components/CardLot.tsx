import React from 'react'
import { Lot } from '../types/types'

type Props = {
    data: Lot
}



export const CardLot = ({ data }: Props) => {
    return (
        <div>
            <div>{data.id}</div>
            <div>{data.name}</div>
            <div>{data.startPrice}</div>
            <div>{data.bidStep}</div>
        </div>
    )
}

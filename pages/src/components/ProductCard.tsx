import React from 'react'
import { Product } from '../types/types'

type Props = {
    data: Product
}



export const ProductCard = ({ data }: Props) => {
    return (
        <div>
            <div>{data.id}</div>
            <div>{data.name}</div>
        </div>
    )
}
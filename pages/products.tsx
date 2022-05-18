import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useLayoutEffect, useState } from 'react';
import { getUserProducts } from './src/api/productsApi';
import { ProductCard } from './src/components/ProductCard';
import { Product } from './src/types/types';

const Container = styled.div``

const Products: NextPage = () => {
    const [products, setProducts] = useState<ReadonlyArray<Product>>([]);
    useLayoutEffect(() => {
        getUserProducts().then((data) => {
            setProducts(data);
        })
    }, []);

    return (
        <Container>
            {products.map((product) => (
                <ProductCard key={product.id} data={product} />
            ))}
        </Container >
    );
};

export default Products;
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useLayoutEffect, useState } from 'react';
import { getUserBets } from './src/api/betApi';
import { BetCard } from './src/components/BetCard';
import MainHeader from './src/components/MainHeader';
import { Bet } from './src/types/types';

const Container = styled.div``

const Products: NextPage = () => {
    const [bets, setBets] = useState<ReadonlyArray<Bet>>([]);
    useLayoutEffect(() => {
        getUserBets().then((data) => {
            setBets(data.data);
        })
    }, []);

    return (
        <Container>
            <MainHeader />
                {bets.map((bet) => (
                    <BetCard key={bet.id} data={bet} />
                ))};
        </Container >
    );
};

export default Products;
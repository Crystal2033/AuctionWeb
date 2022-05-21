import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite';
import type { NextPage } from 'next'
import { useEffect, useLayoutEffect, useState } from 'react';
import { getUserBets } from './src/api/betApi';
import { BetCard } from './src/components/BetCard';
import MainHeader from './src/components/MainHeader';
import { useStore } from './src/stores/useStoreContext';
import { Bet } from './src/types/types';

const Container = styled.div``

const Bets: NextPage = () => {
    const [bets, setBets] = useState<ReadonlyArray<Bet>>([]);
    useLayoutEffect(() => {
        getUserBets().then((data) => {
            setBets(data.data);
        })
    }, []);

    const { userStore } = useStore();
    const { user } = userStore;

    useEffect(() => {
        setBets([]);
    }, [user])

    return (
        <Container>
            <MainHeader />
                {bets.map((bet) => (
                    <BetCard key={bet.id} data={bet} />
                ))};
        </Container >
    );
};

export default observer(Bets);
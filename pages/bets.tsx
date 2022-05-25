import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite';
import type { NextPage } from 'next'

import { useEffect, useLayoutEffect, useState } from 'react';
import { getUserBets } from './src/api/betApi';
import { BetCard } from './src/components/BetCard';
import MainHeader from './src/components/MainHeader';
import { useStore } from './src/stores/useStoreContext';
import { Bet } from './src/types/types';

const Container = styled.div`
height: 100%;
`

const Main = styled.main`
  align-items: center; // y
  //justify-content: center; // x
  //flex-direction: column;
  justify-content: center;
  height: 75vh;
  display: flex;
  margin: 0 auto;
`;


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
            <Main>
                {bets.map((bet) => (
                    <BetCard key={bet.id} data={bet} />
                ))}
            </Main>
        </Container >
    )
};

export default observer(Bets);
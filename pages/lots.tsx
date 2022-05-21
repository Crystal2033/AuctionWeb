import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite';
import type { NextPage } from 'next'
import { useEffect, useLayoutEffect, useState } from 'react';
import { getUserLots } from './src/api/lotsApi';
import { LotCard } from './src/components/LotCard';
import MainHeader from './src/components/MainHeader';
import { useStore } from './src/stores/useStoreContext';
import { Lot } from './src/types/types';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    
`

const PageHeader = styled.h1`
    color: white;
`

const Lots: NextPage = () => {
    const [lots, setLots] = useState<ReadonlyArray<Lot>>([]);
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useLayoutEffect(() => {
            getUserLots().then((data) => {
                setLots(data.data);
            })
        }, []);
    }

    const { userStore } = useStore();
    const { user } = userStore;

    useEffect(() => {
        setLots([]);
    }, [user])

    return (
        <div>
            <MainHeader />

            <Container>
                <PageHeader >Мои лоты</PageHeader>
                {lots.map((lot) => (
                    <LotCard key={lot.name} lot={lot} />
                ))}
            </Container >
        </div>
    );
};

export default observer(Lots);
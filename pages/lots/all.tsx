import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useLayoutEffect, useState } from 'react';
import { getAllLots } from '../src/api/lotsApi';
import { LotCard } from '../src/components/LotCard';
import MainHeader from '../src/components/MainHeader';
import { Lot } from '../src/types/types';

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
            getAllLots().then((data) => {
                setLots(data.data);
            })
        }, []);
    }

    return (
        <div>
            <MainHeader />

            <Container>
                <PageHeader >Все лоты</PageHeader>
                {lots.map((lot) => (
                    <LotCard key={lot.name} data={lot} />
                ))}
            </Container >
        </div>
    );
};

export default Lots;
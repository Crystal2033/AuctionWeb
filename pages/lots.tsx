import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useLayoutEffect, useState } from 'react';
import { getUserLots } from './src/api/lotsApi';
import { LotCard } from './src/components/LotCard';
import { Lot } from './src/types/types';

const Container = styled.div``

// const mockGetLots = () => new Promise<ReadonlyArray<Lot>>((resolve, reject) => {
//     resolve([{ id: "asdadaskdalsd1231", name: "Сапог левый", startPrice: 100, bidStep: 200 },
//     { id: "hmlkfgdhlk231", name: "Сапог средний", startPrice: 200, bidStep: 400 },
//     { id: "123123dsqasd1", name: "Сапог правый", startPrice: 300, bidStep: 500 }]);
// })

const Lots: NextPage = () => {
    const [lots, setLots] = useState<ReadonlyArray<Lot>>([]);
    useLayoutEffect(() => {
        getUserLots().then((data) => {
            setLots(data);
        })
    }, []);

    return (
        <Container>
            {lots.map((lot) => (
                <LotCard key={lot.name} data={lot} />
            ))}
        </Container >
    );
};

export default Lots;
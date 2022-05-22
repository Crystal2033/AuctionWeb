import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite';
import type { NextPage } from 'next'
import { useLayoutEffect, useState } from 'react';
import { getAllLots, getSearchLots} from '../src/api/lotsApi';
import InputLine from '../src/components/InputLine';
import { LotCard } from '../src/components/LotCard';
import MainHeader from '../src/components/MainHeader';
import { Lot } from '../src/types/types';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    
`

const StyledForm = styled.div`
    display:flex;
    flex-direction:column;
    padding: 30px;
    font-size: 14px;
    background-color: #1a232f;
    border: 2px solid #303945;
    border-radius: 10px;
`

const RegButton = styled.button`
    font-family: sans-serif;
    color: white;
    font-size: 15px;
    display:block;

    padding: .8em 2em calc(.8em + 3px);
    margin-top: .5em;
    border-radius: 10px;
    background: #056ee4;
    transition: 0.2s;
    :hover { background: #034692; }
    :disabled {
        background-color: #282727;
        color: #fcfcfc;
    }
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

const StyledInputEmail = styled(InputLine)`
    border-radius: 10px 10px 0 0;
`

type LotInfo = {
    name?: string;
}

const PageHeader = styled.h1`
    color: white;
`

const LotsSearcher: NextPage = () => {
    const [lot, setLotInfo] = useState<LotInfo>();
    const [lots, setLots] = useState<ReadonlyArray<Lot>>([]);


    const clickSearch = () => {
        if (lot && lot.name)
        {
            getSearchLots(lot.name).then((data) => {
                setLots(data.data);
            })
        }
    }

    return (
        <div>
            <MainHeader />
                <Main>
                    <Container>
                    <PageHeader >Поиск лотов</PageHeader>
                        <StyledForm>
                            <StyledInputEmail placeholder="Название лота" onChange={(value) => {
                                setLotInfo({ name: value });
                            }} />

                            {(lot?.name) ? <RegButton onClick={clickSearch}>Найти</RegButton> : ""}
                        </StyledForm>
                        
                        {lots.map((lot) => (
                            <LotCard key={lot.name} lot={lot} />
                        ))}
                    </Container>
                </Main>
        </div>
    );
};

export default observer(LotsSearcher);
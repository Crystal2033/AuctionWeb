import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useEffect } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import MainHeader from './src/components/MainHeader';
import { useStore } from './src/stores/useStoreContext';
import { IoAccessibilitySharp } from "react-icons/io5";
import { FaMoneyBillAlt, FaDatabase } from "react-icons/fa";
import { json } from 'stream/consumers';
import { observer } from 'mobx-react-lite';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    flex-wrap:wrap;
    
`

const UserInfoContainer = styled.div`
    padding-top: 20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    flex-wrap:wrap;
`

const AccountIcon = styled(MdAccountCircle)`
    width: 150px;
    height:150px;
    color:white;
`


const MoneyIcon = styled(FaMoneyBillAlt)`
    width: 50px;
    height:50px;
    padding-right: 20px;
    color:#117355;
`

const DataBaseIcon = styled(FaDatabase)`
    opacity: 0.5;
    margin-right: 10px;
    color:white;
`
const DataBaseContainer = styled.div`
    display:flex;
    align-items:center;
    flex-wrap:wrap;
`



const MoneyContainer = styled.div`
    color:white;
    align-items:center;
    display: flex;
    flex-wrap:wrap;
    margin-bottom: 15px;
`

const MoneyField = styled.div`
    color:white;
    font-size: 27px;
`

const IdField = styled.div`
    color:white;
    opacity: 0.5;
    align-items:center;

`

const NameContainer = styled.div`
    color:white;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap:wrap;
    margin-bottom: 15px;
    
`
const NameField = styled.div`
    color: white;
    font-size: 50px;
`

const StatHeaderField = styled.div`
    color: white;
    font-size: 40px;
`
const StatsContainer = styled.div`
    color:white;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap:wrap;
    margin-top: 15px;
    
`

const Account: NextPage = () => {
    const { userStore } = useStore();
    const { user } = userStore;

    useEffect(() => {

    }, [user])

    return (
        <div>
            <MainHeader />
            <Container>
                <UserInfoContainer>

                    <NameContainer>
                        <AccountIcon />
                        <NameField>
                            {user?.nickname}
                        </NameField>
                    </NameContainer>

                    <MoneyContainer>
                        <MoneyIcon />
                        <MoneyField>
                            {user?.money}
                        </MoneyField>
                    </MoneyContainer>

                    <DataBaseContainer>
                        <DataBaseIcon />
                        <IdField>
                            ID: {user?.id}
                        </IdField>
                    </DataBaseContainer>
                </UserInfoContainer>
                <StatsContainer>
                    <StatHeaderField>Stats: ...</StatHeaderField>
                </StatsContainer>

            </Container>

        </div>
    );
};

export default observer(Account);
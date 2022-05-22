import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useEffect } from 'react';
import MainHeader from './src/components/MainHeader';
import { useStore } from './src/stores/useStoreContext';
import { FaMoneyBillAlt, FaDatabase, FaUserSlash, FaUser } from "react-icons/fa";
import { observer } from 'mobx-react-lite';
import LoginForm from './src/components/LoginForm';
import MoneyModal from './src/components/MoneyModal';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    flex-wrap:wrap;
    
`

/////////////////////////////Account//////////////////////////

const UserInfoContainer = styled.div`
    //padding-top:20vh;
    padding-top: 100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    flex-wrap:wrap;
`

const AccountIcon = styled(FaUser)`
    width: 150px;
    height:150px;
    color:white;
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


/////////////////////////////Money//////////////////////////
const MoneyContainer = styled.div`
    color:white;
    align-items:center;
    display: flex;
    flex-wrap:wrap;
    margin-bottom: 15px;
`

const MoneyIcon = styled(FaMoneyBillAlt)`
    width: 50px;
    height:50px;
    padding-right: 20px;
    color:#117355;
`

const MoneyField = styled.div`
    color:white;
    font-size: 27px;
`


/////////////////////////////ID//////////////////////////

const IdField = styled.div`
    color:white;
    opacity: 0.5;
    align-items:center;

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


/////////////////////////////Stats//////////////////////////

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

const LoginFormContainer = styled.div`
    //min-width:350px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    height: 75vh;
    
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
                {user ?
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
                        <MoneyModal />
                    </UserInfoContainer>


                    : <LoginFormContainer>
                        <LoginForm path="/me" />
                    </LoginFormContainer>}

            </Container>

        </div>
    );
};

export default observer(Account);
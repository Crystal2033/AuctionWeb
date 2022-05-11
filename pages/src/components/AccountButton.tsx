import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import React from 'react'
import { useStore } from '../stores/useStoreContext';

const UserField = styled.span`
    color: white;
    font-family: sans-serif;
    font-size:14px;
`



const AccountButton = () => {
    const { userStore } = useStore();
    const { user, isLoading } = userStore;
    console.log(JSON.stringify(user));
    return (
        <div>
            <UserField>{`Логин: ${user?.nickname}`}</UserField>

            <UserField>{`Деньги: ${user?.money}`}</UserField>
        </div>

    )
}

export default observer(AccountButton);
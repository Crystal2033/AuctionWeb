import React from 'react'
import { useStore } from '../stores/useStoreContext';
import { observer } from 'mobx-react-lite';

const AccountButton = () => {
    const { userStore } = useStore();
    const { user } = userStore;
    console.log(user);
    return (
        <div>{`user: ${user?.nickname}`}</div>
    )
}

export default observer(AccountButton);
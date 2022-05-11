import styled from "@emotion/styled"
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useStore } from "../stores/useStoreContext";

const UserContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:left;
`

const UserField = styled.div`
    color:white;
    padding:5px 10px;
    font-size: 15px;
    margin-left: 5px;
`
const HeaderItem = styled.div`
    color:white;
    text-decoration: none;
    padding:10px 15px;
    font-size: 20px;
    margin-left: 5px;
    cursor: pointer;
    transition: all 1s ease;
:hover {
    background-color: #398668;
    border-radius: 4px;
}
`
const LogOutBtn = styled.button`
    
`

const UserData = () => {
    const clickLogout = () => {
        userStore.logout();
    }

    const { userStore } = useStore();
    const { user, isLoading } = userStore;
    console.log(JSON.stringify(user));
    return (
        <UserContainer>
            {!user ?
                <Link href="/login" passHref>
                    <HeaderItem>Войти</HeaderItem>
                </Link> :
                <div>
                    <UserField suppressHydrationWarning>{`${!isLoading ? user?.nickname : "Неизвестно"}`}</UserField>
                    <UserField suppressHydrationWarning>{`Деньги: ${!isLoading ? user?.money : 0}`}</UserField>
                    <LogOutBtn onClick={clickLogout}>Выйти</LogOutBtn>
                </div>}
        </UserContainer>
    )
}

export default observer(UserData)
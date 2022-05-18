import styled from "@emotion/styled"
import { Avatar } from "@mui/material";
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
    padding:5px 5px;
    font-size: 15px;
    display:flex;
    flex-direction:row;
    align-items:center;
    //margin-left: 5px;
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
    background:#1d5152;
    color:#ffffff;
    text-decoration:none;
    display:block;
    width:90px;
    text-align:center;
    padding:5px 5px;
    margin: 4px;
    border-radius: 5px;
    transition:all 0.3s;
    border-color: #14282b;
    :hover{
    box-shadow:0px -4px 0 #08a9be inset;
}
`

const stringToColor = (string: string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

const stringAvatar = (name: string) => {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}`,
    };
}

const MyAvatar = styled(Avatar)`
    width: 24px;
    height: 24px;
    padding: 5px;
    margin: 5px;
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
                <UserContainer>

                    <UserField suppressHydrationWarning><MyAvatar {...stringAvatar(user?.nickname)} variant="rounded" />{`${!isLoading ? user?.nickname : "Неизвестно"}`}</UserField>
                    <UserField suppressHydrationWarning>{`Деньги: ${!isLoading ? user?.money : 0}`}</UserField>
                    <LogOutBtn onClick={clickLogout}>Выйти</LogOutBtn>
                </UserContainer>}
        </UserContainer>
    )
}

export default observer(UserData)
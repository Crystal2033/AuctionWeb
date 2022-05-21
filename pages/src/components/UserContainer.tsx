import styled from "@emotion/styled"
import { Avatar } from "@mui/material";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useStore } from "../stores/useStoreContext";

const UserContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
`

const Field = styled.div`
    position: relative;
    cursor: pointer;
    
    :after{
        content: "";
        display: block;
        position: absolute;
        right: 0;
        bottom: -3px;
        width: 0;
        height: 2px; /* Высота линии */
        background-color: #6ec3df; /* Цвет подчеркивания при исчезании линии*/
        transition: width 0.5s; /* Время эффекта */
    }
    :hover::after{
        content: "";
        width: 100%;
        display: block;
        position: absolute;
        left: 0;
        bottom: -3px;
        height: 2px; /* Высота линии */
        background-color: #6ec3df; /* Цвет подчеркивания при появлении линии*/
        transition: width 0.5s;  /* Время эффекта */

    }
    
   
`

const UserClickableField = styled.div`
    color:white;
    padding:5px 5px;
    font-size: 20px;
    display:flex;
    flex-direction:row;
    align-items:center;
    
    :hover{
        color: #6ec3df;
        transition: 0.5s;
    }
    :not(:hover){
        transition: 0.5s;
    }
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
    width: 25px;
    height: 25px;
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
                    <Link href="me" passHref>
                        <UserClickableField suppressHydrationWarning><MyAvatar {...stringAvatar(user?.nickname)} variant="rounded" /><Field>{`${!isLoading ? user?.nickname : "Неизвестно"}`}</Field></UserClickableField>
                    </Link>
                    {/* <Field suppressHydrationWarning>{`Деньги: ${!isLoading ? user?.money : 0}`}</Field> */}
                    <LogOutBtn onClick={clickLogout}>Выйти</LogOutBtn>
                </UserContainer>}
        </UserContainer>
    )
}

export default observer(UserData)
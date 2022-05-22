import styled from "@emotion/styled"
import { Avatar } from "@mui/material";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useStore } from "../stores/useStoreContext";
import { MdAccountCircle } from 'react-icons/md';

const UserContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    flex-wrap: wrap;
`

const DataContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;

`

const Field = styled.div`
    position: relative;
    cursor: pointer;
    font-family: sans-serif;
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

    :hover{
        color: #6ec3df;
        transition: 0.5s;
    }
    :not(:hover){
        transition: 0.5s;
    }
    
   
`

const UserClickableField = styled.div`
    color:white;
    padding:5px 5px;
    font-size: 20px;
    display:flex;
    flex-direction:row;
    align-items:center;
    
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
const Button = styled.button`
    background:#1d5152;
    color:#ffffff;
    text-decoration:none;
    display:block;
    width:90px;
    text-align:center;
    padding:5px 5px;
    margin-top :10px;
    border-radius: 10px;
    transition:all 0.3s;
    border-color: #14282b;
    :hover{
    box-shadow:0px -4px 0 #08a9be inset;
}
`


const AccountIcon = styled(MdAccountCircle)`
    width: 25px;
    height:25px;
    margin-right: 10px;
    color:white;
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
                    <Button>Войти</Button>
                </Link> :
                <UserContainer>
                    <DataContainer>
                        <Link href="/me" passHref>
                            <UserClickableField suppressHydrationWarning>
                                <AccountIcon />
                                <Field>
                                    {`${!isLoading ? user?.nickname : "Неизвестно"}`}
                                </Field>
                            </UserClickableField>
                        </Link>
                    </DataContainer>
                    {/* <Field suppressHydrationWarning>{`Деньги: ${!isLoading ? user?.money : 0}`}</Field> */}
                    <Button onClick={clickLogout}>Выйти</Button>
                </UserContainer>}
        </UserContainer>
    )
}

export default observer(UserData)
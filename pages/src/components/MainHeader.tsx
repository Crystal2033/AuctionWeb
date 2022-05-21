import styled from "@emotion/styled"
import Link from "next/link"
import UserData from "./UserContainer"

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 10px;
    background: #1d3a3d;
    font-family: sans-serif;
    flex-wrap:wrap;
    
`

const HeaderSection = styled.div`
    display: flex;
    align-items:center;
    flex-wrap:wrap;
`

const HeaderItem = styled.div`
    color:white;
    text-decoration: none;
    padding:20px 15px;
    font-size: 20px;
    margin-left: 5px;
    cursor: pointer;
    border-radius: 10px;
    transition: all 1s ease;
    /* &.active {
        background-color:red;
    } */
:hover {
    background-color: #398668;  
}


`


const MainHeader = () => {
    return (
        <Header>
            <HeaderSection>
                <Link href="/lots" passHref>
                    <HeaderItem>Все лоты</HeaderItem>
                </Link>
                <Link href="/products" passHref>
                    <HeaderItem className="active">Мои товары</HeaderItem>
                </Link>
                <Link href="/lots" passHref>
                    <HeaderItem>Мои лоты</HeaderItem>
                </Link>
                <Link href="/" passHref>
                    <HeaderItem>Поиск лота</HeaderItem>
                </Link>
                <Link href="/" passHref>
                    <HeaderItem>Добавить товар</HeaderItem>
                </Link>
                <Link href="/" passHref>
                    <HeaderItem>Выставить лот</HeaderItem>
                </Link>
                <Link href="/" passHref>
                    <HeaderItem>Корзина</HeaderItem>
                </Link>
            </HeaderSection>

            <HeaderSection>
                <UserData />
            </HeaderSection>

        </Header>
    )
}

export default MainHeader
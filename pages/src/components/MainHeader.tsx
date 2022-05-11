import styled from "@emotion/styled"
import Link from "next/link"
import AccountButton from "./AccountButton"

const MainDiv = styled.span`
    margin-top:2em;
    flex: 1;
    flex-direction: column;
`

const StyledSpan = styled.span`
    //flex: 1;
    margin-left: 2em;
    margin-right: 2em;
`

const StyledLink = styled.span`
    font-family: sans-serif;
    font-size: 16px;
    color: #fff; /* Цвет обычной ссылки */
    position: relative;
    cursor: pointer;
    text-decoration: none; /* Убираем подчеркивание */
    transition: all 1s ease;
    :hover{
        color: #4895f4;
    }
    :after{
        content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: -3px;
    width: 0;
    height: 2px; /* Высота линии */
    background-color: #ffffff; /* Цвет подчеркивания при исчезании линии*/
    transition: width 0.5s; /* Время эффекта */
    }
   :hover::after {
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 2px; /* Высота линии */
    background-color: #7b5ae8; /* Цвет подчеркивания при появлении линии*/
    transition: width 0.5s;  /* Время эффекта */
    }

`

const myContainer = styled.span`
    
    flex-direction: column;

`


const MainHeader = () => {
    return (
        <MainDiv>

            <myContainer>
                <Link href="/" passHref>
                        <StyledLink>Списки лотов</StyledLink>
                </Link>

                <Link href="/" passHref>
                    <StyledLink>Поиск лота</StyledLink>
                </Link>
                <AccountButton />
            </myContainer>

            {/* <StyledSpan>
                <Link href="/" passHref>
                    <StyledLink>Списки лотов</StyledLink>
                </Link>
            </StyledSpan>

            <StyledSpan>
                <Link href="/" passHref>
                    <StyledLink>Поиск лота</StyledLink>
                </Link>
            </StyledSpan>

            <StyledSpan>
                <Link href="/" passHref>
                    <StyledLink>Добавить товар</StyledLink>
                </Link>
            </StyledSpan>

            <StyledSpan>
                <Link href="/" passHref>
                    <StyledLink>Выставить лот</StyledLink>
                </Link>
            </StyledSpan>

            <StyledSpan>
                <Link href="/" passHref>
                    <StyledLink>Корзина</StyledLink>
                </Link>
            </StyledSpan>

            <StyledSpan>
                <Link href="/login" passHref>
                    <StyledLink>Личный кабинет</StyledLink>
                </Link>
            </StyledSpan>

            <StyledSpan>
                <AccountButton />
            </StyledSpan> */}

        </MainDiv>
    )
}

export default MainHeader
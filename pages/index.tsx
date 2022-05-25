import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"
import { NextPage } from "next/types"
import FooterObj from "./src/components/Footer"
import MainHeader from "./src/components/MainHeader"

const Container = styled.div`
height: 100%;
    display: flex;
  flex-direction: column;
  /* height: 100%; */
  justify-content: space-between;
`

const Home: NextPage = () => {
    //const router = useRouter()
    return (
        <Container>
            <MainHeader />
            {/* <FooterObj /> */}
        </Container>
    )
}

export default Home
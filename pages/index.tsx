import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"
import { NextPage } from "next/types"
import MainHeader from "./src/components/MainHeader"

const Home: NextPage = () => {
    //const router = useRouter()
    return (
        <MainHeader />
    )
}

export default Home
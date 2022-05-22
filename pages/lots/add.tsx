import styled from "@emotion/styled";
import { NextPage } from "next/types";
import { useEffect, useLayoutEffect, useState } from "react";
import { getUserProducts } from "../src/api/productsApi";
import LotForm from "../src/components/LotForm";
import MainHeader from "../src/components/MainHeader";
import { Product } from "../src/types/types";

const PageHeader = styled.h1`
    color: white;
`

const Container = styled.div` //red
    display:flex;
    flex-direction:column;
    align-items:center;
`

const GlobalContainer = styled.div` //blue
    display: flex;
    flex-direction:column;
    justify-content: center;

`

export type LotInfo = { // LotRequest
    name: string,
    startPrice: number,
    productIds: ReadonlyArray<string>
}



const Lots: NextPage = () => {
    const [lotData, setLotData] = useState<LotInfo>();
    const [bool, setbool] = useState(false);
    useEffect(() => {
        console.log(lotData);
    }, [bool, lotData])

    if (typeof window !== 'undefined') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // useLayoutEffect(() => {
        //     getUserProducts().then((data) => {
        //         setProducts(data.data);
        //     })
        // }, []);
    }
    // useEffect(() => {
    //     console.log("Hello", lotinfo)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [lotinfo])


    return (
        <GlobalContainer>
            <MainHeader />
            <PageHeader >Добавить лот</PageHeader>
            <Container>
                <LotForm setData={(name: string, price: number) => {
                    setLotData({ name: name, startPrice: price, productIds: lotData?.productIds ? lotData.productIds : [] });
                    setbool(true);
                }} />
            </Container>
        </GlobalContainer>
    );
};

export default Lots;
import styled from "@emotion/styled";
import { NextPage } from "next/types";
import { useEffect, useLayoutEffect, useState } from "react";
import { addLot } from "../src/api/lotsApi";
import { getUserProducts } from "../src/api/productsApi";
import LotForm from "../src/components/LotForm";
import MainHeader from "../src/components/MainHeader";
import ProductCard from "../src/components/ProductCard";
import { useStore } from "../src/stores/useStoreContext";
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


const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
`


const Lots: NextPage = () => {
    const [lotData, setLotData] = useState<LotInfo>();
    const [bool, setbool] = useState(false);
    const { userStore } = useStore();
    const { user } = userStore;
    const [products, setProducts] = useState<ReadonlyArray<Product>>([]);

    const [chosenProds, setChosenProds] = useState<Array<string>>([]);


    if (typeof window !== 'undefined') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useLayoutEffect(() => {
            getUserProducts().then((data) => {
                setProducts(data.data);
            })
        }, []);
    }

    useEffect(() => {
        setProducts([]);
    }, [user])

    useEffect(() => {
        console.log(lotData);
        if (lotData?.name && lotData?.startPrice && lotData?.productIds) {

            addLot(lotData.name, lotData.startPrice, lotData.productIds);

        }
        console.assert("Error")
    }, [bool, lotData])


    return (
        <GlobalContainer>
            <MainHeader />
            <PageHeader >Добавить лот</PageHeader>
            <Container>
                <LotForm setData={(name: string, price: number) => {
                    setLotData({ name: name, startPrice: price, productIds: chosenProds });
                    setbool(true);
                }} />

                <ProductsContainer>
                    {products.map((product) => (
                        <ProductCard key={product.id} data={product} getId={(id: string) => {
                            chosenProds.push(id);
                            setChosenProds(chosenProds);

                        }} />
                    ))}
                </ProductsContainer>

            </Container>
        </GlobalContainer>
    );
};

export default Lots;
export type User = {
    id: string,
    nickname: string,
    //email: string,
    money: number,
    secretToken?: string,
}

export type Lot = {
    id: string,
    name: string,
    startPrice: number,
    bidStep: number,
    lotProducts: ReadonlyArray<Product>,
    //lotBets: ReadonlyArray<Product>
}

export type Product = {
    id: string,
    name: string,
}

export type Bet = {
    id : string;
    betSize: number;
};
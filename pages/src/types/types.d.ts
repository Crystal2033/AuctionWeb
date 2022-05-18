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
}

export type Product = {
    id: string,
    name: string,
}
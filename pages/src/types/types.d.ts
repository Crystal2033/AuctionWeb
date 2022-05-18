export type User = {
    id: string,
    nickname: string,
    //email: string,
    money: number,
    secretToken?: string,
}

export type Lot = {
    name: string;
    price: number;
    step: number;
};
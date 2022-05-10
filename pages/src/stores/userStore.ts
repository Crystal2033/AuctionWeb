import { types } from 'mobx-state-tree'
import { login } from '../api/authApi';
import { getAccount } from '../api/mainApi';
import { saveSession } from '../utils/authKeyStorageService';

const User = types.model("User", {
    id: types.string,
    nickname: types.string,
    //email: types.string,
    money: types.integer,
}
);

export const UserStore = types.model("UserStore").props({
    user: types.maybeNull(User),
    isLoading: types.boolean,
}).actions((self) => ({
    afterCreate: () => {
        console.log("USER STORE CREATED");
        setTimeout(() => {
            (self as any).syncAccount();
        })

    },
    syncAccount: () => {
        getAccount().then(({ data: user }) => {
            self.user = User.create(user);
        });
    },
    login: (name:string, password:string) => {
        login(name, password)
            .then((response) =>{
                saveSession(response.data.secretToken);
                (self as any).syncAccount();
            })
            .catch(console.error);
    },
}));

export const initialUserStoreState = {
    user: null,
    isLoading: false,
};
import { types } from 'mobx-state-tree'
import router, { useRouter } from 'next/router';
import { login, signup } from '../api/authApi';
import { getAccount } from '../api/mainApi';
import { saveSession } from '../utils/authKeyStorageService';
const User = types.model("User", {
    id: types.string,
    nickname: types.string,
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
        self.isLoading = true;
        getAccount().then(({ data: user }) => {
            self.user = User.create(user);
            self.isLoading = false;
        });
    },
    signup: (email: string, password: string) => {
        signup(email, password);
    },
    login: (email: string, password: string) => {
        login(email, password).then((response) => {
            self.isLoading = true;
            saveSession(response.data.secretToken);
            (self as any).syncAccount();
            self.isLoading = false;
            router.back();
        });

    }
}));

export const initialUserStoreState = {
    user: null,
    isLoading: false,
};
import { types } from 'mobx-state-tree'
import router, { useRouter } from 'next/router';
import { userInfo } from 'os';
import { login, signup } from '../api/authApi';
import { getAccount } from '../api/mainApi';
import { deleteSession, saveSession } from '../utils/authKeyStorageService';
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
        //console.log("USER STORE CREATED");
        setTimeout(() => {
            (self as any).syncAccount();
        })
    },
    syncAccount: () => {
        //self.isLoading = true;
        getAccount().then(({ data: user }) => {
            //console.log(`User after syncAccount: ${user.id}`);
            if (user) {
                self.user = User.create(user);
                //self.isLoading = false;
            }
        })
            .catch((err) => {
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
        }).catch((err) => {
        });
    },
    logout: () => {
        deleteSession();
        self.user = null;
        //(self as any).syncAccount();
    }
}));

export const initialUserStoreState = {
    user: null,
    isLoading: false,
};
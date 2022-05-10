import { types } from 'mobx-state-tree'
//import { getAccount } from '../api/mainApi';
// const User = types.model("User", {
//     id: types.string,
//     nickname: types.string,
//     money: types.integer,
// }
// );

// export const UserStore = types.model("UserStore").props({
//     user: types.maybeNull(User),
//     isLoading: types.boolean,
// }).actions((self) => ({
//     afterCreate: () => {
//         console.log("USER STORE CREATED");
//         setTimeout(() => {
//             (self as any).syncAccount();
//         })

//     },
//     syncAccount: () => {
//         getAccount().then(({ data: user }) => {
//             self.user = User.create(user);
//         });
//     }
// }));

// export const initialUserStoreState = {
//     user: null,
//     isLoading: false,
// };
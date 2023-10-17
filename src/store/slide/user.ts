import { createSlice } from "@reduxjs/toolkit";

// type userState = {
//   createdAt: string;
//   email: string;
//   firstName: string;
//   id: string;
//   lastName: string;
//   money: number;
//   phone: string;
//   updateAt: string;
//   username: string;
// };

const initialState = {
  userInfo: {},
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleUpdateUser: (state, { payload }) => {
      state.userInfo = payload;
    },
    handleIsLogin: (state, { payload }) => {
      state.isLogin = payload;
    },
  },
});

export const selectUserInfo = (state: any) => state.user.userInfo;
export const selectIsLogin = (state: any) => state.user.isLogin;

export const { handleUpdateUser, handleIsLogin } = userSlice.actions;

export default userSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

//Type of data for user
export interface UserState {
  id: number;
  comapnyID: number;
  departmentID: number;
  role: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  contact: string;
  // address: string,
}

//The initial state
const initialState: UserState = {
  id: 0,
  comapnyID: 0,
  departmentID: 0,
  role: "",
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  contact: "",
};

///Created action which can called
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<object>) => {
      return {
        // ...state,
        ...action.payload,
      };
    },

    //write more actions here if needed
  },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;

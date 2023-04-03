import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error:false
    },

    reducers: {
        loginStart: (state, action) => {
            state.isFetching = true;
        },

        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
                   
        },

        loginFail: (state, action) => {
            state.isFetching = false;
            state.error = true;
        }


    }

})

export const { loginStart, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;




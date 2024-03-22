import { createSlice } from '@reduxjs/toolkit'

const initialState = null;

export const authenSlice = createSlice({

    name: 'authen',
    initialState,
    reducers: {
        login: (store, action) => {
            const userData = action.payload;
            store = userData;
            return store;
        },
        logout: (store, action) => {
            return null;
        }
    },
},
);



export const { login,logout } = authenSlice.actions;

export default authenSlice.reducer;
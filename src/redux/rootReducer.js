import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./feature/counterSlide";
import authenSlice from "./feature/authenSlice";
import cartSlice from "./feature/cartSlice";

const rootReducer = combineReducers({
    counter: counterSlice,
    authen: authenSlice,
    cart: cartSlice
});
export default rootReducer;


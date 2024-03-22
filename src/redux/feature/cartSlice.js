import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log("addd");
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
        existingItem.quantity += 1;
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới
        state.push({ ...action.payload, quantity: 1 });
      }
      return state;
    },

    remove: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (action.payload.id === state[i].id) {
          if (state[i].quantity > 1) {
            state[i].quantity -= 1;
          } else {
            state.splice(i, 1);
          }
        }
      }
      return state;
    },

    reset: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, reset } = cartSlice.actions;

export default cartSlice.reducer;

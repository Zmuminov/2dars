import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, actions) => {
      let copied = JSON.parse(JSON.stringify(state.value));
      copied.push(actions.payload);
      state.value = copied;
    },
    deleteUser: (state, actions) => {
      let copied = JSON.parse(JSON.stringify(state.value));
      copied = copied.filter((el) => {
        return el.id != actions.payload;
      });
      state.value = copied;
    },
    update: (state, actions) => {
      let copied = JSON.parse(JSON.stringify(state.value));
      copied = copied.map((el) => {
        if (el.id == actions.payload.id) {
          el.name = actions.payload.name;
          el.email = actions.payload.email;
        }
        return el;
      });
      state.value = copied;
    },
  },
});
export const { add, deleteUser, update } = usersSlice.actions;
export default usersSlice.reducer;

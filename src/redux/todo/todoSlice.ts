import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "./todo";

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // addTodo: (state, action: PayloadAction<>) => {},
  },
});

const todoReducer = todoSlice.reducer;
export default todoReducer;

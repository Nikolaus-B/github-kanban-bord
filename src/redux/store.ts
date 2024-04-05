import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import issueReducer from "./issue/issueSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    issues: issueReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const appSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

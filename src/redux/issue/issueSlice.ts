import { createSlice } from "@reduxjs/toolkit";
import { IssueState } from "./issue";
// import { fetchIssus } from "./operations";

const initialState: IssueState = {
  issues: [],
  isLoading: false,
  isError: false,
};

const issueSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(
  //     fetchIssus.fulfilled,
  //     (state, action: PayloadAction<object[]>) => {
  //       state.issues = action.payload;
  //     }
  //   );
  // },
});

const issueReducer = issueSlice.reducer;
export default issueReducer;

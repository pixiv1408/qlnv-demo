import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  list: [],
  searchList: [],
};

const removeEmployeeSlice = createSlice({
  name: 'removes',
  initialState: INITIAL_STATE,
  reducers: {
    searchEmployee(state, action) {
      const result = state.list.filter((item) => item.name.includes(action.payload.name));
      state.searchList = result;
    },
    addEmployee(state, action) {
      state.list.push(action.payload);
      state.searchList.push(action.payload);
    },
    removeEmployee(state, action) {
      const result = state.list.filter((item) => item.id !== action.payload.id);
      state.list = result;
      state.searchList = result;
    }
  }
});

export const {
  searchEmployee,
  addEmployee,
  removeEmployee,
} = removeEmployeeSlice.actions;

export default removeEmployeeSlice.reducer;
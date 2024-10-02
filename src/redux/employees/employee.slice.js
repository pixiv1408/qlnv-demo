import { createSlice } from "@reduxjs/toolkit";
import SAMPLE_DATA from "../../../data.sampel";
import { fetchAddEmployeeThunk, fetchEmployeesThunk, fetchUpdateEmployeeThunk } from "./employee.thunk";

const INITIAL_STATE = {
  list: [],
  searchList: [],
  searchTest: '',
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder.addCase(fetchEmployeesThunk.fulfilled, (state, action) => {
      state.list = action.payload;
      state.searchList = action.payload;
    })
      .addCase(fetchAddEmployeeThunk.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.searchList.push(action.payload);
      })
      .addCase(fetchUpdateEmployeeThunk.fulfilled, (state, action) => {
        const result1 = state.list.find((item) => Number(action.payload.id) === item.id);
        const result2 = state.searchList.find((item) => Number(action.payload.id) === item.id);
        Object.assign(result1, action.payload);
        Object.assign(result2, action.payload);
      })
  },
  reducers: {
    searchEmployee(state, action) {
      const result = state.list.filter((item) => item.name.includes(action.payload.name));
      state.searchList = result;
    },
    removeEmployee(state, action) {
      const result = state.searchList.filter((item) => item.id !== action.payload.id);
      state.searchList = result
    },
    restoreEmployee(state, action) {
      state.searchList.push(action.payload);
    },
  }
});

export const {
  searchEmployee,
  addEmployee,
  updateEmployee,
  removeEmployee,
  restoreEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import SAMPLE_DATA from "../../../data.sampel";

const INITIAL_STATE = {
  list: SAMPLE_DATA,
  searchTest: '',
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState: INITIAL_STATE,
  reducers: {
    searchEmployee(state, action) {
      const result = SAMPLE_DATA.filter((item) => item.name.includes(action.payload.name));
      state.list = result;
    },
    addEmployee(state, action) {
      const nextId = state.list.length + 1;
      const staff = {
        id: nextId,
        ...action.payload,
      };
      state.list.push(staff);
    },
    updateEmployee(state, action) {
      const result = state.list.find((item) => Number(action.payload.id) === item.id);
      const staff = {
        name: action.payload.name,
        duty: action.payload.duty,
      };
      Object.assign(result, staff);
    },
    removeEmployee(state, action) {
      const result = state.list.filter((item) => item.id !== action.payload.id);
      state.list = result
    },
    restoreEmployee(state, action) {
      state.list.push(action.payload);
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
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employees/employee.slice";
import removeEmployeeReducer from "./removes/removes.slice";
import authReducer from "./auth/auth.slice";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    removes: removeEmployeeReducer,
    auth: authReducer,
  }
});

export default store;
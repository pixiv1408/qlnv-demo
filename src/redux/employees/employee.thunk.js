import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";

export const fetchEmployeesThunk = createAsyncThunk(
  'employee/fetchEmployeesThunk',
  async () => {
    const response = await authInstance.get('/employees');
    const { data: { staffs } } = response.data;
    return staffs;
  }
);

export const fetchAddEmployeeThunk = createAsyncThunk(
  'employee/fetchAddEmployeeThunk',
  async (data) => {
    const { name, duty, image } = data;
    const response = await authInstance.post(
      '/employees',
      { name, duty, image }
    );
    const { data: { staff } } = response.data;

    return staff;
  }
);

export const fetchUpdateEmployeeThunk = createAsyncThunk(
  'employee/fetchUpdateEmployeeThunk',
  async (data) => {
    const { id, name, duty, image } = data;
    const response = await authInstance.patch(
      `/employees/${id}`,
      { id, name, duty, image }
    );
    const { data: { staff } } = response.data;

    return staff;
  }
);
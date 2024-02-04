import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get All Student Data
export const getAllStudent = createAsyncThunk(
  "student/getAllStudent",
  async () => {
    try {
      const response = await axios.get("http://localhost:5050/student");
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Create Student Thunk
export const createStudent = createAsyncThunk(
  "student/createStudent",
  async (data) => {
    try {
      const response = await axios.post("http://localhost:5050/student", data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Update Single Student
export const updateStudent = createAsyncThunk(
  "student/updateStudent",
  async (data) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/student/${data.id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Delete Single Student
export const deleteStudent = createAsyncThunk(
  "student/deleteStudent",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/student/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

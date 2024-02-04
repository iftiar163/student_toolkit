import { createSlice } from "@reduxjs/toolkit";
import {
  createStudent,
  deleteStudent,
  getAllStudent,
  updateStudent,
} from "./studentApiSlice";

// Create Student Slice
const studentSlice = createSlice({
  name: "student",
  initialState: {
    student: [],
    loading: false,
    message: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStudent.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.student = [...state.student, action.payload];
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllStudent.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.student = [...action.payload];
      })
      .addCase(getAllStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteStudent.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.student = state.student.filter(
          (data) => data.id !== action.payload.id
        );
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateStudent.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.student[
          state.student.findIndex((data) => data.id === action.payload.id)
        ] = action.payload;
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export Selector
export const selectStudent = (state) => state.student;

// Export Actions
export const {} = studentSlice.actions;

// Export Default
export default studentSlice.reducer;

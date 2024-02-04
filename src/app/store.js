import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/student/studentSlice";

// Create Store
const store = configureStore({
  reducer: {
    student: studentReducer,
  },
  middleware: (getMiddlewareDefault) => getMiddlewareDefault(),
  devTools: true,
});

// Export Default
export default store;

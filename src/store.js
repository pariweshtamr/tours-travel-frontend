import { configureStore } from "@reduxjs/toolkit"
import tourReducer from "./redux/Tours/TourSlice"
import authReducer from "./redux/Auth/AuthSlice"
const store = configureStore({
  reducer: {
    tour: tourReducer,
    auth: authReducer,
  },
})

export default store

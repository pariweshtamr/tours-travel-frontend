import { configureStore } from "@reduxjs/toolkit"
import tourReducer from "./redux/Tours/TourSlice"
import authReducer from "./redux/Auth/AuthSlice"
import bookingReducer from "./redux/Booking/BookingSlice"
const store = configureStore({
  reducer: {
    tour: tourReducer,
    auth: authReducer,
    booking: bookingReducer,
  },
})

export default store

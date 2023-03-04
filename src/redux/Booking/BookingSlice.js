import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  bookings: {},
  isLoading: false,
  error: {},
}

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    getBookingsSuccess: (state, { payload }) => {
      state.isLoading = false
      state.bookings = payload
    },
    requestFailed: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    },
  },
})

const { reducer, actions } = bookingSlice

export const { requestPending, getBookingsSuccess, requestFailed } = actions

export default reducer

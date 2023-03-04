import { getUserBookings } from "../../helpers/axiosHelper"
import {
  getBookingsSuccess,
  requestFailed,
  requestPending,
} from "./BookingSlice"

export const getUserBookingAction = () => async (dispatch) => {
  try {
    dispatch(requestPending())
    // call api
    const { status, message, bookings } = await getUserBookings()

    if (status === "success") {
      dispatch(getBookingsSuccess(bookings))
    } else {
      dispatch(requestFailed({ status, message }))
    }
  } catch (error) {
    console.log(error)
  }
}

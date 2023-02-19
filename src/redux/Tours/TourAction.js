import {
  fetchAllTours,
  fetchFeaturedTours,
  fetchSingleTour,
  fetchTourCount,
} from "../../helpers/axiosHelper"
import {
  getCount,
  getFeaturedTours,
  getTours,
  requestFailed,
  requestPending,
  getSelectedTour,
} from "./TourSlice"

export const getToursAction = (page) => async (dispatch) => {
  try {
    dispatch(requestPending())

    // call api

    const [res1, res2] = await Promise.all([
      fetchAllTours(page),
      fetchTourCount(),
    ])

    const { status, tours } = res1
    const { tourCount } = res2

    status === "success" && res2.status === "success"
      ? dispatch(getTours(tours)) && dispatch(getCount(tourCount))
      : dispatch(
          requestFailed({
            status: "error",
            message: "Unable to get tours!",
          })
        )
  } catch (error) {
    dispatch(
      requestFailed({
        status: "error",
        message: error.message,
      })
    )
  }
}
export const getFeaturedToursAction = () => async (dispatch) => {
  try {
    dispatch(requestPending())

    // call api

    const { status, tours } = await fetchFeaturedTours()

    status === "success"
      ? dispatch(getFeaturedTours(tours))
      : dispatch(
          requestFailed({
            status: "error",
            message: "Unable to get featured tours!",
          })
        )
  } catch (error) {
    dispatch(
      requestFailed({
        status: "error",
        message: error.message,
      })
    )
  }
}
export const getSingleTourAction = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending())
    // call api
    const { status, tour } = await fetchSingleTour(_id)

    status === "success" && dispatch(getSelectedTour(tour))
  } catch (error) {
    dispatch(
      requestFailed({
        status: "error",
        message: error.message,
      })
    )
  }
}

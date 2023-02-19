import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tours: [],
  featuredTours: [],
  selectedTour: {},
  isLoading: false,
  tourCount: 0,
  response: {},
}

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    getFeaturedTours: (state, { payload }) => {
      state.isLoading = false
      state.featuredTours = payload
    },
    getTours: (state, { payload }) => {
      state.isLoading = false
      state.tours = payload
    },
    getCount: (state, { payload }) => {
      state.isLoading = false
      state.tourCount = payload
    },
    getSelectedTour: (state, { payload }) => {
      state.isLoading = false
      state.selectedTour = payload
    },
    requestFailed: (state, { payload }) => {
      state.isLoading = false
      state.response = payload
    },
  },
})

const { reducer, actions } = tourSlice

export const {
  requestPending,
  getFeaturedTours,
  getSelectedTour,
  getTours,
  requestFailed,
  getCount,
} = actions

export default reducer

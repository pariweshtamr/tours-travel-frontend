import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false
      state.isLoggedIn = true
      state.user = payload
      state.error = null

      localStorage.setItem("user", JSON.stringify(payload))
    },
    logoutSuccess: (state) => {
      state.isLoading = false
      state.isLoggedIn = false
      state.user = null
      state.error = null

      localStorage.removeItem("user")
    },
    requestFailed: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    },
  },
})

const { reducer, actions } = authSlice

export const { requestPending, requestFailed, loginSuccess, logoutSuccess } =
  actions

export default reducer

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {},
  isLoading: false,
  isLoggedIn: false,
  error: {},
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
      state.error = {}
    },
    logoutSuccess: (state) => {
      state.isLoading = false
      state.isLoggedIn = false
      state.user = {}
      state.error = {}
    },
    autoLogin: (state, { payload }) => {
      state.user = payload
      state.isLoggedIn = true
    },
    requestFailed: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    },
  },
})

const { reducer, actions } = authSlice

export const {
  requestPending,
  requestFailed,
  loginSuccess,
  logoutSuccess,
  autoLogin,
} = actions

export default reducer

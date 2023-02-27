import {
  getUser,
  loginUser,
  requestNewAccessJwt,
  updatePassword,
} from "../../helpers/axiosHelper"
import {
  autoLogin,
  loginSuccess,
  logoutSuccess,
  requestFailed,
  requestPending,
} from "./AuthSlice"
import { toast } from "react-toastify"

const fetchUser = (accessJwt) => async (dispatch) => {
  const { status, user } = await getUser(accessJwt)

  status === "success" && dispatch(autoLogin(user))
}

export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending())

    // call api
    const { status, message, user, tokens } = await loginUser(formData)

    if (status === "success") {
      sessionStorage.setItem("accessJwt", tokens.accessJwt)
      localStorage.setItem("refreshJwt", tokens.refreshJwt)
      return dispatch(loginSuccess(user))
    }

    dispatch(requestFailed({ status, message })) && toast[status](message)
  } catch (error) {
    dispatch(requestFailed(error))
  }
}

export const autoLoginAction = () => async (dispatch) => {
  const accessJwt = sessionStorage.getItem("accessJwt")
  const refreshJwt = localStorage.getItem("refreshJwt")
  // if accessJwt exists, fetch user and dispatch to our global state
  // else
  // if refreshJwt exists, fetch new access Jwt and then fetch the user
  if (accessJwt) {
    dispatch(fetchUser(accessJwt))
    return
  }
  if (refreshJwt) {
    const token = await requestNewAccessJwt(refreshJwt)

    token && sessionStorage.setItem("accessJwt", token)
    return token && dispatch(fetchUser(token))
  }
  dispatch(logoutSuccess())
}

export const updatePasswordAction = (obj) => async (dispatch) => {
  try {
    dispatch(requestPending())

    // call api
    const { status, message } = await updatePassword(obj)

    status && toast[status](message)
  } catch (error) {
    dispatch(requestFailed(error))
  }
}

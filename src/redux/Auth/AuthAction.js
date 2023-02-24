import { loginUser, updatePassword } from "../../helpers/axiosHelper"
import { loginSuccess, requestFailed, requestPending } from "./AuthSlice"
import { toast } from "react-toastify"

export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending())

    // call api
    const { status, message, user, tokens } = await loginUser(formData)

    status === "success"
      ? dispatch(loginSuccess({ ...tokens, ...user }))
      : dispatch(requestFailed({ status, message }))
  } catch (error) {
    dispatch(requestFailed(error))
  }
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

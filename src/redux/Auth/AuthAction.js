import { loginUser } from "../../helpers/axiosHelper"
import { loginSuccess, requestFailed, requestPending } from "./AuthSlice"

export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending())

    // call api
    const { status, message, user, token } = await loginUser(formData)

    status === "success"
      ? dispatch(loginSuccess({ token, ...user }))
      : dispatch(requestFailed({ status, message }))
  } catch (error) {
    dispatch(requestFailed(error))
  }
}

import axios from "axios"

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_ROOT_URL
    : "http://localhost:8000/api/v1"

const authUrl = rootUrl + "/auth"
const userUrl = rootUrl + "/user"
const tourUrl = rootUrl + "/tour"
const reviewUrl = rootUrl + "/review"
const bookingUrl = rootUrl + "/booking"

// AUTH
export const registerUser = async (formData) => {
  try {
    const { data } = await axios.post(authUrl + "/register", formData)
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const loginUser = async (formData) => {
  try {
    const { data } = await axios.post(authUrl + "/login", formData)
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const updatePassword = async (obj) => {
  const { formData } = obj
  try {
    const { data } = await axios.patch(userUrl + "update-password", formData, {
      headers: {
        Authorization: obj.accessJwt,
      },
    })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const getUser = async (accessJwt) => {
  try {
    const { data } = await axios.get(authUrl, {
      headers: {
        Authorization: accessJwt,
      },
    })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const requestNewAccessJwt = async (refreshJwt) => {
  const { data } = await axios.get(authUrl + "/accessJwt", {
    headers: {
      Authorization: refreshJwt,
    },
  })

  return data.accessJwt
}

// TOURS

export const fetchAllTours = async (page) => {
  try {
    const { data } = await axios.get(`${tourUrl}?page=${page}`)
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const fetchTourCount = async () => {
  try {
    const { data } = await axios.get(tourUrl + "/search/tourCount")
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const fetchSingleTour = async (_id) => {
  try {
    const { data } = await axios.get(`${tourUrl}/${_id}`)
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const fetchFeaturedTours = async () => {
  try {
    const { data } = await axios.get(tourUrl + "/search/featuredTour")
    return data
  } catch (error) {
    return {
      status: "error",
      message: "Unable to get featured tours!",
    }
  }
}

export const fetchSearchedTours = async (location, distance, people) => {
  try {
    const { data } = await axios.get(
      `${tourUrl}/search/getToursBySearch?city=${location}&distance=${distance}&maxGroupSize=${people}`
    )
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

// REVIEWS
export const submitReview = async (reviewData) => {
  const { reviewObj, _id, accessJwt } = reviewData

  try {
    const { data } = await axios.post(`${reviewUrl}/${_id}`, reviewObj, {
      headers: {
        Authorization: accessJwt,
      },
      withCredentials: true,
    })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

// BOOKING
export const createBooking = async (obj) => {
  const { booking, token } = obj
  try {
    const { data } = await axios.post(bookingUrl, booking, {
      headers: {
        Authorization: token,
      },
    })
    return data
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

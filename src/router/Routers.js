import { useSelector } from "react-redux"
import { Routes, Route, Navigate } from "react-router-dom"
import NoPage from "../pages/404/NoPage.js"
import Home from "../pages/home/Home.js"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import SearchResult from "../pages/searchResult/SearchResult"
import ThankYou from "../pages/thankYou/ThankYou.js"
import TourDetails from "../pages/tourDetails/TourDetails"
import Tours from "../pages/tours/Tours"
import UserProfile from "../pages/userProfile/UserProfile.js"

const Routers = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/" />
  }

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tours/:_id" element={<TourDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="tours/search" element={<SearchResult />} />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}
export default Routers

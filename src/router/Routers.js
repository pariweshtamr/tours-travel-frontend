import { Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home.js"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import SearchResult from "../pages/searchResult/SearchResult"
import TourDetails from "../pages/tourDetails/TourDetails"
import Tours from "../pages/tours/Tours"

const Routers = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tours/:id" element={<TourDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="tours/search" element={<SearchResult />} />
      </Route>
    </Routes>
  )
}
export default Routers
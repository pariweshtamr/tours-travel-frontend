import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logoutSuccess } from "../../redux/Auth/AuthSlice"
import Routers from "../../router/Routers"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Layout = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth)

  useEffect(() => {
    !isLoggedIn && dispatch(logoutSuccess())
  }, [isLoggedIn, dispatch])
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  )
}
export default Layout

import "./App.scss"
import Layout from "./components/Layout/Layout"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Layout />
    </div>
  )
}

export default App

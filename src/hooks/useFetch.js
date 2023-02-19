import { useState, useEffect } from "react"
import axios from "axios"
const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
      } catch (error) {}
    }
  }, [])

  return
}

export default useFetch

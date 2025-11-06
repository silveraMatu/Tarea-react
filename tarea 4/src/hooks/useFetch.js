import { useState, useEffect } from "react"

export const useFetch = (url)=>{
  
  const [data, setData ] = useState(null)
  const [isLoading, setLoading ] = useState(false)
  const [error, setError ] = useState(null)

  useEffect(()=>{
    setLoading(true)
    const getFetch = async ()=>{
      try {
        const res = await fetch(url)
        
        if(!res.ok) throw new Error("Error al obtener los datos")
  
        const dataAPI = await res.json()
        await new Promise(resolve => setTimeout(resolve, 500))
        setData(dataAPI)
        setLoading(false)
        
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    getFetch()
  }, [url])

  return {data, isLoading, error}
}
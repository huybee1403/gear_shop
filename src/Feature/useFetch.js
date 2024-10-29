import React, { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const response = await axios.get(url)
            setData(response.data)
        } catch (err) {
            console.log(err)

            console.log(err)
        }
    }
    useEffect(() => {
        getData()
    }, [url])

    return data
}

export default useFetch

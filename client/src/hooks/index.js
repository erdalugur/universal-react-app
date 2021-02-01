import { useState, useEffect } from 'react'

export const useQuery = function (uri, initialState) {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        loading && load()
    }, [loading])

    function load() {
        fetch(uri)
            .then(x => x.json())
            .then(({ data }) => {
                setData(data)
                setLoading(false)
            })
            .catch(err => setError(err))
    }
    return {
        data,
        loading,
        error
    }
}
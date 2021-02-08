import { useState, useEffect, createContext, useReducer, useContext } from 'react'

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


export const AppThemeContext = createContext({ type: 'dark', changeTheme: () => null })


export const AppThemeProvider = (props) => {
    const [type, dispatch] = useReducer(
        (state = 'dark') => {
            return state === 'dark' ? 'light' : 'dark'
        }, 'dark')
    return (
        <AppThemeContext.Provider value={{
            type,
            changeTheme: () => dispatch()
        }}>
            {props.children}
        </AppThemeContext.Provider>
    )
}

export const useAppTheme = () => useContext(AppThemeContext)
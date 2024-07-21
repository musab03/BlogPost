import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=> {
        //TODO:Make it more easy to understand by chagning the true, false logic
        if (authentication && authStatus!== authentication){
            navigate("/login")
        }else if (!authentication && authStatus !== authentication){
            navigate("/login")
        }
        setLoader(false)

    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}


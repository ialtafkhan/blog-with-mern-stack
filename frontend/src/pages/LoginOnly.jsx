import Reac, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function LoginOnly({ element }) {
    const navigate = useNavigate()
    const { login } = useSelector(state => state.allUsers)

    useEffect(() => {
        !login && navigate("/login")
    }, [login])

    if (!login) {
        return "unAuthorise access"
    }
    return element



}

export default LoginOnly








// useEffect(() => {
//     !login && navigate("/login")

// }, [login])

// if (!login) {
//     return "unauthorize access"

// }

// return element
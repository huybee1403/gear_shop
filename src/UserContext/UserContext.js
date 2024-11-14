import { createContext, useContext, useRef, useState } from "react"
import { toast } from "react-toastify"
import useFetch from "../Feature/useFetch"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [email, setEmail] = useState(localStorage.getItem("USER_EMAIL") ? localStorage.getItem("USER_EMAIl") : "")
    const userData = useFetch("https://6717cc55b910c6a6e02a08be.mockapi.io/user")
    const navigate = useNavigate()

    const handleLogin = (e, users) => {
        e.preventDefault()
        const checkUser = userData.find((item) => item.email === users.email)

        if (checkUser) {
            if (checkUser.password === users.password) {
                toast.success("Login Success")
                navigate("/")
                localStorage.setItem("USER_NAME", users.email)
                setEmail(users.email)
            } else {
                toast.error("Password Is Not Vaild")
            }
        } else {
            toast.error("Email Is Not Have")
        }
    }
    const handleLogout = () => {
        setEmail("")
        localStorage.removeItem("USER_EMAIL")
    }

    return <UserContext.Provider value={{ email, handleLogout, handleLogin, userData }}>{children}</UserContext.Provider>
}

const useUser = () => {
    return useContext(UserContext)
}

export { UserProvider, useUser }

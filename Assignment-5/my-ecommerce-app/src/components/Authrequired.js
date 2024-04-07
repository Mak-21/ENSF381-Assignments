import { Navigate } from "react-router-dom/dist"

const AuthRequired = ({children})=>{
const user = localStorage.getItem('user')

if(user){
    return children
}else{
    return <Navigate to={'/login'}/>
}

}


export default AuthRequired
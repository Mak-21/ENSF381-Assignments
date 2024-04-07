import { Navigate } from "react-router-dom/dist"

const GuestRequired = ({children})=>{
const user = localStorage.getItem('user')

if(user){
    return <Navigate to={'/'}/>
}else{
    return children
}

}


export default GuestRequired
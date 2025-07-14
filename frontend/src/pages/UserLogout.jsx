import React,{useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const UserLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
        headers : {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200){
            localStorage.removeItem('token')
            navigate('/login')
        }
    })
//     useEffect(() => {
//     const logout = async () => {
//       try {
//         await axios.get('http://localhost:3000/users/logout', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//       } catch (err) {
//         if (err.response?.status !== 401) {
//           console.error('Unexpected logout error:', err); // log only unexpected errors
//         }
//       } finally {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     };

//     logout();
//   }, []);
  return (
    <div>UserLogout</div>
  )
}

export default UserLogout
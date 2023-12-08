import React from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from './utilis'
const PrivateRoute = ({ component: Component }) => {
  console.log(getToken())
  return (
    getToken() ? <Component /> : <Navigate to="/login" />
  )
}

export default PrivateRoute
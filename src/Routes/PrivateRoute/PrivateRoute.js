import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return (
      <div className="grid justify-items-center my-6 ">
        <button className="btn btn-lg btn-ghost loading ">loading</button>
      </div>
    )
  }

  if (user) {
    return children
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute

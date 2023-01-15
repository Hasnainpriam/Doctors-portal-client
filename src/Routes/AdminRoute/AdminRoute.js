
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({children}) => {

  const {user,loading}=useContext(AuthContext);
  const [isAdmin,isAdminLoading]=useAdmin(user?.email) ;
  const location=useLocation();

  if(loading || isAdminLoading){
    return (
      <div className="grid justify-items-center my-6 ">
      <button className="btn btn-lg btn-ghost loading ">loading</button>
    </div>
    )
  }

  if(user && isAdmin){
     return children;
  }

  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;
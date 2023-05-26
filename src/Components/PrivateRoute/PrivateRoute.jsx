import {Navigate} from 'react-router-dom';

export const PrivateRoute = ({ children}) => {
    const token = sessionStorage.getItem('token');
    if (token && token != 'undefined') {
      return children;
    }
    return <Navigate to="/" />;
};

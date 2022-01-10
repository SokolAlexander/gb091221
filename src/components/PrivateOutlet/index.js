import { Outlet, Navigate } from 'react-router-dom';

export const PrivateOutlet = ({ isAuthed }) => {

  return isAuthed ? <Outlet /> : <Navigate to="/" replace />;
};

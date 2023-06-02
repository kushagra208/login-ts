import { Navigate } from 'react-router-dom';

type MyComponentProps = {
  children: React.ReactElement;
};

export const PrivateRoute = ({ children }:MyComponentProps):React.ReactElement => {
  const email = null;

  if(!email) {
    return <Navigate to = "/login" />
  }

  return children;
}

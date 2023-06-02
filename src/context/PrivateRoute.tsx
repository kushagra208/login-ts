import { Navigate } from 'react-router-dom';
import { useState } from "react"

type MyComponentProps = {
  children: React.ReactElement;
};

export const PrivateRoute = ({ children }:MyComponentProps):React.ReactElement => {
  const [email , setEmail] = useState<string>();

  if(!email) {
    return <Navigate to = "/login" />
  }

  return children;
}

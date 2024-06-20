import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export const useAuth = () => {
  const authProviders = useContext(AuthContext);
  return authProviders;
};



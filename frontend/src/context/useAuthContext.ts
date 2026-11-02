import { useContext } from "react";
import { AuthContext } from "./AuthContextValue";

export const useAuthContext = () => useContext(AuthContext);

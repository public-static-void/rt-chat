import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type AuthUserType = {
  id: string;
  fullName: string;
  email: string;
  profilePic: string;
  gender: string;
};

type AuthContextValue = {
  authUser: AuthUserType | null;
  setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextValue>({
  authUser: null,
  setAuthUser: () => {},
  isLoading: true,
});

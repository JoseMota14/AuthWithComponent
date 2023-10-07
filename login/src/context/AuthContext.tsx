import { ReactNode, createContext, useState } from "react";
import { User } from "../models/User";
import { loginService, signUpService } from "../utils/crypto";
import { getData, postData } from "../utils/fetch";

export interface iSignIn {
  username: string;
  password: string;
  oldPassword?: string;
  token?: string;
}

interface iAuthContext {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  token: string;
  auth: boolean;
  loading: boolean;
  signUp: (object: iSignIn) => Promise<void>;
  login: (object: iSignIn) => Promise<void>;
}

const AuthContext = createContext({} as iAuthContext);

interface iAuthProvider {
  children: ReactNode;
}

function AuthProvider({ children }: iAuthProvider) {
  const [user, setUser] = useState<User>({} as User);
  const [tokenUser, setTokenUser] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function signUp(object: iSignIn) {
    setLoading(true);
    const obj = await signUpService(object.password);

    const payload = {
      Username: object.username,
      HashPassword: obj.hashPassword,
      Salt: obj.salt,
    };

    try {
      await postData("/login/signup", payload);

      setLoading(false);
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    setLoading(false);
  }

  async function login(object: iSignIn) {
    const salt = await getData(`/login/Salt/${object.username}`);

    const login = await loginService(object.password, salt);

    const payload = {
      Username: object.username,
      HashPassword: login.hashPassword,
      Salt: salt,
    };

    try {
      const token = await postData("/login/login", payload);

      setLoading(false);
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    setLoading(false);
  }

  async function changePassword() {}

  async function recover() {}

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token: tokenUser,
        loading,
        auth: !!user,
        signUp,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

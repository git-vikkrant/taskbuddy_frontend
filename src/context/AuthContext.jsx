import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || null
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    if (userName) {
      localStorage.setItem("userName", userName);
    } else {
      localStorage.removeItem("userName");
    }
  }, [token, userName]);

  const login = (newToken, name) => {
    setToken(newToken);
    setUserName(name);
  };

  const logout = () => {
    setToken(null);
    setUserName(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, userName, login, logout, isLoggedIn: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

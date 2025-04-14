
import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "../components/ui/sonner";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (username, password) => {
    // Simple authentication with hardcoded credentials
    if (username === "admin" && password === "password123") {
      const userData = { username };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("Login successful!");
      return true;
    } else {
      toast.error("Invalid credentials");
      return false;
    }
  };

  const signup = (username, password) => {
    // For demo purposes, we'll just use the hardcoded admin account
    toast.info("This is a demo. Please use 'admin' and 'password123' to login.");
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
  };

  const value = {
    user,
    isLoading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

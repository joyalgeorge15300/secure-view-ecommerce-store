
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { toast } from "../components/ui/sonner";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get redirect path from location state or default to home
  const from = location.state?.from || "/";
  
  const validate = () => {
    const newErrors = {};
    
    if (!username.trim()) {
      newErrors.username = "Username is required";
    }
    
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        const success = await login(username, password);
        
        if (success) {
          toast.success("Login successful!");
          navigate(from);
        } else {
          toast.error("Invalid credentials. Use 'admin' and 'password123'");
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error("Login failed. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-[#1a2b4d]">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link to="/signup" className="font-medium text-[#00a8a8] hover:text-[#008080]">
              create a new account
            </Link>
          </p>
          <div className="mt-4 bg-yellow-50 border border-yellow-100 rounded-md p-4">
            <p className="text-sm text-yellow-800">
              <strong>Demo Credentials:</strong> Use username "admin" and password "password123" to login.
            </p>
          </div>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (errors.username) {
                      setErrors({
                        ...errors,
                        username: null
                      });
                    }
                  }}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-[#00a8a8] focus:border-[#00a8a8]`}
                  placeholder="Username"
                />
              </div>
              {errors.username && (
                <p className="mt-2 text-sm text-red-600">{errors.username}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) {
                      setErrors({
                        ...errors,
                        password: null
                      });
                    }
                  }}
                  className={`block w-full pl-10 pr-10 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-[#00a8a8] focus:border-[#00a8a8]`}
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-[#00a8a8] focus:ring-[#00a8a8] border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#00a8a8] hover:text-[#008080]">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1a2b4d] hover:bg-[#00a8a8] focus:outline-none transition-colors disabled:bg-gray-400"
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, User, Shield } from "lucide-react";
import fireExtinguisherBg from "../assets/imager1.jpg";

function FormInput({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="relative mb-6">
      <Icon className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="auth-input w-full border-0 border-b border-gray-300 bg-transparent py-3 pl-8 text-sm text-gray-700 placeholder:text-gray-500 focus:border-[#D9534F] focus:outline-none focus:ring-0"
      />
    </div>
  );
}

export default function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const isLogin = mode === "login";

  return (
    <div
      className="flex min-h-svh bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fireExtinguisherBg})` }}
    >
      {/* Left side - Branding */}
      <div className="relative flex-1">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Branding content */}
        <div className="relative z-10 flex flex-col justify-center h-full p-12">
          <div className="text-white max-w-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold">Fire Safety Manager</span>
            </div>

            <h1 className="text-4xl font-bold mb-2">Fire Extinguisher</h1>
            <h2 className="text-4xl font-bold mb-6">Management System</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Comprehensive fire safety equipment tracking and maintenance
              management for your organization
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form area with semi-transparent background */}
      <div className="relative w-[760px] min-h-svh">
        {/* Semi-transparent overlay to make background image subtle */}
        <div className="absolute inset-0 bg-white/75" />

        {/* Form content */}
        <div className="relative z-10 flex flex-col justify-center h-full p-12">
          {/* Welcome heading */}
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">WELCOME!</h1>
          </div>

          {/* Login/Sign Up Button Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`flex-1 py-3 px-6 text-sm font-semibold rounded-lg transition-colors ${
                isLogin
                  ? "bg-white/90 text-gray-800 shadow-sm"
                  : " text-gray-600 bg-white/50"
              }`}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`flex-1 py-3 px-6 text-sm font-semibold rounded-lg transition-colors ${
                !isLogin
                  ? "bg-white/90 text-gray-800 shadow-sm"
                  : " text-gray-600 bg-white/50"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-2">
            {!isLogin && (
              <FormInput
                icon={User}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <FormInput
              icon={Mail}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              icon={Lock}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#D9534F] py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#c9302c] mt-8"
            >
              {isLogin ? "SIGN IN" : "SIGN UP"}
            </button>
          </form>

          {/* Footer links */}
          <div className="mt-8 text-center space-y-2">
            {isLogin && (
              <Link
                to="#"
                className="block text-sm text-[#D9534F] hover:underline"
              >
                Forgot your password?
              </Link>
            )}
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already a member? "}
              <button
                type="button"
                onClick={() => setMode(isLogin ? "signup" : "login")}
                className="text-gray-800 hover:underline font-medium"
              >
                {isLogin ? "Sign Up" : "Log In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

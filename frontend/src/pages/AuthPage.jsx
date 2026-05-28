import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Lock, Mail, TrendingUp, User } from 'lucide-react'

function FormInput({ icon: Icon, type = 'text', placeholder, value, onChange }) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-border bg-input-bg py-3.5 pr-4 pl-11 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-teal focus:bg-card focus:outline-none focus:ring-2 focus:ring-accent-teal/20"
      />
    </div>
  )
}

export default function AuthPage() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('signup')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  const isSignUp = mode === 'signup'

  return (
    <div className="flex min-h-svh">
      {/* Left panel — sidebar color */}
      <div className="relative hidden w-[40%] flex-col justify-between overflow-hidden bg-sidebar p-10 text-white lg:flex">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 h-24 w-24 rotate-45 rounded-lg border-2 border-white" />
          <div className="absolute top-40 right-16 h-16 w-16 rotate-12 rounded-lg border-2 border-white" />
          <div className="absolute bottom-32 left-1/3 h-20 w-20 -rotate-12 rounded-lg border-2 border-white" />
        </div>

        <div className="relative flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
            <TrendingUp className="h-4 w-4 text-brand" />
          </div>
          <span className="text-lg font-semibold">FiinFlow</span>
        </div>

        <div className="relative mx-auto max-w-sm text-center">
          <h1 className="text-4xl font-bold">Welcome Back!</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            To keep connected with us please login with your personal info
          </p>
        </div>

        <div />
      </div>

      {/* Right panel — page bg with white form card */}
      <div className="flex flex-1 items-center justify-center bg-page-bg p-6 sm:p-10">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <h2 className="text-center text-3xl font-bold text-[#243447]">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </h2>

          <div className="mt-6 flex justify-center gap-3">
            {['f', 'G+', 'in'].map((label) => (
              <button
                key={label}
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-xs font-bold text-text-primary transition-colors hover:bg-page-bg"
              >
                {label}
              </button>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-text-muted">
            or use your email for {isSignUp ? 'registration' : 'login'}:
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {isSignUp && (
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
              className="mt-2 w-full rounded-full bg-sidebar py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-sidebar-dark"
            >
              {isSignUp ? 'SIGN UP' : 'SIGN IN'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-text-secondary">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => setMode(isSignUp ? 'signin' : 'signup')}
              className="font-medium text-sidebar hover:underline"
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </button>
          </p>

          <p className="mt-4 text-center lg:hidden">
            <Link to="/dashboard" className="text-sm text-accent-teal hover:underline">
              Continue to dashboard →
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

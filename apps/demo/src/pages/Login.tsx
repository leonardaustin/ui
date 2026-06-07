import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Zap } from "lucide-react";

import {
  AuthCard,
  Button,
  DividerLabel,
  OAuthButton,
  PasswordInput,
  TextInput,
} from "@leonardaustin/ui";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Invalid email address";
    if (!password) next.password = "Password is required";
    setErrors(next);
    if (Object.keys(next).length === 0) navigate("/");
  }

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to your dashboard"
      icon={Zap}
      footer={
        <>
          Don't have an account?{" "}
          <Link to="/register" className="text-accent hover:text-accent-hover">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
          }}
          error={errors.email}
        />

        <PasswordInput
          id="login-password"
          label="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password)
              setErrors((p) => ({ ...p, password: undefined }));
          }}
          error={errors.password}
        />

        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="h-3.5 w-3.5 accent-[var(--accent)]"
            />
            <span className="text-text-secondary text-xs">Remember me</span>
          </label>
          <Link to="#" className="text-accent hover:text-accent-hover text-xs">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" variant="primary" className="mt-2 w-full">
          Sign in
        </Button>
      </form>

      <DividerLabel>Or continue with</DividerLabel>

      <div className="grid grid-cols-2 gap-2">
        <OAuthButton provider="google" />
        <OAuthButton provider="github" />
      </div>
    </AuthCard>
  );
}

import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Check, X, Zap } from "lucide-react";

import {
  AuthCard,
  Button,
  Checkbox,
  cn,
  DividerLabel,
  OAuthButton,
  PasswordInput,
  TextInput,
} from "@leonardaustin/ui";

const passwordRequirements = [
  { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "One lowercase letter", test: (p: string) => /[a-z]/.test(p) },
  { label: "One number", test: (p: string) => /\d/.test(p) },
];

export function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const reqResults = useMemo(
    () => passwordRequirements.map((r) => ({ ...r, met: r.test(password) })),
    [password],
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};

    if (!name.trim()) next.name = "Name is required";
    else if (name.trim().length < 2)
      next.name = "Name must be at least 2 characters";

    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Invalid email address";

    if (!password) next.password = "Password is required";
    else if (!reqResults.every((r) => r.met))
      next.password = "Password does not meet requirements";

    if (!confirmPassword) next.confirmPassword = "Please confirm your password";
    else if (confirmPassword !== password)
      next.confirmPassword = "Passwords do not match";

    if (!termsAccepted) next.terms = "You must accept the terms to continue";

    setErrors(next);
    if (Object.keys(next).length === 0) navigate("/");
  }

  return (
    <AuthCard
      title="Create account"
      subtitle="Get started with your dashboard"
      icon={Zap}
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-accent hover:text-accent-hover">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          label="Full Name"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name)
              setErrors((p) => {
                const n = { ...p };
                delete n.name;
                return n;
              });
          }}
          error={errors.name}
        />

        <TextInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email)
              setErrors((p) => {
                const n = { ...p };
                delete n.email;
                return n;
              });
          }}
          error={errors.email}
        />

        <div className="space-y-2">
          <PasswordInput
            id="register-password"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password)
                setErrors((p) => {
                  const n = { ...p };
                  delete n.password;
                  return n;
                });
            }}
            error={errors.password}
          />
          {password.length > 0 && (
            <div className="space-y-1">
              {reqResults.map((req) => (
                <div key={req.label} className="flex items-center gap-1.5">
                  {req.met ? (
                    <Check className="text-green h-3 w-3" />
                  ) : (
                    <X className="text-text-disabled h-3 w-3" />
                  )}
                  <span
                    className={cn(
                      "text-2xs",
                      req.met ? "text-green" : "text-text-disabled",
                    )}
                  >
                    {req.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <PasswordInput
          id="register-confirm-password"
          label="Confirm Password"
          placeholder="Re-enter your password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (errors.confirmPassword)
              setErrors((p) => {
                const n = { ...p };
                delete n.confirmPassword;
                return n;
              });
          }}
          error={errors.confirmPassword}
        />

        <div className="space-y-1.5">
          <div className="flex items-start gap-2.5">
            <div className="pt-0.5">
              <Checkbox
                checked={termsAccepted}
                onChange={(checked) => {
                  setTermsAccepted(checked);
                  if (errors.terms)
                    setErrors((p) => {
                      const n = { ...p };
                      delete n.terms;
                      return n;
                    });
                }}
              />
            </div>
            <span className="text-text-secondary text-xs leading-relaxed">
              I agree to the{" "}
              <a href="#" className="text-accent hover:text-accent-hover">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-accent hover:text-accent-hover">
                Privacy Policy
              </a>
              {errors.terms && (
                <span className="text-2xs text-red ml-1">— {errors.terms}</span>
              )}
            </span>
          </div>
        </div>

        <Button type="submit" variant="primary" className="mt-2 w-full">
          Create account
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

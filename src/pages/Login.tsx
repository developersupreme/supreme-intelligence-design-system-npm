import { FormEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import {
  AuthForm,
  AuthFormActions,
  AuthFormBody,
  AuthFormDescription,
  AuthFormDivider,
  AuthFormFooter,
  AuthFormHeader,
  AuthFormPrimary,
  AuthFormSubtitle,
  AuthFormTitle,
} from "@/components/ui/authForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  GoogleIcon,
  MicrosoftIcon,
  SupremeIcon,
} from "@/components/ui/Icons";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "../contexts/AuthContext";
import { Footer } from "@/components";

const Login: React.FC = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  const copy = useMemo(
    () =>
      mode === "signup"
        ? {
            title: "Create Account",
            subtitle: "Welcome to Supreme Intelligence.",
            description:
              "Create your account to access powerful, data-driven insights tailored for the life sciences industry.",
            primaryCta: "Create Account",
            footerPrompt: "Already have an account?",
            footerAction: "Sign in",
            socialGoogle: "Continue with Google",
            socialMicrosoft: "Continue with Microsoft",
          }
        : {
            title: "Welcome Back",
            subtitle: "",
            description: "",
            primaryCta: "Log In",
            footerPrompt: "Don't you have an account?",
            footerAction: "Get Started Now",
            socialGoogle: "Log In with Google",
            socialMicrosoft: "Log In with Microsoft",
          },
    [mode]
  );

  const handleSuccess = () => {
    navigate("/");
  };

  const submitAuth = async () => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (mode === "signup") {
        login({
          id: Date.now().toString(),
          email: formValues.email,
          fullName: formValues.fullName,
        });
      } else {
        login({
          id: "demo-user",
          email: formValues.email,
          fullName: "Demo User",
        });
      }

      handleSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formValues.email || !formValues.password) {
      return;
    }

    if (mode === "signup") {
      if (!formValues.fullName.trim()) {
        return;
      }

      if (formValues.password !== formValues.confirmPassword) {
        return;
      }
    }

    await submitAuth();
  };

  const handleModeChange = (nextMode: "login" | "signup") => {
    setMode(nextMode);
  };

  const handleSocialSignIn = async (provider: "google" | "microsoft") => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      login({
        id: `${provider}-${Date.now()}`,
        email: provider === "google" ? "user@gmail.com" : "user@microsoft.com",
        fullName: provider === "google" ? "Google User" : "Microsoft User",
      });

      handleSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-neutral-50 px-4 pt-12">
      <AuthForm className="items-stretch gap-8 text-center">
        <AuthForm.Header className="gap-4">
          <SupremeIcon size={78} />
          <AuthForm.Title>{copy.title}</AuthForm.Title>
          {copy.subtitle ? <AuthFormSubtitle>{copy.subtitle}</AuthFormSubtitle> : null}
          {copy.description ? (
            <AuthFormDescription>{copy.description}</AuthFormDescription>
          ) : null}
        </AuthForm.Header>

        <form className="flex w-full flex-col gap-6" onSubmit={handleSubmit}>
          <AuthFormBody>
            {mode === "signup" && (
              <Input
                label="Name"
                placeholder="Enter your full name"
                value={formValues.fullName}
                onChange={(event) =>
                  setFormValues((prev) => ({
                    ...prev,
                    fullName: event.target.value,
                  }))
                }
                required
              />
            )}
            <Input
              label={mode === "signup" ? "Business Email Address" : "Email Address"}
              type="email"
              placeholder="you@company.com"
              value={formValues.email}
              onChange={(event) =>
                setFormValues((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
              required
            />
            <Input
              label={mode === "signup" ? "New Password" : "Password"}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formValues.password}
              onChange={(event) =>
                setFormValues((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
              required
              minLength={6}
              rightIcon={
                showPassword ? (
                  <EyeSlashIcon
                    className="cursor-pointer text-supreme-blue-700"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <EyeIcon
                    className="cursor-pointer text-supreme-blue-700"
                    onClick={() => setShowPassword(true)}
                  />
                )
              }
            />
            {mode === "signup" && (
              <Input
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                value={formValues.confirmPassword}
                onChange={(event) =>
                  setFormValues((prev) => ({
                    ...prev,
                    confirmPassword: event.target.value,
                  }))
                }
                required
                minLength={6}
                rightIcon={
                  showConfirmPassword ? (
                    <EyeSlashIcon
                      className="cursor-pointer text-supreme-blue-700"
                      onClick={() => setShowConfirmPassword(false)}
                    />
                  ) : (
                    <EyeIcon
                      className="cursor-pointer text-supreme-blue-700"
                      onClick={() => setShowConfirmPassword(true)}
                    />
                  )
                }
              />
            )}
          </AuthFormBody>

          {mode === "login" && (
            <div className="flex items-center justify-between text-sm text-neutral-600">
              <label className="flex items-center gap-2">
                <Checkbox
                  externalState={rememberMe ? "checked" : "unchecked"}
                  onClick={() => setRememberMe((prev) => !prev)}
                  className="h-5 w-5"
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-supreme-blue-700 underline-offset-4 hover:underline"
              >
                Forgot your password?
              </button>
            </div>
          )}

          <AuthFormPrimary>
            <Button
              type="submit"
              variant="primary"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : copy.primaryCta}
            </Button>
          </AuthFormPrimary>

          <AuthFormFooter className="text-sm text-neutral-600">
            <span>
              {copy.footerPrompt}{" "}
              <button
                type="button"
                className="text-supreme-blue-700 underline-offset-4 hover:underline"
                onClick={() => handleModeChange(mode === "signup" ? "login" : "signup")}
              >
                {copy.footerAction}
              </button>
            </span>
          </AuthFormFooter>
        </form>

        <AuthFormDivider className="uppercase tracking-[0.2em] text-neutral-500" />

        <AuthFormActions>
          <Button
            type="button"
            variant="secondary"
            size="xl"
            className="w-full justify-center"
            onClick={() => handleSocialSignIn("google")}
            disabled={isSubmitting}
          >
            <GoogleIcon className="h-6 w-6" />
            {copy.socialGoogle}
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="xl"
            className="w-full justify-center"
            onClick={() => handleSocialSignIn("microsoft")}
            disabled={isSubmitting}
          >
            <MicrosoftIcon className="h-6 w-6" />
            {copy.socialMicrosoft}
          </Button>
        </AuthFormActions>
      </AuthForm>
      <Footer />
    </div>
  );
};

export default Login;

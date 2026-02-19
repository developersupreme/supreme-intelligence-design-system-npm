import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import {
  AuthForm,
  AuthFormBody,
  AuthFormDescription,
  AuthFormHeader,
  AuthFormPrimary,
  AuthFormTitle,
} from "@/components/ui/authForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      // TODO: integrate with password reset endpoint
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 py-12">
      <AuthForm className="items-stretch gap-10 text-center">
        <AuthForm.Header className="w-full gap-6">
          <div className="flex w-full justify-center">
            <Button
              type="button"
              variant="link"
              size="md"
              className="gap-2 px-0 text-supreme-blue-700 hover:text-supreme-blue-900"
              onClick={() => navigate("/login")}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Log In
            </Button>
          </div>
          <AuthForm.Title>Forgot your password?</AuthForm.Title>
          <AuthFormDescription className="text-base text-neutral-600">
            Not to worry. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
          </AuthFormDescription>
        </AuthForm.Header>

        <form className="flex w-full flex-col gap-6" onSubmit={handleSubmit}>
          <AuthFormBody className="gap-6">
            <Input
              label="Email Address"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </AuthFormBody>

          <AuthFormPrimary>
            <Button
              type="submit"
              variant="primary"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </Button>
          </AuthFormPrimary>
        </form>
      </AuthForm>
    </div>
  );
};

export default ForgotPassword;

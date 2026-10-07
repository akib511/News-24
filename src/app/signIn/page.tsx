"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Email + Password Sign In
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      toast.error(error.message);
      return;
    }

    if (data) {
      router.push("/");
      router.refresh();
    }
  };

  // Google Sign In
  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }
  };

  // GitHub Sign In
  const handleGithubSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন ইন</h2>

      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-md">
          <label className="label">ইমেইল</label>

          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
            required
          />

          <label className="label">পাসওয়ার্ড</label>

          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
            required
          />

          {error && (
            <p className="text-sm text-red-600 mt-2">
              {error}
            </p>
          )}

          {/* Email + Password */}
          <button
            type="submit"
            disabled={loading}
            className="btn text-white bg-red-700 mt-4"
          >
            {loading ? "অপেক্ষা করুন..." : "সাইন ইন করুন"}
          </button>

          {/* Google */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn mt-2"
          >
            Google
          </button>

          {/* GitHub */}
          <button
            type="button"
            onClick={handleGithubSignIn}
            className="btn mt-2"
          >
            GitHub
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
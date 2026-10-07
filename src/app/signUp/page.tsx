"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      console.log(data);
      redirect("/");
    }

    if (error) {
      toast.error(error.message ?? "সাইন আপ ব্যর্থ হয়েছে");
      return;
    }
  };

  const handelclickSignUP = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data);
  };

  const handleGithubSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message ?? "GitHub দিয়ে সাইন ইন ব্যর্থ হয়েছে");
      return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন আপ</h2>

      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-md">
          <label className="label">নাম</label>

          <input
            name="name"
            type="text"
            className="input w-md"
            placeholder="Name"
          />

          <label className="label">ImageURL</label>

          <input
            name="image"
            type="url"
            className="input w-md"
            placeholder="Image"
          />

          <label className="label">ইমেইল</label>

          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>

          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button
            type="submit"
            className="btn text-white bg-red-700 mt-4"
          >
            সাইন আপ করুন
          </button>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handelclickSignUP}
              className="btn mt-2"
            >
              Google
            </button>
          </div>

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

export default SignUpPage;
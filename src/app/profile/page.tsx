
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (
    e: React.SubmitEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });

    setShow(false);
  };

  const handleShowForm = () => {
    setShow(!show);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-base-200 px-4 py-10">
      <div className="max-w-3xl mx-auto">

        {/* Profile Card */}
        <div className="bg-base-100 rounded-3xl shadow-xl border border-base-300 overflow-hidden">

          {/* Cover */}
          <div className="h-32 bg-linear-to-r from-primary/80 via-secondary/70 to-accent/70">
          </div>

          {/* Profile Information */}
          <div className="px-6 pb-8">

            {/* Avatar */}
            <div className="-mt-16 flex justify-center">
              <Link href="/profile">
                <div className="avatar">
                  <div className="w-32 h-32 rounded-full ring-4 ring-base-100 shadow-xl">
                    <img
                      src={
                        user?.image ||
                        "https://i.ibb.co/5GzXkwq/user.png"
                      }
                      alt={user?.name || "User profile"}
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* User Info */}
            <div className="text-center mt-4">
              <h1 className="text-3xl font-bold">
                {user?.name || "User"}
              </h1>

              <p className="text-base-content/60 mt-1">
                {user?.email}
              </p>

              <div className="flex justify-center mt-5">
                <button
                  onClick={handleShowForm}
                  className="btn btn-primary rounded-xl px-6"
                >
                  {show ? "Cancel" : "Edit Profile"}
                </button>
              </div>
            </div>

            {/* Edit Profile Form */}
            {show && (
              <div className="mt-8 border-t border-base-300 pt-8">

                <div className="max-w-xl mx-auto">
                  <div className="mb-5">
                    <h2 className="text-2xl font-bold">
                      Edit Profile
                    </h2>

                    <p className="text-sm text-base-content/60 mt-1">
                      Update your profile information below.
                    </p>
                  </div>

                  <form onSubmit={handleUpdateProfile}>
                    <fieldset className="space-y-4">

                      {/* Name */}
                      <div>
                        <label className="label font-semibold">
                          Name
                        </label>

                        <input
                          name="name"
                          type="text"
                          defaultValue={user?.name || ""}
                          className="input input-bordered w-full rounded-xl"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      {/* Image */}
                      <div>
                        <label className="label font-semibold">
                          Profile Image URL
                        </label>

                        <input
                          name="image"
                          type="url"
                          defaultValue={user?.image || ""}
                          className="input input-bordered w-full rounded-xl"
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="btn btn-primary w-full rounded-xl mt-3"
                      >
                        Update Profile
                      </button>

                    </fieldset>
                  </form>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Small Profile Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">

          <div className="bg-base-100 rounded-2xl p-5 border border-base-300 shadow-sm">
            <p className="text-sm text-base-content/50">
              Account Name
            </p>

            <p className="font-semibold mt-1">
              {user?.name || "Not available"}
            </p>
          </div>

          <div className="bg-base-100 rounded-2xl p-5 border border-base-300 shadow-sm">
            <p className="text-sm text-base-content/50">
              Email Address
            </p>

            <p className="font-semibold mt-1 break-all">
              {user?.email || "Not available"}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


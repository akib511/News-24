import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Skeleton */}
        <div className="mb-10">
          <div className="h-9 w-56 animate-pulse rounded-lg bg-zinc-800" />
          <div className="mt-3 h-4 w-80 animate-pulse rounded bg-zinc-900" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#151515]"
            >
              {/* Image */}
              <div className="h-52 w-full animate-pulse bg-zinc-800" />

              {/* Content */}
              <div className="space-y-4 p-5">
                <div className="h-6 w-3/4 animate-pulse rounded bg-zinc-800" />

                <div className="space-y-2">
                  <div className="h-3 w-full animate-pulse rounded bg-zinc-900" />
                  <div className="h-3 w-5/6 animate-pulse rounded bg-zinc-900" />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="h-8 w-20 animate-pulse rounded-lg bg-zinc-800" />
                  <div className="h-8 w-24 animate-pulse rounded-lg bg-zinc-800" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Loading;
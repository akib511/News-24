
import Link from "next/link";
import React from "react";

type News = {
  id: string | number;
  title: string;
};

type ApiResponse = {
  data: News[];
};

const MostRead = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read"
  );

  const data: ApiResponse = await res.json();
  const news = data.data;

  return (
    <div className="pt-6">
      <div className="card border border-gray-300 p-2">
        <h1 className="mx-3 py-4 text-2xl font-bold">
          সর্বাধিক পঠিত
        </h1>

        <div className="mx-3 grid gap-5">
          {news.map((n: News, i: number) => (
            <Link
              key={n.id}
              href={`/news/${n.id}`}
              className="flex items-center gap-3 font-semibold transition-colors hover:text-red-500"
            >
              <p className="font-bold text-red-500">
                {i + 1}
              </p>

              <h2>{n.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostRead;

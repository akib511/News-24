import React from "react";

type News = {
  id: string | number;
  title: string;
};

type ApiResponse = {
  data: News[];
};

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");

  const data: ApiResponse = await res.json();
  const news = data.data;

  console.log(news);

  return (
    <div className="pt-6">
      <div className="card p-2 border border-gray-300">
        <h1 className="font-bold py-4 text-2xl mx-3">সর্বাধিক পঠিত</h1>

        <div className="grid gap-5 mx-3">
          {news.map((n: News, i: number) => (
            <div key={n.id} className="flex gap-3 font-semibold items-center">
              <p className="font-bold text-red-500 ">{i + 1}</p>
              <h2>{n.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostRead;

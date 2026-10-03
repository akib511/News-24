import Image from "next/image";
import React from "react";

interface News {
  id : number;
  title : string;
  description : string;
  imageUrl : string;
  imageAlt : string
}

const MainNews = ({ news }: { news: News[] }) => {
  // main news
  const firstNews = news[0];
  // other news
  const otherNews = news.slice(1);
  console.log(otherNews);

  return (
    <div className="flex gap-6 pt-6 pb-8">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="relative overflow-hidden">
          <Image
            height={600}
            width={600}
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
            className="transition-transform duration-500 hover:scale-110"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      {/* other news */}
      <div className="grid gap-4">
        {otherNews.slice(0, 4).map((newsitem) => (
          <div
            key={newsitem.id}
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-base-100 p-4 shadow-sm transition-all  hover:border-red-400 hover:shadow-lg"
          >
            {/* News content */}
            <div className="min-w-0">
              <h2 className="line-clamp-2 text-lg font-semibold leading-7 text-gray-800 transition-colors duration-300 group-hover:text-red-600">
                {newsitem.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;

import NewsCard from "@/componenets/NewsCard";
import { notFound } from "next/navigation";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const CategoryNews = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );

  const data = await res.json();

  const categoryNews: News[] = data.data;

    if(!categoryNews) {
        notFound()
    }



  return (
    <div className=" mx-8">
     <div className="pb-4">
       <h1 className="text-2xl font-bold border-b-2 border-red-700 py-3">
        {data.title}
      </h1>
     </div>

      <div className="grid grid-cols-3 gap-4">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
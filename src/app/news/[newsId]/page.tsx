import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetails = async ({ params }: { params: { newsId: string } }) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  const data = await res.json();
  const news = data.data;

  if (!news) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      
      {/* News Title */}
      <h1 className="text-4xl font-bold mb-6">
        {news.title}
      </h1>
      {/* <p>{news.description}</p> */}

      {/* News Image */}
      <div className="w-full overflow-hidden rounded-xl mb-8">
        <Image
          height={600}
          width={1200}
          src={news.imageUrl}
          alt={news.imageAlt}
          className="w-full h-auto"
        />
      </div>

      {/* News Content */}
      <p className="text-lg leading-8">
        {news.text}
      </p>

    </div>
  );
};

export default NewsDetails;
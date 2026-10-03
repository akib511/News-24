import Image from "next/image";

interface IArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

interface NewsCardProps {
  news: IArticle;
}

const NewsCard = ({ news }: NewsCardProps) => {
  

  return (
    <div className="card bg-base-100 shadow-sm">
      {/* News Image */}
      <figure className="relative overflow-hidden">
        <Image
          height={600}
          width={600}
          src={news.imageUrl}
          alt={news.imageAlt}
          className="transition-transform duration-500 hover:scale-110"
        />
      </figure>

      {/* News Content */}
      <div className="card-body">
        {/* Category */}
        <h2 className="py-2 font-semibold text-red-500">{news.category}</h2>

        {/* Title */}
        <h2 className="card-title">{news.title}</h2>

        {/* Description */}
        <p>{news.description}</p>

        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default NewsCard;

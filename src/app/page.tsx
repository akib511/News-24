import MainNews from "@/componenets/mainNews";
import MostRead from "@/componenets/MostRead";
import NewsCard from "@/componenets/NewsCard";

// Single news article type
interface IArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

// Other section type
interface IOtherSection {
  title: string;
  curationId: string;
  articles: IArticle[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

  const data = await res.json();

  const sections = data.data;

  // Main news section
  const mainNews = sections[0].articles;

  // Other news sections
  const otherSections: IOtherSection[] = sections.slice(1);

 

  return (
    <div className="grid grid-cols-3 px-6 gap-6">
      {/* News section */}
      <div className="col-span-2">
        {/* Main News */}
        <MainNews news={mainNews} />

        {/* Other News Sections */}
        <div className="grid gap-4">
          {otherSections.map((otherSection) => (
            <div key={otherSection.curationId} className="">
              {/* News content */}
              <div className="min-w-0">
                {/* Section Title */}
                <div className="py-4">
                  <h2 className="border-b-2 border-red-700 pb-3 text-2xl font-bold">
                    {otherSection.title}
                  </h2>
                </div>

                {/* News Cards */}
                <div className="grid grid-cols-3 gap-2">
                  {otherSection.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Most Read Section */}
      <div className="col-span-1">
      <MostRead />
</div>

     
     

    </div>
  );
}

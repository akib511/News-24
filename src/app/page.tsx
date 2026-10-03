import MainNews from "@/componenets/mainNews";





export default async function Home() {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const sections = data.data ;
  const mainNews = sections[0].articles; ;


  return (
    <div className="grid grid-cols-3 px-6">

      {/* News section */}
      <div className=" col-span-2">
       
      <MainNews news = {mainNews} />
      </div>

      {/* most read section */}

      <div className=" bg-green-600 col-span-1 ">

      </div>

    </div>
    
  );
}

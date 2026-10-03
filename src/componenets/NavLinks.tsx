import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = async() => {
  
  const res = await fetch ("https://news-api-v2.vercel.app/api/categories")
  const data = await res.json();
  const navs : Navs[] = data.data;
  const filteredNavs = navs.filter (n => n.scrapable);
   return (
   <div className="flex justify-center gap-6 mt-4 text-lg font-semibold">
  <Link
    href="/"
    className="text-gray-700 hover:text-red-600 transition-colors duration-200"
  >
    হোম
  </Link>

  {filteredNavs.map((n, i) => (
    <Link
      key={i}
      href={n.slug}
      className="text-gray-700 hover:text-red-600 transition-colors duration-200"
    >
      {n.title}
    </Link>
  ))}
</div>
  );
};

export default NavLinks;
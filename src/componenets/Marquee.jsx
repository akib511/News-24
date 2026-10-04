
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=20"
  );

  const data = await res.json();
  const headlines = data.data;

  return (
    <div className="bg-red-600 text-white">
      <div className="flex">
        <div className="bg-red-800 px-5 py-1.5 font-bold">
          সর্বশেষ
        </div>

        <MarqueeText
          duration={11}
          direction="right"
          className="py-1"
        >
          {headlines.map((h) => (
            <span key={h.id}>
              <Link
                href={`/news/${h.id}`}
                className="transition-colors hover:text-yellow-200"
              >
                {h.title}
              </Link>

              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;


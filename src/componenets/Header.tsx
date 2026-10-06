
import Image from "next/image";
import logo from "../../public/logo.webp";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative w-full border-b border-gray-300 py-5">

      {/* Logo + Title + Date - Center */}
      <div className="flex items-center justify-center gap-3">
        <Image
          src={logo}
          alt="Bangla News 24"
          width={60}
          height={60}
          className="h-15 w-15 rounded-2xl"
        />

        <div>
          <h1 className="text-4xl font-bold text-red-700">
            Bangla News 24
          </h1>

          <p className="text-sm text-gray-600">
            {date}
          </p>
        </div>
      </div>

      
      <UserInfo />

      <NavLinks />
    </header>

  );
};

export default Header;


import { useEffect } from "react";
import { useState } from "react";

const HEADER_ITEMS = ["about", "project", "experience", "contact"];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex items-center justify-center w-full sticky top-10">
      <div className="flex gap-5 py-4 px-5 bg-gray-900 shadow-md border border-gray-800 rounded-full">
        {HEADER_ITEMS.map(item => (
          <a key={item} href={`#${item}`} className="capitalize text-gray-100 lg:tracking-wider">
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;

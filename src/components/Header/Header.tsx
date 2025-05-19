const HEADER_ITEMS = ["about", "project", "experience", "contact"];

const Header = () => {
  return (
    <header className="fixed top-10 z-50 w-full flex justify-center items-center">
      <div className="flex gap-6 px-3 py-3 bg-background/60 border backdrop-blur-xs backdrop-saturate-150 rounded-full shadow-md md:px-6">
        {HEADER_ITEMS.map(item => (
          <a
            key={item}
            href={`#${item}`}
            aria-label={`Go to ${item} section`}
            className="capitalize font-semibold text-sm sm:text-base text-foreground hover:text-secondary focus:text-primary focus:ring-0 transition-colors duration-150 tracking-wide"
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;

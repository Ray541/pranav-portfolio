const HEADER_ITEMS = ["about", "project", "experience", "contact"];

const Header = () => {
  return (
    <header className="fixed top-6 z-50 w-full flex justify-center items-center">
      <div className="flex gap-6 px-3 py-3 bg-background/60 border border-border backdrop-blur-md backdrop-saturate-150 rounded-full shadow-md transition-all duration-300">
        {HEADER_ITEMS.map(item => (
          <a
            key={item}
            href={`#${item}`}
            className="capitalize font-semibold text-sm lg:text-base text-foreground hover:text-primary focus:text-primary transition-colors duration-200 tracking-wide"
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;

const HEADER_ITEMS = ["about", "project", "experience", "contact"];

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full fixed top-10 z-10">
      <div className="flex gap-5 py-4 px-5 bg-background/70 border border-border bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-full">
        {HEADER_ITEMS.map(item => (
          <a
            key={item}
            href={`#${item}`}
            className="capitalize font-bold text-foreground lg:tracking-wider transition-all duration-200"
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;

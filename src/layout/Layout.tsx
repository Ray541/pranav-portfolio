import Header from "@/components/Header/Header";
import { ModeToggle } from "@/components/mode-toggle";
import { Main } from "./Main/Main";
import Home from "@/components/Home/Home";

const Layout = () => {
  return (
    <>
      <Header />
      <ModeToggle className="absolute bottom-10 right-10 rounded-full" />
      <Main>
        <Home />
      </Main>
    </>
  );
};

export default Layout;

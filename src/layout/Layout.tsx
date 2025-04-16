import Header from "@/components/Header/Header";
import { Main } from "./Main/Main";
import Home from "@/components/Home/Home";

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
    </>
  );
};

export default Layout;

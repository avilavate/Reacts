import { Header, Footer } from "./component/index";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;

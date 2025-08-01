import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Layout: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  )
};

export default Layout;
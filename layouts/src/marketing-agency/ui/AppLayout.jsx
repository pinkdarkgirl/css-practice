// rrd imports
import { Outlet } from "react-router-dom";

// component imports
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;

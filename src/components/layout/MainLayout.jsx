import Home from "../../pages/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div>
        <Navbar />
        <Home />
        <Footer />
    </div>
  )
}

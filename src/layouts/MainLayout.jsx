import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

 function MainLayout({ children }) {
  return (
    <div className="bg-[#F5F1E8] text-[#2A4A3A]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function MainLayout({ children }) {
  return (
    <div className="bg-[#F5F1E8] text-[#2A4A3A] overflow-x-hidden min-h-screen">
      <Navbar />

      {/* Prevent content overflow */}
      <main className="w-full overflow-x-hidden">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Header />

      <main className="flex-grow container mx-auto my-4 px-4 min-h-screen">
        {children}
      </main>

      <Footer />
    </div>
  );
}

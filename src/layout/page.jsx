import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export default function Page({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

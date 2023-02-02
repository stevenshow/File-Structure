import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export default function Page({ children }) {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

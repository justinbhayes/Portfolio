import Header from "./Header";
import Footer from "./Footer";

function Layout({ intro, children }) {
  return (
    <>
      <Header />
      <div id="mainTop"></div>
      <main className="main">
        <section className="intro">{intro}</section>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;

import Header from "./Header";
import Testimonials from "./Testimonials";
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
      <Testimonials />
      <Footer />
    </>
  );
}

export default Layout;

import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { routeSeo } from "../data/seoData";

function NotFoundPage() {
  return (
    <>
      <Seo {...routeSeo.notFound} />
      <Layout intro="Oops! The page you are looking for has been moved or is no longer available.">
        <section className="wideBody panel-elevated">
          <h1 className="page-title">Page Not Found</h1>
          <p className="fourOfour">
            Use the navigation menu to find the page you are looking for or
            return to the <Link to="/">homepage</Link>.
          </p>
        </section>
      </Layout>
    </>
  );
}

export default NotFoundPage;

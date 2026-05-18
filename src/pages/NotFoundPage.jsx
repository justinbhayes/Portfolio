import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you requested could not be found. Browse available pages on justinbhayes.com."
        path="/404"
        image=""
        noindex
      />
      <Layout intro="Oops! The page you are looking for has been moved or is no longer available.">
        <section className="wideBody panel-elevated">
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

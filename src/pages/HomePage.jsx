import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function HomePage() {
  useEffect(() => {
    document.title = "Web Developer Portfolio | Justin B Hayes";
  }, []);

  return (
    <Layout
      intro={
        <>
          Welcome to my portfolio website!
          <br />
          <br />
          I&apos;m a web manager and front-end team lead with 19+ years of
          hands-on experience and 8 years leading development teams. I help
          organizations manage and improve their web presence end-to-end, from
          roadmap and experimentation to Agile delivery, team leadership, and
          front-end execution.
          <br />
          <br />I care deeply about performance, accessibility, best practices
          and SEO. (
          <a
            href="https://pagespeed.web.dev/analysis/https-justinbhayes-com/ouysta97qq?form_factor=mobile"
            target="_blank"
            rel="noreferrer"
            aria-label="View latest Lighthouse mobile report on PageSpeed Insights"
          >
            View latest Lighthouse mobile report
          </a>
          )
        </>
      }
    >
      <section className="wideBody panel-elevated">
        <h1 className="page-title">
          Web Manager and Development Team Lead (Front-End Focus)
        </h1>
        <p>
          I partner with organizations that need technical leadership backed by
          hands-on execution, from modernizing legacy CMS and front-end stacks
          to improving component architecture, page performance, accessibility,
          and release workflows. I help teams reduce technical debt, establish
          stronger development standards, and ship more reliable web
          experiences.
        </p>
        <p>
          I am currently open to opportunities in website management, front-end
          leadership, developer-focused team environments, and as a freelance
          developer.
        </p>
        <div className="homeActions">
          <Link className="homeActionLink" to="/portfolio/">
            View Portfolio
          </Link>
          <Link className="homeActionLink" to="/contact/">
            Contact Me
          </Link>
          <a
            className="homeActionLink"
            href="https://www.linkedin.com/in/justinbhayes/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>

      <section className="homeColumns">
        <section className="thinBody panel-elevated">
          <h2>What I Help With</h2>
          <ul className="square">
            <li>
              Improve accessibility so websites are easier to use and more
              inclusive.
            </li>
            <li>
              Strengthen technical SEO through cleaner markup, metadata, site
              structure, and crawlability.
            </li>
            <li>
              Turn analytics and experimentation into clearer performance
              insights and better decisions.
            </li>
            <li>
              Align design, marketing, and engineering around measurable
              outcomes.
            </li>
          </ul>
        </section>

        <section className="thinBody panel-elevated">
          <h2>How I Work</h2>
          <ul className="square">
            <li>
              Prioritize the highest-impact work across business, user, and
              technical needs.
            </li>
            <li>Run predictable Agile delivery from planning to launch.</li>
            <li>
              Support teams with coaching, standards, and clearer delivery.
            </li>
            <li>
              Build quality in through standards, QA, and release discipline.
            </li>
            <li>
              Stay hands-on in front-end execution while setting direction.
            </li>
            <li>
              Use testing, analytics, and iteration to keep improving over time.
            </li>
          </ul>
        </section>
      </section>
    </Layout>
  );
}

export default HomePage;

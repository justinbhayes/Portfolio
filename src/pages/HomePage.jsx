import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function HomePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Justin B Hayes",
      url: "https://justinbhayes.com/",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Justin B Hayes",
      url: "https://justinbhayes.com/",
      jobTitle:
        "Website Manager, Development Team Lead, and Front-End Developer",
      sameAs: [
        "https://www.linkedin.com/in/justinbhayes",
        "https://github.com/justinbhayes",
        "https://x.com/justinbhayes",
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Web Developer Portfolio"
        description="Justin B Hayes is a front-end developer and website manager specializing in React, modernizing legacy platforms, and building performant, accessible web experiences."
        path="/"
        image="/assets/i/justin.webp"
        structuredData={structuredData}
        preloadImage={true}
      />
      <Layout
        intro={
          <>
            Welcome to my portfolio website!
            <br />
            <br />
            I&apos;m a web manager and front-end team lead with 19+ years of
            hands-on experience and 5+ years leading development teams. I help
            organizations manage and improve their web presence end-to-end, from
            roadmap and experimentation to Agile delivery, team leadership, and
            front-end execution.
            <br />
            <br />I care deeply about performance, accessibility, and teams that
            ship work they&apos;re proud of.
          </>
        }
      >
        <section className="wideBody panel-elevated">
          <h2>Web Manager and Development Team Lead (Front-End Focus)</h2>
          <p>
            I partner with organizations that need technical leadership backed
            by hands-on execution, from modernizing legacy CMS and front-end
            stacks to improving component architecture, page performance,
            accessibility, and release workflows. I help teams reduce technical
            debt, establish stronger development standards, and ship more
            reliable web experiences.
          </p>
          <p>
            I am currently open to opportunities in website management,
            front-end leadership, developer-focused team environments, and as a
            freelance developer.
          </p>
          <div className="homeActions">
            <Link className="homeActionLink" to="/portfolio">
              View Portfolio
            </Link>
            <Link className="homeActionLink" to="/contact">
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
                I improve accessibility so websites are easier to use and more
                inclusive.
              </li>
              <li>
                I strengthen technical SEO through cleaner markup, metadata,
                site structure, and crawlability.
              </li>
              <li>
                I turn analytics and experimentation into clearer performance
                insights and better decisions.
              </li>
              <li>
                I align design, marketing, and engineering around measurable
                outcomes.
              </li>
              <li>
                I support teams with coaching, standards, and clearer delivery.
              </li>
            </ul>
          </section>

          <section className="thinBody panel-elevated">
            <h2>How I Work</h2>
            <ul className="square">
              <li>
                I prioritize the highest-impact work across business, user, and
                technical needs.
              </li>
              <li>I run predictable Agile delivery from planning to launch.</li>
              <li>
                I build quality in through standards, QA, and release
                discipline.
              </li>
              <li>
                I stay hands-on in front-end execution while setting direction.
              </li>
              <li>
                I use testing, analytics, and iteration to keep improving over
                time.
              </li>
            </ul>
          </section>
        </section>
      </Layout>
    </>
  );
}

export default HomePage;

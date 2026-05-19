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
        "https://twitter.com/justinbhayes",
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Web Developer Portfolio"
        description="Justin B Hayes is a front-end developer and website manager specializing in React, modernizing legacy platforms, and building performant, accessible web experiences."
        path="/"
        image="/assets/i/justin.jpg"
        structuredData={structuredData}
      />
      <Layout
        intro={
          <>
            Welcome to my portfolio website!
            <br />
            <br />
            I&apos;m a web manager and front-end team lead with 19+ years of
            hands-on experience and 5+ years leading development teams. I
            specialize in owning a company&apos;s web presence end-to-end
            &mdash; from roadmap and A/B experimentation to Agile delivery, team
            leadership, and code deployments &mdash; while staying close to the
            front end with HTML, CSS, and JavaScript.
            <br />
            <br />I care deeply about performance, accessibility, and teams that
            ship work they&apos;re proud of.
          </>
        }
      >
        <section className="wideBody panel-elevated">
          <h2>Web Manager and Development Team Lead (Front-End Focus)</h2>
          <p>
            I partner with organizations that need practical leadership and
            hands-on execution, from legacy platform modernization to front-end
            architecture improvements.
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
                I own website strategy, execution, and measurable performance.
              </li>
              <li>
                I grow teams through coaching, standards, and clear delivery.
              </li>
              <li>
                I modernize websites to reduce debt and boost performance.
              </li>
              <li>
                I align design, marketing, and engineering around outcomes.
              </li>
            </ul>
          </section>

          <section className="thinBody panel-elevated">
            <h2>How I Work</h2>
            <ul className="square">
              <li>
                I prioritize high-impact work across business, users, and tech.
              </li>
              <li>I run predictable Agile delivery from plan to launch.</li>
              <li>
                I raise quality through architecture, QA, and release rigor.
              </li>
              <li>
                I stay hands-on in front-end execution while setting direction.
              </li>
              <li>
                I use experiments and data to drive continuous improvement.
              </li>
            </ul>
          </section>
        </section>
      </Layout>
    </>
  );
}

export default HomePage;

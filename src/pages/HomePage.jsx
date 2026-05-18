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
            I&apos;m a passionate, detailed oriented and self-taught front-end
            web developer with over 19 years&apos; of experience writing HTML,
            CSS and JavaScript to build and maintain websites and applications.
            I specialize in mobile-first, responsive website design with a focus
            on performance, UX, accessibility and search engine optimization.
            <br />
            <br />
            I&apos;m an accountable leader and strong communicator with over 5
            years&apos; experience managing and empowering a team of developers
            and other technical roles.
          </>
        }
      >
        <section className="wideBody panel-elevated">
          <h2>
            Website Manager, Development Team Lead, and Front-End Developer
          </h2>
          <p>
            I partner with organizations that need practical leadership and
            hands-on execution, from legacy platform modernization to front-end
            architecture improvements.
          </p>
          <p>
            I am currently open to opportunities in web management, front-end
            leadership, developer-focused team environments, and as a freelancer
            developer.
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
                Legacy modernization: upgrading older sites to modern frameworks
                while preserving business-critical workflows.
              </li>
              <li>
                Team delivery: improving communication, code quality, and
                release confidence across projects.
              </li>
              <li>
                UX and performance: building clean, fast interfaces that are
                easier for users and stakeholders to trust.
              </li>
            </ul>
          </section>

          <section className="thinBody panel-elevated">
            <h2>How I Work</h2>
            <ul className="square">
              <li>
                Outcome-focused planning aligned to user needs and business
                priorities.
              </li>
              <li>
                Maintainable front-end architecture with React, Bootstrap/SCSS,
                and clear component boundaries.
              </li>
              <li>
                Collaboration-first approach with designers, developers, and
                stakeholders.
              </li>
            </ul>
          </section>
        </section>
      </Layout>
    </>
  );
}

export default HomePage;

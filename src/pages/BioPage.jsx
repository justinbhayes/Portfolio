import Layout from "../components/Layout";
import Seo from "../components/Seo";

function BioPage() {
  return (
    <>
      <Seo
        title="About Justin"
        description="Learn more about Justin B Hayes — web manager, front-end team lead, and developer with 19+ years of experience owning web operations and leading development teams."
        path="/bio"
        image="/assets/i/justin.webp"
      />
      <Layout intro="Learn more about my background, the work I’ve done, and where I’m headed next.">
        <section className="wideBody panel-elevated">
          <h2>About Me</h2>
          <p>
            I&apos;m a web manager and front-end team lead with 19+ years of
            hands-on experience building and managing websites. I&apos;ve spent
            the last several years owning entire web operations &mdash; from
            roadmap strategy and A/B experimentation to team leadership and
            deployments &mdash; while staying close to the front end with HTML,
            CSS, and JavaScript. I&apos;m a self-taught developer who built a
            strong technical foundation and grew into a leader who builds
            collaborative, high-performing teams.
          </p>
        </section>

        <section className="wideBody panel-elevated">
          <h2>Recent Work Experience</h2>
          <h3>Web Manager &mdash; Sense</h3>
          <p className="position-details">
            Cambridge, MA &middot; October 2023 &ndash; December 2025
          </p>
          <ul className="square">
            <li>
              Provided technical direction for a company-wide WordPress website
              rebuild, partnering with designers to create a modern design
              system built on web standards.
            </li>
            <li>
              Owned the full web roadmap &mdash; managing all projects, site
              integrations, reporting, and KPIs end-to-end.
            </li>
            <li>
              Drove continuous improvement through structured A/B
              experimentation, writing hypotheses and translating test results
              into actionable site changes.
            </li>
            <li>
              Managed all website content and served as the primary technical
              stakeholder for web decisions.
            </li>
          </ul>
          <h3>Team Lead, Website Experience &mdash; Nextiva</h3>
          <p className="position-details">
            Scottsdale, AZ &middot; March 2021 &ndash; October 2023
          </p>
          <ul className="square">
            <li>
              Led and mentored a team of 5 web developers across all active
              projects, overseeing Agile delivery from planning and
              prioritization through code deployment and release.
            </li>
            <li>
              Established shared development standards and a collaborative team
              culture that reduced tech debt and improved code quality across
              the organization.
            </li>
            <li>
              Drove infrastructure improvements for SEO and accessibility,
              setting and enforcing a minimum Lighthouse score of 90 across all
              pages.
            </li>
            <li>
              Managed all code deployments and the team&apos;s QA process,
              ensuring consistent release quality and stakeholder confidence.
            </li>
            <li>
              Collaborated with designers to deliver polished, high-performance
              digital experiences aligned with business priorities.
            </li>
          </ul>
        </section>

        <section className="homeColumns">
          <section className="thinBody panel-elevated">
            <h2>Future Career Goals</h2>
            <ul className="square">
              <li>
                Own a company&apos;s web presence end-to-end &mdash; leading
                strategy, managing the team, and staying hands-on with the front
                end.
              </li>
              <li>
                Build and mentor engineering teams that consistently ship
                performant, accessible, and well-crafted web experiences.
              </li>
              <li>
                Continue leveraging AI tools to improve team workflows and the
                speed and quality of web delivery.
              </li>
            </ul>
          </section>

          <section className="thinBody panel-elevated">
            <h2>Personal Interests</h2>
            <ul className="square">
              <li>Staying active in broomball and softball.</li>
              <li>Cheering on the Minnesota Twins, Wild, and Vikings.</li>
              <li>Riding my motorcycle on sunny days.</li>
              <li>Deer hunting in the fall.</li>
            </ul>
          </section>
        </section>
      </Layout>
    </>
  );
}

export default BioPage;

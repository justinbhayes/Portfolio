import Layout from "../components/Layout";

function BioPage() {
  return (
    <Layout intro="Below you can view professional and personal interests I have.">
      <section className="wideBody panel-elevated">
        <h2>About Me</h2>
        <p>
          I originally began learning HTML with the aim of creating personal
          websites for myself and my friends. I quickly found a passion and an
          ambition for a career. I pursued learning web technologies such as
          CSS, XHTML and eventually scripting/programming languages such as
          JavaScript and PHP. I have also been working with Adobe Photoshop for
          several years and am capable of optimizing supplied graphics for the
          websites I produce.
        </p>
      </section>

      <section className="homeColumns">
        <section className="thinBody panel-elevated">
          <h2>Future Career Goals</h2>
          <ul className="square">
            <li>
              Continue to develop my knowledge in JavaScript frameworks such as
              React, Angular and Vue.js to create more interactive web pages.
            </li>
            <li>
              Continue to learn how to leverage AI tools to improve my workflow
              and the quality of my work.
            </li>
          </ul>
        </section>

        <section className="thinBody panel-elevated">
          <h2>Personal Interests</h2>
          <ul className="square">
            <li>Staying active in broomball, softball, hockey, and tennis.</li>
            <li>Listening to music.</li>
            <li>Cheering on Minnesota Twins and Vikings teams.</li>
          </ul>
        </section>
      </section>
    </Layout>
  );
}

export default BioPage;

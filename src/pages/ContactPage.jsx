import { useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../styles/bootstrap-theme.scss";

// Initialize EmailJS
// Get your credentials from https://dashboard.emailjs.com/
// PUBLIC_KEY can be found in Account > API Keys
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");

const initialForm = {
  name: "",
  email: "",
  subject: "General Inquiry",
  message: "",
};

function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send email using EmailJS
      // You need to set up a template in EmailJS dashboard
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          to_email: "justin@justinbhayes.com",
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
      );
      setNote("Thanks for your message. I'll get back to you soon!");
      setFormData(initialForm);
    } catch (err) {
      console.error("Email send error:", err);
      setError(
        "Sorry, there was an issue sending your message. Please try again.",
      );
      setNote("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Contact Justin B Hayes about front-end development, web management, freelance work, and collaboration opportunities."
        path="/contact"
        image="/assets/i/justin.webp"
      />
      <Layout intro="If you have any questions or comments, feel free to use the form below to contact me.">
        <section className="wideBody panel-elevated">
          <h1 className="page-title">Contact Me</h1>
          {note && (
            <div id="note" className="notification_ok">
              {note}
            </div>
          )}
          {error && (
            <div id="error" className="notification_error">
              {error}
            </div>
          )}
          <div id="fields" className="container-fluid p-0">
            <form onSubmit={onSubmit}>
              <fieldset className="border-0 m-0 p-0">
                <legend className="visually-hidden">Contact form</legend>

                <div className="row g-md-3 align-items-start">
                  <div className="col-12 col-md-4">
                    <label
                      htmlFor="name"
                      className="form-label d-block mb-0 py-2 text-md-end"
                    >
                      Name:
                    </label>
                  </div>
                  <div className="col-12 col-md-4 me-4">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      value={formData.name}
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <label
                      htmlFor="email"
                      className="form-label d-block mb-0 py-2 text-md-end"
                    >
                      Email:
                    </label>
                  </div>
                  <div className="col-12 col-md-4 me-4">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      value={formData.email}
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <label
                      htmlFor="subject"
                      className="form-label d-block mb-0 py-2 text-md-end"
                    >
                      Subject:
                    </label>
                  </div>
                  <div className="col-12 col-md-4 me-4">
                    <select
                      id="subject"
                      name="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={onChange}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Request a Quote">Request a Quote</option>
                      <option value="Report a Bug">Report a Bug</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-4">
                    <label
                      htmlFor="message"
                      className="form-label d-block mb-0 py-2 text-md-end"
                    >
                      Message:
                    </label>
                  </div>
                  <div className="col-12 col-md-4 me-4">
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className="form-control"
                      value={formData.message}
                      onChange={onChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 col-md-8 offset-md-4">
                    <button
                      name="submit"
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default ContactPage;

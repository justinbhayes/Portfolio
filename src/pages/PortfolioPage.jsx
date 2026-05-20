import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { portfolioItems } from "../data/siteContent";

function PortfolioPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeItem = portfolioItems[activeIndex];

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % portfolioItems.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? portfolioItems.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % portfolioItems.length);
  };

  const isInternalPlaceholder = activeItem.href === "#";

  return (
    <>
      <Seo
        title="Portfolio"
        description="Browse recent web projects by Justin B Hayes, including consulting websites and interactive React applications."
        path="/portfolio"
        image="/assets/i/product-finder.webp"
      />
      <Layout intro="Below you can view the portfolio of my most recent work.">
        <section className="wideBody panel-elevated">
          <h2>My Portfolio</h2>
          <div
            className="portfolio-carousel jcarousel-skin-tango"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <ul id="mycarousel">
              <li key={activeItem.title}>
                <div className="content-column">
                  <h3>{activeItem.title}</h3>
                  <p>{activeItem.description}</p>
                  <p>{activeItem.dates}</p>
                  <p>
                    <a
                      href={activeItem.href}
                      target={isInternalPlaceholder ? undefined : "_blank"}
                      rel={isInternalPlaceholder ? undefined : "noreferrer"}
                      title={activeItem.title}
                      onClick={(event) => {
                        if (isInternalPlaceholder) {
                          event.preventDefault();
                        }
                      }}
                    >
                      Visit Website
                    </a>
                  </p>
                </div>
                <div className="image-column">
                  <a
                    href={activeItem.href}
                    target={isInternalPlaceholder ? undefined : "_blank"}
                    rel={isInternalPlaceholder ? undefined : "noreferrer"}
                    title={activeItem.title}
                    onClick={(event) => {
                      if (isInternalPlaceholder) {
                        event.preventDefault();
                      }
                    }}
                  >
                    <img
                      src={activeItem.image}
                      width="300"
                      height="227"
                      alt={activeItem.title}
                      className="thumb"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </div>
                {activeItem.testimonial ? (
                  <div className="portfolio-testimonial">
                    <p className="portfolio-testimonial-quote">
                      &ldquo;{activeItem.testimonial.quote}&rdquo;
                    </p>
                    <p className="portfolio-testimonial-meta">
                      {activeItem.testimonial.author}
                      <br />
                      {activeItem.testimonial.company}
                      <br />
                      {activeItem.testimonial.position}
                    </p>
                  </div>
                ) : null}
              </li>
            </ul>

            <div className="portfolio-controls" aria-label="Portfolio controls">
              <button
                id="mycarousel-prev"
                type="button"
                className="jcarousel-prev-horizontal"
                onClick={showPrev}
                aria-label="Previous project"
              >
                <FaChevronLeft aria-hidden="true" />
              </button>

              <button
                id="mycarousel-next"
                type="button"
                className="jcarousel-next-horizontal"
                onClick={showNext}
                aria-label="Next project"
              >
                <FaChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            className="portfolio-dots"
            role="tablist"
            aria-label="Portfolio items"
          >
            {portfolioItems.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`slider-dot ${index === activeIndex ? "is-active" : ""}`.trim()}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${item.title}`}
                aria-selected={index === activeIndex}
                role="tab"
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export default PortfolioPage;

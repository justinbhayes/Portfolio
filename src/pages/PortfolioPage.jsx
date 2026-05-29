import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { portfolioItems } from "../data/siteContent";

function ChevronLeftIcon(props) {
  return (
    <svg viewBox="0 0 320 512" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M34.5 239l194.3-194.3c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L131.5 256l153.8 154.8c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L34.5 273c-9.4-9.4-9.4-24.6 0-34z"
      />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 320 512" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M285.5 273L91.2 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9L188.5 256 34.7 101.2c-9.4-9.4-9.4-24.6 0-33.9L57.3 44.7c9.4-9.4 24.6-9.4 33.9 0L285.5 239c9.4 9.4 9.4 24.6 0 34z"
      />
    </svg>
  );
}

function PortfolioPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isEnhancementsReady, setIsEnhancementsReady] = useState(false);
  const activeItem = portfolioItems[activeIndex];

  useEffect(() => {
    document.title = "Portfolio | Justin B Hayes";
  }, []);

  useEffect(() => {
    const enableEnhancements = () => setIsEnhancementsReady(true);

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(enableEnhancements, {
        timeout: 1200,
      });

      return () => window.cancelIdleCallback(idleId);
    }

    const timer = window.setTimeout(enableEnhancements, 300);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isEnhancementsReady || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % portfolioItems.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isEnhancementsReady, isPaused]);

  const showPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? portfolioItems.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % portfolioItems.length);
  };

  const isInternalPlaceholder = activeItem.href === "#";
  const isInitialLcpCandidate = activeIndex === 0;

  return (
    <Layout intro="Below you can view the portfolio of my most recent work.">
      <section className="wideBody panel-elevated">
        <h1 className="page-title">My Portfolio</h1>
        <div
          className="portfolio-carousel jcarousel-skin-tango"
          onMouseEnter={
            isEnhancementsReady ? () => setIsPaused(true) : undefined
          }
          onMouseLeave={
            isEnhancementsReady ? () => setIsPaused(false) : undefined
          }
          onFocusCapture={
            isEnhancementsReady ? () => setIsPaused(true) : undefined
          }
          onBlurCapture={
            isEnhancementsReady ? () => setIsPaused(false) : undefined
          }
        >
          <ul id="mycarousel">
            <li key={activeItem.title}>
              <div className="content-column">
                <h2>{activeItem.title}</h2>
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
                    src={activeItem.image.src}
                    srcSet={activeItem.image.srcSet}
                    sizes={activeItem.image.sizes}
                    width={activeItem.image.width}
                    height={activeItem.image.height}
                    alt={activeItem.title}
                    className="thumb"
                    loading={isInitialLcpCandidate ? "eager" : "lazy"}
                    fetchPriority={isInitialLcpCandidate ? "high" : "auto"}
                    decoding={isInitialLcpCandidate ? "sync" : "async"}
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

          {isEnhancementsReady ? (
            <div className="portfolio-controls" aria-label="Portfolio controls">
              <button
                id="mycarousel-prev"
                type="button"
                className="jcarousel-prev-horizontal"
                onClick={showPrev}
                aria-label="Previous project"
              >
                <ChevronLeftIcon />
              </button>

              <button
                id="mycarousel-next"
                type="button"
                className="jcarousel-next-horizontal"
                onClick={showNext}
                aria-label="Next project"
              >
                <ChevronRightIcon />
              </button>
            </div>
          ) : null}
        </div>

        {isEnhancementsReady ? (
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
        ) : null}
      </section>
    </Layout>
  );
}

export default PortfolioPage;

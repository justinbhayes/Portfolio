import { useEffect, useState } from "react";
import { testimonials } from "../data/siteContent";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div id="bottom">
      <div className="content">
        <h3>Testimonials</h3>
        <div id="items_container" aria-live="polite">
          {testimonials.map((item, index) => (
            <div
              key={`testimonial-${index}`}
              className={`slide_item ${index === activeIndex ? "is-active" : ""}`.trim()}
            >
              <div className="wrap">
                <p>&ldquo;{item.quote}&rdquo;</p>
                {item.author ? (
                  <span>
                    {item.author}
                    <br />
                    {item.company}
                    <br />
                    {item.position}
                  </span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div
          className="slider-dots"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {testimonials.map((item, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={`slider-dot ${index === activeIndex ? "is-active" : ""}`.trim()}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-selected={index === activeIndex}
              role="tab"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

'use client';

import { useState } from 'react';

interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
  ctaText?: string;
}

interface FeaturesSectionProps {
  heading: string;
  features: Feature[];
}

export function FeaturesSection({ heading, features }: FeaturesSectionProps) {
  const [openItemId, setOpenItemId] = useState<number | null>(0);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-heading">{heading}</h2>

        <div className="accordion">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`accordion-item ${openItemId === feature.id ? 'open' : ''}`}
            >
              <div className="accordion-number">{feature.number}</div>

              <div className="accordion-content">
                <button
                  className="accordion-title"
                  onClick={() => toggleItem(feature.id)}
                  type="button"
                  aria-expanded={openItemId === feature.id}
                >
                  <span>{feature.title}</span>
                  <span className="accordion-toggle" aria-hidden="true">
                    +
                  </span>
                </button>

                <div className="accordion-description">
                  <p className="accordion-description-text">{feature.description}</p>

                  {feature.ctaText && (
                    <div className="accordion-cta">
                      <a href="#" className="accordion-link">
                        [ {feature.ctaText} ]
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

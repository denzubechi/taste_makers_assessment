'use client';

import { useState } from 'react';
import graphicImage from '/featureSec.png';

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
  const [openItemId, setOpenItemId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-left-column">
          <h2 className="features-heading">{heading}</h2>

          <div className="accordion">
            {features.map((feature) => {
              const isOpen = openItemId === feature.id;
              return (
                <div
                  key={feature.id}
                  className={`accordion-item ${isOpen ? 'open' : ''}`}
                >
                  <div className="accordion-header-row">
                    <div className="accordion-number">{feature.number}</div>

                    <div className="accordion-content-wrapper">
                      <button
                        className="accordion-title-btn"
                        onClick={() => toggleItem(feature.id)}
                        type="button"
                        aria-expanded={isOpen}
                      >
                        <span>{feature.title}</span>
                        <span className="accordion-toggle-icon" aria-hidden="true">
                          {isOpen ? '—' : '+'}
                        </span>
                      </button>

                      <div className="accordion-description-panel">
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
                </div>
              );
            })}
          </div>
        </div>

        <div className="features-right-column">
          <div className="features-graphic-wrapper">
            <img 
              src={graphicImage.src || graphicImage} 
              alt="AI Infrastructure Layer Diagram" 
              className="features-graphic-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
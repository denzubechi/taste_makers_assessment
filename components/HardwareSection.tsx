'use client';

interface HardwareProduct {
  id: number;
  name: string;
  description: string;
  progressColor?: string;
  progressWidth?: number;
}

interface HardwareSectionProps {
  heading: string;
  description: string;
  products: HardwareProduct[];
}

export function HardwareSection({
  heading,
  description,
  products,
}: HardwareSectionProps) {
  return (
    <section className="hardware-section">
      <div className="hardware-container">
        <div className="hardware-header">
          <div>
            <h2 className="hardware-title">{heading}</h2>
          </div>
          <div>
            <p className="hardware-description">{description}</p>
          </div>
        </div>

        <div className="hardware-grid">
          {products.map((product) => (
            <div key={product.id} className="hardware-card">
              <div
                className="hardware-card-image"
                style={{
                  backgroundColor: '#1a1a1a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '14px',
                }}
              >
                [Product Image]
              </div>
              <div className="hardware-card-label">{product.name}</div>
              <p className="hardware-card-description">{product.description}</p>
              <div className="hardware-progress">
                <div
                  className="hardware-progress-bar"
                  style={{
                    width: `${product.progressWidth || 100}%`,
                    backgroundColor: product.progressColor || '#00e6d9',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

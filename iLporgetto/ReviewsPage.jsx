import React from 'react';
import { ReviewsScrollPanel } from './ReviewsScrollPanel';

const brand = {
  dark: '#1a1a1a',
  gold: '#b59a6e',
  goldLight: '#c8b08a',
  goldMuted: '#8c7454',
  cream: '#f5f0e8',
  white: '#ffffff',
};

const ReviewsPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: brand.dark }}>

      {/* Hero */}
      <section style={{
        backgroundColor: brand.dark,
        borderBottom: `1px solid #2e2e2e`,
        padding: '80px 24px 64px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ height: '1px', width: '40px', backgroundColor: brand.gold }} />
            <span style={{
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: brand.gold,
              fontWeight: '500',
            }}>
              Customer Stories
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '300',
            color: brand.white,
            lineHeight: '1.15',
            marginBottom: '20px',
            letterSpacing: '-0.01em',
          }}>
            What Our Clients{' '}
            <em style={{ fontStyle: 'italic', color: brand.gold, fontWeight: '400' }}>Say</em>
          </h1>

          <p style={{ fontSize: '16px', color: '#9a9a9a', lineHeight: '1.6', maxWidth: '520px', margin: '0 auto' }}>
            Real stories from homeowners across California who trusted us with their windows.
          </p>
        </div>
      </section>

      {/* Reviews Scroll Panel */}
      <section style={{ padding: '60px 0 40px', backgroundColor: brand.dark }}>
        <ReviewsScrollPanel
          autoPlayInterval={5000}
          showControls={true}
          compact={true}
        />
      </section>

      {/* Stats */}
      <section style={{
        backgroundColor: '#141414',
        borderTop: `1px solid #2e2e2e`,
        borderBottom: `1px solid #2e2e2e`,
        padding: '64px 24px',
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          backgroundColor: '#2e2e2e',
        }}>
          {[
            { value: '32+', label: '5-Star Reviews' },
            { value: 'CA', label: 'Serving All Regions' },
            { value: '100%', label: 'Customer Satisfaction' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#141414',
                padding: '48px 32px',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontSize: '42px',
                fontWeight: '300',
                color: brand.gold,
                letterSpacing: '-0.02em',
                marginBottom: '10px',
              }}>
                {stat.value}
              </div>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#7a7a7a',
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: brand.dark, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '300',
            color: brand.white,
            marginBottom: '16px',
            letterSpacing: '-0.01em',
          }}>
            Ready to Transform Your Home?
          </h2>
          <p style={{ fontSize: '15px', color: '#9a9a9a', marginBottom: '40px', lineHeight: '1.7' }}>
            Join hundreds of satisfied customers. Contact us for a free consultation.
          </p>
          <a
            href="/consultation"
            style={{
              display: 'inline-block',
              padding: '14px 40px',
              backgroundColor: brand.gold,
              color: brand.dark,
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            Free Consultation
          </a>
        </div>
      </section>

    </div>
  );
};

export default ReviewsPage;

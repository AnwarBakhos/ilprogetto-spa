import React from 'react';
import { ReviewsScrollPanel } from './ReviewsScrollPanel';

const brand = {
  dark: '#1a1a1a',
  gold: '#b59a6e',
  goldMuted: '#8c7454',
  white: '#ffffff',
};

/**
 * Front Page Reviews Section
 * Displays a compact version of the reviews scroll panel
 */
const FrontPageReviewsSection = () => {
  return (
    <section style={{ backgroundColor: brand.dark, padding: '80px 0 64px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section Header — matches site's "CUSTOMER STORIES" label style */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
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

          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: '300',
            color: brand.white,
            lineHeight: '1.2',
            marginBottom: '16px',
            letterSpacing: '-0.01em',
          }}>
            What Our Clients{' '}
            <em style={{ fontStyle: 'italic', color: brand.gold, fontWeight: '400' }}>Say</em>
          </h2>

          <p style={{ fontSize: '15px', color: '#9a9a9a', maxWidth: '480px', lineHeight: '1.7' }}>
            Real stories from homeowners across California who trusted us with their windows.
          </p>
        </div>

        {/* Reviews Scroll Panel */}
        <ReviewsScrollPanel
          autoPlayInterval={6000}
          showControls={true}
          compact={true}
        />

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '52px' }}>
          <a
            href="/reviews"
            style={{
              display: 'inline-block',
              padding: '13px 36px',
              border: `1px solid ${brand.gold}`,
              color: brand.gold,
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              backgroundColor: 'transparent',
              transition: 'background-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = brand.gold;
              e.currentTarget.style.color = brand.dark;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = brand.gold;
            }}
          >
            View All Reviews
          </a>
        </div>

      </div>
    </section>
  );
};

export default FrontPageReviewsSection;

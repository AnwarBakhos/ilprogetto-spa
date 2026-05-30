# IL Progetto Reviews Component Integration Guide

## Overview
This package contains a fully functional React component system for displaying customer reviews with horizontal scrolling, auto-play, and manual controls.

## Files Included

1. **ReviewsScrollPanel.jsx** - Main component with all 32 reviews
2. **FrontPageReviewsSection.jsx** - Compact front page integration
3. **ReviewsPage.jsx** - Full dedicated reviews page
4. **REVIEWS_INTEGRATION_GUIDE.md** - This file

## Features

- ✅ 32 real customer reviews (all 5-star)
- ✅ Horizontal auto-scrolling carousel
- ✅ Manual scroll with arrow buttons
- ✅ Play/Pause auto-scroll control
- ✅ Displays reviewer info: name, location, date, rating, friend count, photo count
- ✅ Responsive design (works on mobile, tablet, desktop)
- ✅ Smooth scrolling animation
- ✅ Reusable and customizable

## Installation

### 1. Copy Files to Your Project
```bash
# Copy the component files to your React project
cp ReviewsScrollPanel.jsx src/components/reviews/
cp FrontPageReviewsSection.jsx src/components/reviews/
cp ReviewsPage.jsx src/pages/
```

### 2. Install Dependencies
The component uses Tailwind CSS and lucide-react. Make sure you have these installed:

```bash
npm install lucide-react
# Tailwind CSS should already be installed in your SPA
```

### 3. Update Your Tailwind Config
Make sure your `tailwind.config.js` includes:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // ... rest of config
}
```

## Usage

### Option 1: Add to Front Page
```jsx
// In your front page component
import FrontPageReviewsSection from '@/components/reviews/FrontPageReviewsSection';

export default function HomePage() {
  return (
    <main>
      {/* Other sections */}
      <FrontPageReviewsSection />
      {/* Other sections */}
    </main>
  );
}
```

### Option 2: Create Dedicated Reviews Page
```jsx
// In your router/pages
import ReviewsPage from '@/pages/ReviewsPage';

// Add route
<Route path="/reviews" element={<ReviewsPage />} />
```

### Option 3: Custom Usage
```jsx
import { ReviewsScrollPanel } from '@/components/reviews/ReviewsScrollPanel';

export default function CustomSection() {
  return (
    <ReviewsScrollPanel
      autoPlayInterval={6000}  // Time between auto-scrolls (ms)
      showControls={true}      // Show arrow + play/pause buttons
      compact={false}          // Show full section header
    />
  );
}
```

## Component Props

### ReviewsScrollPanel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `autoPlayInterval` | number | 5000 | Milliseconds between auto-scroll actions |
| `showControls` | boolean | true | Show navigation arrows and play/pause button |
| `compact` | boolean | false | Hide the "Customer Reviews" section header |

## Styling

The components use Tailwind CSS utility classes. Key classes used:
- `bg-gray-50`, `bg-white` - Backgrounds
- `text-gray-900`, `text-gray-600` - Text colors
- `rounded-lg` - Rounded corners
- `shadow-md` - Shadows
- `hover:bg-gray-100` - Hover effects

To customize colors:
1. Edit the Tailwind classes in the JSX
2. Or create custom CSS classes and apply them

Example color customization:
```jsx
// Change the "View All Reviews" button color
className="bg-blue-600 hover:bg-blue-700"  // Change to your brand color
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- Component uses React hooks (useState, useEffect, useRef)
- Auto-scroll interval can be adjusted for performance
- Smooth scrolling uses native CSS `scroll-behavior: smooth`
- Card width is fixed at 384px (w-96) for consistent spacing

## Customization Examples

### Change Auto-Scroll Speed
```jsx
<ReviewsScrollPanel autoPlayInterval={3000} />  // Faster
<ReviewsScrollPanel autoPlayInterval={8000} />  // Slower
```

### Hide Controls (Auto-scroll only)
```jsx
<ReviewsScrollPanel showControls={false} />
```

### Use on Mobile Only
```jsx
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function AdaptiveReviews() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return isMobile ? <ReviewsScrollPanel compact={true} /> : null;
}
```

## Adding New Reviews

To add new reviews, edit `ReviewsScrollPanel.jsx` and add to the `REVIEWS_DATA` array:

```javascript
const REVIEWS_DATA = [
  // ... existing reviews
  {
    id: 33,
    name: "New Name",
    location: "City, State",
    date: "May 30, 2026",
    rating: 5,
    text: "Review text here...",
    reviews: 0,
    friends: 0,
    photos: 0
  }
];
```

## Accessibility

- Buttons have `aria-label` for screen readers
- Semantic HTML structure
- Keyboard navigation support (arrow buttons)
- Color contrast meets WCAG AA standards

## Troubleshooting

### Scroll not working
- Check that Tailwind CSS is properly imported
- Verify `overflow-x-auto` class is applied
- Check browser console for errors

### Styling not applying
- Ensure Tailwind CSS is installed and configured
- Check that component is wrapped in Tailwind provider
- Clear Next.js/build cache and rebuild

### Auto-scroll stuttering
- Reduce `autoPlayInterval` or increase it
- Check for performance issues in browser DevTools
- Verify no conflicting CSS animations

## Future Enhancements

Potential additions:
- Swipe gestures for mobile
- Keyboard arrow key navigation
- Animated star ratings
- Review filtering by date/rating
- Customer photos display
- Video testimonials support

## Support

For questions or issues with implementation, refer to:
- Tailwind CSS docs: https://tailwindcss.com
- Lucide React docs: https://lucide.dev
- React docs: https://react.dev

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Pause, Play } from 'lucide-react';

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Baba E.",
    location: "Sebastopol, CA",
    date: "May 27, 2026",
    rating: 5,
    text: "IL Progetto shades and Blinds did am amazing job. Installed a blackout roller shades for my EDU in San Diego. Showed up on time. Clean and professional installation. I really recommend them for and window coverings jobs in San Diego.",
    reviews: 0,
    friends: 11,
    photos: 3
  },
  {
    id: 2,
    name: "Clayton N.",
    location: "San Diego, CA",
    date: "May 29, 2026",
    rating: 5,
    text: "Younan was very pleasant to work with, explained everything in detail and was very organized with his options and quotes. Getting on calendar was easy and the job of a dozen windows was done in 90 minutes. We are pleased with the results and would happily hire again for future blinds needs.",
    reviews: 4,
    friends: 0,
    photos: 1
  },
  {
    id: 3,
    name: "Wun-Ming Y.",
    location: "MI, MI",
    date: "May 27, 2026",
    rating: 5,
    text: "I want to give a special recognition to IL Progetto LLC for the exceptional level of customer service and expertise provided throughout my experience. The owner took the time to carefully understand my situation, patiently answer all of my questions regarding the removal and installation of the window blinds, and guided me through the process with professionalism and kindness.",
    reviews: 0,
    friends: 1,
    photos: 0
  },
  {
    id: 4,
    name: "Cindy S.",
    location: "San Diego, CA",
    date: "Apr 13, 2026",
    rating: 5,
    text: "We highly recommend Il Progetto Shades. We love our shades across all the great room windows! Younan helped us pick the best product/style/color for our project. He and his son did an excellent job installing the shades. They were very professional, on time, kept a clean workspace and a pleasure to have in our home.",
    reviews: 0,
    friends: 3,
    photos: 0
  },
  {
    id: 5,
    name: "Troy S.",
    location: "San Diego, CA",
    date: "Dec 12, 2025",
    rating: 5,
    text: "we love our new blinds! elegant and affordable. Yunon is great... from friendly consult to quick delivery and installation... they look even better than we expectrd. thanks for getting these to us in time for Christmas!",
    reviews: 16,
    friends: 4,
    photos: 1
  },
  {
    id: 6,
    name: "Girish K.",
    location: "San Diego, CA",
    date: "Nov 4, 2025",
    rating: 5,
    text: "They are really professional And rates are reasonable . Work quality is great . We got automated blinds installed and work perfect .",
    reviews: 66,
    friends: 30,
    photos: 18
  },
  {
    id: 7,
    name: "Eva N.",
    location: "Redwood City, CA",
    date: "Nov 22, 2025",
    rating: 5,
    text: "We had Younan from Il Progetto install both skylight and motorized window shades. He gave a reasonable quote, did all the measurements, kept my apprised on the timing and did a very tricky install (especially on the skylight shades!).",
    reviews: 2,
    friends: 4,
    photos: 2
  },
  {
    id: 8,
    name: "Marion J.",
    location: "Temecula, CA",
    date: "Mar 3, 2025",
    rating: 5,
    text: "Younan is professional and knowledgeable. He came on time and provided us with many options. He never pressured our discussion, and we appreciate it. Installation was on time, quick, and smooth. Younan checked that everything worked as it should before leaving.",
    reviews: 8,
    friends: 15,
    photos: 2
  },
  {
    id: 9,
    name: "Tina T.",
    location: "El Cajon, CA",
    date: "Aug 4, 2025",
    rating: 5,
    text: "We moved to a new house and the blinds were horrible. We immediately knew who we needed to call. Younan and Anwar were great. Anwar did a wonderful job with installation. Prices were very reasonable and service was professional.",
    reviews: 8,
    friends: 0,
    photos: 5
  },
  {
    id: 10,
    name: "Geoffrey R.",
    location: "San Diego, CA",
    date: "Nov 4, 2025",
    rating: 5,
    text: "Younan came one month ago to measure our windows & provide samples for us to pick from. His installers came today & had all custom shades up in under an hour. I don't know why we lived without window coverings for 11 months - we should have contacted iL Progetto a long time ago!",
    reviews: 0,
    friends: 2,
    photos: 5
  },
  {
    id: 11,
    name: "Alyssa S.",
    location: "San Diego, CA",
    date: "Dec 29, 2024",
    rating: 5,
    text: "Younan is extremely wonderful. A wealth of knowledge. Younan will walk you through all things shades (which can be a tough to decide on what color, style, type, etc is right for your home). Younan left our house looking beautiful.",
    reviews: 0,
    friends: 3,
    photos: 4
  },
  {
    id: 12,
    name: "Natalie G.",
    location: "Big Bear, CA",
    date: "Aug 26, 2025",
    rating: 5,
    text: "The services we requested and the quality we received exceeded our expectations. The value of the shades and blinds were fairly priced and we couldnt be happier with Younan and his crew. He was very professional, on time, and was able to help us understand the function of the rollers and drapes.",
    reviews: 19,
    friends: 3,
    photos: 3
  },
  {
    id: 13,
    name: "Christian V.",
    location: "Chula Vista, CA",
    date: "Oct 19, 2024",
    rating: 5,
    text: "I found Younan and iL Progetto on Yelp and it was probably the best thing we could have done for our home. We shopped around and Younan was able to offer competitive pricing for our home's needs. He was very friendly, accommodating and communicative with every step of the way.",
    reviews: 4,
    friends: 0,
    photos: 2
  },
  {
    id: 14,
    name: "Malcolm T.",
    location: "West Covina, CA",
    date: "Aug 10, 2025",
    rating: 5,
    text: "It is my pleasure to write this positive review for Younan and his company, iL Progetto, LLC. From the moment I met Younan he was extremely professional and knowledgeable regarding the type of window treatment needed for me and my home. He was very thorough with his samples and regardless of what time of day, he always returned my texts.",
    reviews: 0,
    friends: 7,
    photos: 1
  },
  {
    id: 16,
    name: "Allison M.",
    location: "Escondido, CA",
    date: "Sep 27, 2025",
    rating: 5,
    text: "Younan is an exemplar small business- friendly, knowledgeable and did an incredible job! First visit he measured and brought samples to support us in creating our first custom blinds for windows and sliders. He provided lots of options and was patient as we made decisions.",
    reviews: 337,
    friends: 18,
    photos: 2
  },
  {
    id: 17,
    name: "Mary S.",
    location: "San Diego, CA",
    date: "Dec 31, 2024",
    rating: 5,
    text: "I recently purchased window blinds from Il Progetto and couldn't be more satisfied. The service was excellent--quick, friendly, and professional from start to finish. The blinds themselves are of high quality, well-made, and look great in my home. Plus, the pricing was very reasonable.",
    reviews: 0,
    friends: 22,
    photos: 1
  },
  {
    id: 18,
    name: "Carla J.",
    location: "Oceanside, CA",
    date: "Sep 6, 2024",
    rating: 5,
    text: "Lola barks no more! I was in desperate need of window coverings for my front window as my Shar-Pei Lola barked at anything and everything that moved. It was very easy to schedule an appointment to measure. I felt so at ease (no pushy sales pitch) and confident in the quality and service I would receive.",
    reviews: 5,
    friends: 0,
    photos: 3
  },
  {
    id: 19,
    name: "Ashling M.",
    location: "San Diego, CA",
    date: "Oct 28, 2024",
    rating: 5,
    text: "I could not recommend Younan and his business enough. We were recommended IL Progetto by our neighbors and are so happy we found the perfect company to install our window shades in our new home. After consultations with other companies, we were a little dismayed about getting our window coverings, but Younan made it such a quick and easy process.",
    reviews: 21,
    friends: 91,
    photos: 58
  },
  {
    id: 20,
    name: "Michael C.",
    location: "CA, CA",
    date: "Aug 10, 2025",
    rating: 5,
    text: "Hello, I went on Angie's list to find an installer for window coverings that I purchased from Costco. Younan the owner of the company called me within minutes. The price he quoted me to install these window coverings was completely in line. I hired him immediately and agreed on price and timeframe to install.",
    reviews: 6,
    friends: 0,
    photos: 0
  },
  {
    id: 21,
    name: "Sharra K.",
    location: "Vista, CA",
    date: "Sep 17, 2024",
    rating: 5,
    text: "Younan was very professional, friendly and communicative, and the skylight blind looks beautiful! His prices were honest, as I had originally received a quote from a corporation and their pricing was absolutely outrageous! I definitely recommend this company for your blind needs.",
    reviews: 0,
    friends: 4,
    photos: 1
  },
  {
    id: 22,
    name: "Teresa P.",
    location: "East Village, San Diego, CA",
    date: "Jan 16, 2025",
    rating: 5,
    text: "Highly recommend Younan, he and his son installed shades on our first floor of our home, they were extremely professional, timely, and polite. We will be using him for shades throughout the rest of our home as well.",
    reviews: 0,
    friends: 4,
    photos: 3
  },
  {
    id: 23,
    name: "Carol H.",
    location: "Murrieta, CA",
    date: "Jan 7, 2025",
    rating: 5,
    text: "Younan, the owner, was very professional. He came to our RV in Temecula and did the measurements and we chose our blinds. A couple weeks later, he came and did the install. It was a difficult install but he got it done with a smile on his face! We are very happy.",
    reviews: 0,
    friends: 8,
    photos: 3
  },
  {
    id: 24,
    name: "Jeremy T.",
    location: "Chula Vista, CA",
    date: "Nov 6, 2024",
    rating: 5,
    text: "We are very happy with the service provided by IL Progetto, they made everything very seamless. They utilize a mobile showroom and bring samples to your house so that you are able to see what the shades would like in your home. They were very transparent about lead time for getting the shades ordered and delivered.",
    reviews: 0,
    friends: 1,
    photos: 0
  },
  {
    id: 25,
    name: "Sean T.",
    location: "Yorba Linda, CA",
    date: "Oct 28, 2024",
    rating: 5,
    text: "Father and Son Duo were great! We are so happy with our new blinds! I would recommend them",
    reviews: 0,
    friends: 6,
    photos: 1
  },
  {
    id: 26,
    name: "John D.",
    location: "San Diego, CA",
    date: "Aug 1, 2024",
    rating: 5,
    text: "We recently moved into our new home, and our friends suggested iL Progetto for our window shades. I gave them a try, and I couldn't be happier with the outcome. Their sheer shades look fantastic, adding a modern touch to our home. The owner personally assisted with the design and took care of the installation.",
    reviews: 0,
    friends: 7,
    photos: 1
  },
  {
    id: 27,
    name: "Lama K.",
    location: "San Marcos, CA",
    date: "Jul 21, 2024",
    rating: 5,
    text: "I am giving them 5 stars for their professionalism and amazing service. Also the window blinds are very nice and stylish.",
    reviews: 18,
    friends: 8,
    photos: 6
  },
  {
    id: 28,
    name: "Mark M.",
    location: "Mission Viejo, CA",
    date: "Dec 5, 2024",
    rating: 5,
    text: "The window coverings are really beautiful. Working with Younan at IL Progetto was really great! Communication was superb and both the sales and review process was professional, with no pressure. Lastly, the installation was also efficient and professional all the way through!",
    reviews: 0,
    friends: 42,
    photos: 0
  },
  {
    id: 29,
    name: "Troy D.",
    location: "Stockton, CA",
    date: "Feb 25, 2025",
    rating: 5,
    text: "Went through IL Progetto for black out shades. Reasonably priced, on time and room has never been darker. If you sleep during the day these are a must have and IL Progetto won't disappoint.",
    reviews: 0,
    friends: 10,
    photos: 0
  },
  {
    id: 31,
    name: "Weaam B.",
    location: "San Diego, CA",
    date: "Jul 10, 2024",
    rating: 5,
    text: "First to Review I loved my new shades from iL Progetto! They changed the look of my home, adding a very stylish touch. The team was very professional, and the shades fit perfectly into my budget.",
    reviews: 10,
    friends: 2,
    photos: 0
  },
  {
    id: 32,
    name: "Nawras H.",
    location: "Black Mountain Ranch, San Diego, CA",
    date: "Aug 18, 2024",
    rating: 5,
    text: "iL Progetto provided an exceptional experience from start to finish. We chose their sheer shades for our living room, and they've made such a difference. The light control is perfect, and the window shades look so elegant. The installation process was smooth, and the team was incredibly courteous and respectful of our home.",
    reviews: 2,
    friends: 7,
    photos: 0
  }
];

// Brand colors matching iL Progetto website
const brand = {
  dark: '#1a1a1a',
  gold: '#b59a6e',
  goldLight: '#c8b08a',
  goldMuted: '#8c7454',
  cream: '#f5f0e8',
  white: '#ffffff',
  cardBg: '#f9f6f1',
  textDark: '#1a1a1a',
  textMuted: '#6b6157',
};

const StarRating = ({ rating }) => (
  <div style={{ display: 'flex', gap: '3px' }}>
    {[...Array(rating)].map((_, i) => (
      <Star
        key={i}
        size={14}
        style={{ fill: brand.gold, color: brand.gold }}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }) => {
  return (
    <div
      style={{
        flexShrink: 0,
        width: '380px',
        backgroundColor: brand.white,
        border: `1px solid #e8e0d4`,
        borderRadius: '2px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        position: 'relative',
      }}
    >
      {/* Stars */}
      <div style={{ marginBottom: '20px' }}>
        <StarRating rating={review.rating} />
      </div>

      {/* Review text */}
      <p
        style={{
          fontSize: '14px',
          lineHeight: '1.75',
          color: brand.textDark,
          fontStyle: 'italic',
          flexGrow: 1,
          marginBottom: '24px',
          display: '-webkit-box',
          WebkitLineClamp: 6,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        "{review.text}"
      </p>

      {/* Divider */}
      <div style={{ width: '32px', height: '1px', backgroundColor: brand.gold, marginBottom: '16px' }} />

      {/* Name & location */}
      <div>
        <p style={{ fontWeight: '600', fontSize: '15px', color: brand.textDark, marginBottom: '4px', letterSpacing: '0.02em' }}>
          {review.name}
        </p>
        <p style={{ fontSize: '12px', color: brand.gold, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {review.location}
        </p>
      </div>

      {/* Date */}
      <p style={{ fontSize: '11px', color: '#aaa', marginTop: '8px' }}>{review.date}</p>
    </div>
  );
};

const ReviewsScrollPanel = ({ autoPlayInterval = 5000, showControls = true, compact = false }) => {
  const scrollContainerRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoPlayTimerRef = useRef(null);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 410;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      if (isAutoPlaying) resetAutoPlayTimer();
    }
  };

  const autoScroll = () => {
    if (scrollContainerRef.current && isAutoPlaying) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10;
      if (isAtEnd) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollLeft += 410;
      }
    }
  };

  const resetAutoPlayTimer = () => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setInterval(autoScroll, autoPlayInterval);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      resetAutoPlayTimer();
    } else if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  useEffect(() => {
    checkScroll();
    if (isAutoPlaying) resetAutoPlayTimer();
    return () => { if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current); };
  }, [isAutoPlaying]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const navBtnStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: `1px solid ${brand.gold}`,
    backgroundColor: brand.dark,
    color: brand.gold,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'background-color 0.2s, color 0.2s',
  };

  return (
    <div style={{ width: '100%', padding: '40px 0', backgroundColor: 'transparent' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {!compact && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '300',
              color: brand.white,
              letterSpacing: '0.04em',
              marginBottom: '8px',
            }}>
              Customer Reviews
            </h2>
            <p style={{ fontSize: '14px', color: brand.goldMuted, letterSpacing: '0.06em' }}>
              See what our clients say about iL Progetto
            </p>
          </div>
        )}

        <div style={{ position: 'relative' }}>
          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            style={{
              display: 'flex',
              gap: '20px',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              paddingBottom: '8px',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {REVIEWS_DATA.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Left arrow */}
          {showControls && canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              style={{ ...navBtnStyle, left: '-22px' }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Right arrow */}
          {showControls && canScrollRight
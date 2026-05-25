/**
 * ============================================================
 *  IGAT CLUB — SITE DATA (Your single file to update images)
 * ============================================================
 *  HOW TO UPDATE IMAGES:
 *  1. Add your new image to the /images/ folder
 *  2. Find the section below you want to change
 *  3. Update the "src" path to your new filename
 *  4. Save & redeploy to Vercel — done.
 *
 *  HOW IMAGE PATHS WORK:
 *  - Local image:  "images/my-photo.jpg"
 *  - External URL: "https://example.com/photo.jpg"
 * ============================================================
 */

const SITE_DATA = {

  // ----------------------------------------------------------
  //  SHOWCASE PAGE — Egekabu Gallery (6-image grid)
  // ----------------------------------------------------------
  egekabuGallery: [
    {
      src: "images/egekabu_1.jpg",
      alt: "Egekabu Vintage Radio Showcase",
      caption: "Vintage Melodies",
      size: "tall",   // "tall" = taller card, "" = normal
    },
    {
      src: "images/egekabu_3.jpg",
      alt: "Egekabu Live Performance Group",
      caption: "Gusii Storytelling",
      size: "",
    },
    {
      src: "images/egekabu_5.jpg",
      alt: "Egekabu Traditional Aesthetics",
      caption: "Cultural Expression",
      size: "",
    },
    {
      src: "images/egekabu_6.jpg",
      alt: "Egekabu Culture Collective",
      caption: "Talent Convergence",
      size: "",
    },
    {
      src: "images/egekabu_4.jpg",
      alt: "Egekabu Vintage Props and Talents",
      caption: "Authentic Identity",
      size: "",
    },
    {
      src: "images/egekabu_2.jpg",
      alt: "Egekabu Live Crew and Talents",
      caption: "Celebrating Roots",
      size: "tall",
    },
  ],

  // ----------------------------------------------------------
  //  SHOWCASE PAGE — Leadership / ARISE Circle Events (3 cards)
  // ----------------------------------------------------------
  leadershipEvents: [
    {
      src: "images/IMG-20251016-WA0002.jpg",
      alt: "ARISE Circle Leadership Event",
      badge: "Leadership Event",
      title: "ARISE Conversations",
      theme: "Social Capital: Networks as the New Leadership Currency",
      date: "Wed, 8th Oct 2025",
      time: "2:00pm - 4:00pm",
      venue: "Kwanza Place, Kisii",
      speakerName: "Peris Ongori",
      speakerRole: "Panel Discussant",
      speakerBio: "STEM champion, Keynote speaker, Entrepreneur & Founder I got a talent-IGAT.",
      footerNote: "For Reservation: +254722513505",
    },
    {
      src: "images/IMG-20251016-WA0003.jpg",
      alt: "ARISE Circle Brand Identity",
      badge: "Brand Identity",
      title: "ARISE Brand Identity",
      theme: "Modern Leadership Platform",
      description: "This branding displays the ARISE Circle visual language with a clean, modern design. The minimalist aesthetic reflects the professional nature of the platform.",
      speakerName: "Professional Design",
      speakerRole: "Visual Identity",
      speakerBio: "The clean, professional branding reflects the quality of leadership conversations offered by ARISE Circle.",
      footerNote: "",
    },
    {
      src: "images/IMG-20251016-WA0005.jpg",
      alt: "ARISE Circle Leadership Theme",
      badge: "Theme Preview",
      title: "ARISE Theme Preview",
      theme: "Building & Leveraging Networks",
      description: "Highlighting \"Social Capital: Networks as the New Leadership Currency.\" The theme explores how networks and relationships serve as key assets in modern leadership.",
      speakerName: "Transformative Networks",
      speakerRole: "Leadership Development",
      speakerBio: "Building meaningful connections that create opportunities for personal and professional growth.",
      footerNote: "",
    },
  ],

  // ----------------------------------------------------------
  //  SHOWCASE PAGE — Featured Talents (3 cards)
  // ----------------------------------------------------------
  featuredTalents: [
    {
      src: "images/showcase.jpg",
      alt: "Sarah M. - Music Talent",
      category: "Music",
      name: "Sarah M.",
      role: "Vocalist & Songwriter",
      description: "Won Kenya's Got Talent after being discovered at KNP Talent Day. Now a recording artist with two singles.",
      profileLink: "#",
    },
    {
      src: "images/program.jpg",
      alt: "James K. - Technology",
      category: "Technology",
      name: "James K.",
      role: "App Developer",
      description: "Developed inventory management app that's now used by 50+ businesses. Runs his own startup.",
      profileLink: "#",
    },
    {
      src: "images/show.jpg",
      alt: "Grace W. - Visual Arts",
      category: "Visual Arts",
      name: "Grace W.",
      role: "Painter & Visual Artist",
      description: "Earned full scholarship to Italy for her paintings. Currently studying fine art in Florence.",
      profileLink: "#",
    },
  ],

  // ----------------------------------------------------------
  //  ABOUT PAGE — Hero / feature images
  // ----------------------------------------------------------
  about: {
    heroImage: "images/IMG-20250407-WA0440.jpg",   // Main about page banner image
    perisImage: "images/peris.jpg",                 // Peris Ongori photo
  },

  // ----------------------------------------------------------
  //  PROGRAMS PAGE — Section images
  // ----------------------------------------------------------
  programs: {
    sectionImage1: "images/IMG-20250407-WA0457.jpg",
    sectionImage2: "images/IMG-20250407-WA0425.jpg",
    sectionImage3: "images/IMG-20250407-WA0427.jpg",
  },

  // ----------------------------------------------------------
  //  IMPACT PAGE — Section images
  // ----------------------------------------------------------
  impact: {
    image1: "images/new pic (1).jpg",
    image2: "images/new pic (2).jpg",
    image3: "images/new pic (3).jpg",
    image4: "images/images (1).jpg",
    image5: "images/images (2).jpg",
  },

  // ----------------------------------------------------------
  //  INDEX (HOME) PAGE — Hero / feature images
  // ----------------------------------------------------------
  home: {
    heroImage: "images/new pic (3).jpg",
  },

  // ----------------------------------------------------------
  //  TEAM — Local fallback data (used if API is unavailable)
  //  Used by: js/team.js
  // ----------------------------------------------------------
  team: [
    // Add your team members here. Remove or add objects as needed.
    // {
    //   name: "Peris Ongori",
    //   position: "Founder & Director",
    //   photo: "images/peris.jpg",
    //   info: "STEM champion, Keynote speaker, Entrepreneur & Founder of IGAT.",
    //   email: "peris@igat.org",
    //   phone: "722513505",
    // },
  ],

  // ----------------------------------------------------------
  //  GALLERY — Local video/media gallery entries
  //  Used by: js/gallery.js
  // ----------------------------------------------------------
  gallery: [
    // Add your gallery items here. Remove or add objects as needed.
    // {
    //   name: "Talent Show 2024",
    //   info: "Annual showcase of student talents across music, dance, and arts.",
    //   image: "images/showcase.jpg",
    //   link: "https://youtube.com/your-video-link",
    // },
  ],

};

// Make available globally
window.SITE_DATA = SITE_DATA;

import Header from '../common/Header';
const Footer = dynamic(() => import('@/common/Footer'));
import 'aos/dist/aos.css';
import '../css/globals.css';
import dynamic from 'next/dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const SITE_URL = "https://www.elchinnovruzov.com";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Elchin Novruzov",
  alternateName: ["Elcin Novruzov", "Elçin Novruzov", "Elchin Elçin Novruzov"],
  url: SITE_URL,
  image: `${SITE_URL}/Elchin_Novruzov.png`,
  jobTitle: ["Technical Lead", "Founding Engineer", "Full-Stack Software Engineer"],
  worksFor: {
    "@type": "Organization",
    name: "iREE Group",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Prague",
    addressCountry: "CZ",
  },
  email: "mailto:elchinnovruzovv@gmail.com",
  telephone: "+420775355224",
  sameAs: [
    "https://github.com/Elchin-Novruzov",
    "https://www.linkedin.com/in/elchin-novruzov/",
  ],
  knowsLanguage: ["English", "Turkish", "Azerbaijani", "Russian"],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Paris American International University" },
    { "@type": "CollegeOrUniversity", name: "Czech University of Life Sciences Prague" },
    { "@type": "CollegeOrUniversity", name: "Azerbaijan Technical University" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/programming.png" type="image/x-icon"></link>
        <link rel="shortcut icon" href="/images/programming.png" type="image/x-icon"></link>
        <link rel="canonical" href={SITE_URL} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <meta name="description" content="Elchin Novruzov (also spelled Elcin or Elçin Novruzov) — Technical Lead & Founding Engineer with 5+ years shipping international software projects. Explore my work, experience, and background." />
        <meta name="keywords" content="Elchin Novruzov, Elcin Novruzov, Elçin Novruzov, Elchin (Elçin) Novruzov, Elchin Elçin Novruzov, elcin, novruzov, Elchin, Elçin, elçin, elchin, Novruzov, Elchin Novruzov Technical Lead, Elchin Novruzov Founding Engineer, Technical Lead, Founding Engineer, Full-Stack Software Engineer, Web Developer, Front-end developer, Html, Css, Js, Javascript, React, React.js, Next js, Node, Node.js" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Elchin Novruzov" />
        <title>Elchin Novruzov (Elçin Novruzov) — Technical Lead & Founding Engineer</title>

        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Elchin Novruzov (Elçin Novruzov) — Technical Lead & Founding Engineer" />
        <meta property="og:description" content="Technical Lead & Founding Engineer with 5+ years shipping international software projects. Explore my work, experience, and background." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="Elchin Novruzov" />
        <meta property="og:image" content={`${SITE_URL}/Elchin_Novruzov.png`} />
        <meta property="og:locale" content="en_US" />
        <meta property="profile:first_name" content="Elchin" />
        <meta property="profile:last_name" content="Novruzov" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elchin Novruzov (Elçin Novruzov) — Technical Lead & Founding Engineer" />
        <meta name="twitter:description" content="Technical Lead & Founding Engineer with 5+ years shipping international software projects." />
        <meta name="twitter:image" content={`${SITE_URL}/Elchin_Novruzov.png`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body id="home">
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'BahanaMadiunTrans - Sewa Mobil Madiun Murah & Terpercaya',
  description: 'Layanan sewa mobil profesional, murah, dan terpercaya di Madiun bersama BahanaMadiunTrans. Tersedia Innova Zenix, Avanza, Hiace, dan lainnya. Melayani lepas kunci atau dengan driver.',
  keywords: [
    'sewa mobil madiun',
    'rental mobil madiun',
    'bahanamadiuntrans',
    'bahana madiun trans',
    'sewa mobil murah madiun',
    'rental mobil madiun lepas kunci',
    'sewa hiace madiun',
    'sewa elf madiun',
    'sewa innova zenix madiun'
  ],
  authors: [{ name: 'BahanaMadiunTrans' }],
  creator: 'BahanaMadiunTrans',
  publisher: 'BahanaMadiunTrans',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://bahanatransport.id',
  },
  openGraph: {
    title: 'BahanaMadiunTrans - Sewa Mobil Madiun Murah & Terpercaya',
    description: 'Layanan sewa mobil profesional dan terpercaya di Madiun. Pilihan armada lengkap dan harga kompetitif.',
    url: 'https://bahanatransport.id',
    siteName: 'BahanaMadiunTrans',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BahanaMadiunTrans - Sewa Mobil Madiun Murah & Terpercaya',
    description: 'Layanan sewa mobil profesional dan terpercaya di Madiun. Pilihan armada lengkap.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BahanaMadiunTrans",
  "image": "https://bahanatransport.id/logo.png",
  "@id": "https://bahanatransport.id",
  "url": "https://bahanatransport.id",
  "telephone": "+6281215084257",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Raya Madiun",
    "addressLocality": "Madiun",
    "addressRegion": "Jawa Timur",
    "postalCode": "63121",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.6298,
    "longitude": 111.5239
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/bahanatransport",
    "https://www.instagram.com/bahanatransport"
  ]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="google-site-verification" content="c7eJ-KiyTFFCrstUBbg5GYKPem4JumE59VXegUdQpt0" />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-gray-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

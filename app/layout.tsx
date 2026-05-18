import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Bahana Transport - Sewa Mobil Madiun Murah & Terpercaya',
  description: 'Layanan sewa mobil profesional, murah, dan terpercaya di Madiun bersama Bahana Transport. Tersedia Innova Zenix, Avanza, Hiace, dan lainnya. Melayani dengan driver profesional.',
  keywords: [
    'sewa mobil madiun',
    'rental mobil madiun',
    'bahanatransport',
    'bahana transport madiun',
    'sewa mobil murah madiun',
    'sewa hiace madiun',
    'sewa elf madiun',
    'sewa innova zenix madiun'
  ],
  authors: [{ name: 'Bahana Transport' }],
  creator: 'Bahana Transport',
  publisher: 'Bahana Transport',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://bahanatransport.id',
  },
  openGraph: {
    title: 'Bahana Transport - Sewa Mobil Madiun Murah & Terpercaya',
    description: 'Layanan sewa mobil profesional dan terpercaya di Madiun. Pilihan armada lengkap dan harga kompetitif.',
    url: 'https://bahanatransport.id',
    siteName: 'Bahana Transport',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bahana Transport - Sewa Mobil Madiun Murah & Terpercaya',
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
  "name": "Bahana Transport",
  "image": "https://bahanatransport.id/logo.png",
  "@id": "https://bahanatransport.id",
  "url": "https://bahanatransport.id",
  "telephone": "+6281215084257",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Margobawero VA",
    "addressLocality": "Madiun",
    "addressRegion": "Jawa Timur",
    "postalCode": "63131",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.6265606,
    "longitude": 111.5213303
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
      <body className="font-sans antialiased text-slate-900 bg-gray-50 flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}

import './globals.css'

export const metadata = {
  title: 'Danial Komo — Developer & Designer',
  description: 'Webdesigner & Ontwikkelaar gespecialiseerd in Next.js, WordPress en SaaS oplossingen.',
  keywords: 'webdesign, ontwikkelaar, Next.js, WordPress, SaaS, Nederland, Winterswijk',
  openGraph: {
    title: 'Danial Komo — Developer & Designer',
    description: 'Ik bouw snelle, visueel sterke digitale ervaringen die converteren.',
    url: 'https://danialkomo.com',
    siteName: 'Danial Komo',
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body>{children}</body>
    </html>
  )
}

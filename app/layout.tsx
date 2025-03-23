import { type Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://rachitkatyal.vercel.app"),
  title: {
    default: "Rachit Katyal - Software Developer",
    template: "%s | Rachit Katyal",
  },
  description:
    "Personal portfolio of Rachit Katyal, a software developer specializing in MERN stack development.",
  openGraph: {
    title: "Rachit Katyal - Software Developer",
    description: "Full-stack developer specializing in MERN stack development",
    url: "https://rachitkatyal.vercel.app",
    siteName: "Rachit Katyal",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Rachit Katyal",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  let theme = localStorage.getItem('theme')
                  if (!theme) {
                    theme = 'dark'
                    localStorage.setItem('theme', theme)
                  }
                  if (theme === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                  }
                  document.documentElement.classList.add(theme)
                } catch (e) {
                  document.documentElement.classList.add('dark')
                }
              })()
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/rachit_pic.png" as="image" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <Script id="cleanup-attributes" strategy="afterInteractive">
        {`
          function cleanup() {
            const html = document.documentElement;
            const body = document.body;
            
            // Clean HTML element
            html.classList.remove('vsc-initialized');
            html.removeAttribute('data-new-gr-c-s-check-loaded');
            html.removeAttribute('data-gr-ext-installed');
            html.removeAttribute('style');
            
            // Ensure theme-related attributes are handled by next-themes only
            if (html.hasAttribute('color-scheme')) {
              html.removeAttribute('color-scheme');
            }
            if (html.hasAttribute('style')) {
              const style = html.getAttribute('style');
              if (style && style.includes('color-scheme')) {
                html.removeAttribute('style');
              }
            }
          }
          
          // Run cleanup multiple times to ensure it catches all cases
          cleanup();
          setTimeout(cleanup, 0);
          setTimeout(cleanup, 100);
        `}
      </Script>
    </html>
  );
}

// app/layout.js
import './globals.css';
import ThemeProvider from './components/ThemeProvider';

export const metadata = {
  title: "Khushi Agarwal - Software Engineer Portfolio",
  description: "Professional portfolio of Khushi Agarwal, Full Stack Developer. Experience, projects, and contact information.",
  viewport: "width=device-width,initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* SEO meta tags can be added here or via next-seo */}
        <meta name="theme-color" content="#0b1121" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

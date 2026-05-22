import Providers from "./providers";
import "./globals.css";

const siteUrl = "https://portfolio-v2-coral-kappa.vercel.app";

export const metadata = {
  title: "Aryan Bola",
  description: "A portfolio website by Aryan Bola",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Aryan Bola",
    description: "A portfolio website by Aryan Bola",
    images: [{ url: "/banner.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Bola",
    description: "A portfolio website by Aryan Bola",
    images: ["/banner.png"],
  },
  icons: {
    icon: "/me/Me1.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

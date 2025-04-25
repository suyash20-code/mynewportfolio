import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const Outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Suyash - Portfolio",
  description:
    "Explore Suyash's portfolio showcasing expertise in web and app development, with a focus on innovative solutions and user-friendly designs.",
  icons: [{ rel: "icon", url: "/icon.png" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${Outfit.className} ${Ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

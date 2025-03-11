import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import { Footer } from "@/components/Footer";

const interSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raditya Bagaswara | Full Stack Developer",
  description:
    "Full-stack developer with a strong foundation in Business Information Systems and diverse experience in delivering scalable web applications. Proficient in multiple programming languages and frameworks, specializing in web development, system integration, and cross-functional collaboration. Passionate at solving complex technical challenges and driving user-centered software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable}  antialiased`}>
        <div className="max-w-4xl mx-auto">
          <Navbar />
          <div className="pt-24 w-full min-h-[80vh]">{children}</div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

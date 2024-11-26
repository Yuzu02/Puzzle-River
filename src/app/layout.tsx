import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Providers
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import ToasterProvider from "@/components/provider/ToasterProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Juego del Rio - Next.js",
  description: `Instrucciones:
    1. Lleva todos los elementos al otro lado del río.
    2. Recuerda que:
    - Si el lobo se queda solo con la oveja, se la comerá.
    - Si la oveja se queda sola con la lechuga, se la comerá.
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange //? Para habilitar las animaciones de transición de tema
        >
          {children}
          <ToasterProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}

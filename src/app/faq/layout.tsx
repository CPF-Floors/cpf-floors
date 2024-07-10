import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "CPF Floors - Frecuently Asked Questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
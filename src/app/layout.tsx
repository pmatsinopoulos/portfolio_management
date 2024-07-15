import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Manage your Blockchain Assets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";

import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import "./globals.css";

const clashGrotesk = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-clash",
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Singularity - Coming soon",
	description: "Singularity Works",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={clashGrotesk.variable}>
			<head>
				<style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-clash: ${clashGrotesk.style.fontFamily};
}
        `}</style>
			</head>
			<body>{children}</body>
		</html>
	);
}

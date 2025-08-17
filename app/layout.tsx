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

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL || "https://singularityworks.xyz";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Singularity Works — Minimalist digital experiences",
		template: "%s | Singularity Works",
	},
	description:
		"Where minimalism meets psychology. We craft digital experiences that create profound connections through purposeful simplicity.",
	keywords: [
		"Singularity Works",
		"minimalist design",
		"digital experiences",
		"UX",
		"UI",
		"product design",
		"creative studio",
	],
	alternates: {
		canonical: siteUrl,
	},
	openGraph: {
		type: "website",
		title: "Singularity Works — Minimalist digital experiences",
		description:
			"Where minimalism meets psychology. We craft digital experiences that create profound connections through purposeful simplicity.",
		url: siteUrl,
		siteName: "Singularity Works",
	},
	twitter: {
		card: "summary_large_image",
		title: "Singularity Works — Minimalist digital experiences",
		description:
			"Where minimalism meets psychology. We craft digital experiences that create profound connections through purposeful simplicity.",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
		viewportFit: "cover",
	},
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
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Singularity Works",
							description:
								"Where minimalism meets psychology. We craft digital experiences that create profound connections through purposeful simplicity.",
							url: siteUrl,
							logo: `${siteUrl}/favicon.ico`,
						}),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: "Singularity Works",
							url: siteUrl,
							potentialAction: {
								"@type": "SearchAction",
								target: `${siteUrl}/search?q={search_term_string}`,
								"query-input": "required name=search_term_string",
							},
						}),
					}}
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}

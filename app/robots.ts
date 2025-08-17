import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const siteUrl =
		process.env.NEXT_PUBLIC_SITE_URL || "https://singularityworks.xyz";

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
		sitemap: `${siteUrl}/sitemap.xml`,
		host: siteUrl,
	};
}

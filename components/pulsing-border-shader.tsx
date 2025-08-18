"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import to avoid running WebGL setup during SSR
const PulsingBorder = dynamic(
	() => import("@paper-design/shaders-react").then(m => m.PulsingBorder),
	{ ssr: false }
);

interface PulsingBorderShaderProps {
	className?: string;
	style?: React.CSSProperties;
}

export default function PulsingBorderShader({ className = "", style = {} }: PulsingBorderShaderProps) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => { setMounted(true); }, []);

	// Placeholder to avoid hydration mismatch
	if (!mounted) {
		return <div className={className} style={{ width: "100%", height: "100%", ...style }} />;
	}

	return (
		<PulsingBorder
			colors={["#FFFFFF", "#E5E5E5", "#CCCCCC", "#B3B3B3"]}
			colorBack="#00000000"
			speed={1.2}
			roundness={1}
			thickness={0.03}
			softness={0.15}
			intensity={0.8}
			// Removed spotsPerColor to prevent unsupported DOM prop warning
			spotSize={0.08}
			pulse={0.15}
			smoke={0.3}
			smokeSize={1.5}
			scale={0.7}
			rotation={0}
			style={{
				width: "100%",
				height: "100%",
				borderRadius: "0px",
				backgroundImage:
					"radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 70%)",
				...style,
			}}
			className={className}
		/>
	);
}

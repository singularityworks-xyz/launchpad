"use client";

import Galaxy from "../app/blocks/Galaxy/Galaxy";
import PulsingBorderShader from "./pulsing-border-shader";

export default function Component() {
	return (
		<div className="relative min-h-screen text-white overflow-hidden">
			<div className="absolute inset-0 z-0">
				<Galaxy
					mouseRepulsion={true}
					transparent={false}
					mouseInteraction={true}
					globalMouse={true}
					density={2}
					glowIntensity={0.3}
					saturation={0}
					starSpeed={0.5}
					repulsionStrength={2}
					hueShift={140}
				/>
			</div>

			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-white/5 rounded-full blur-2xl sm:blur-3xl" />
				<div className="absolute bottom-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-white/3 rounded-full blur-2xl sm:blur-3xl" />
			</div>

			<div className="relative z-10 container mx-auto px-4 py-16 sm:py-20">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] lg:min-h-[80vh]">
					<div className="space-y-8 lg:pr-8">
						<div className="space-y-8">
							<div>
								<h1 className="flex flex-wrap items-baseline gap-4 font-clash font-light tracking-wide text-white text-4xl lg:text-6xl">
									<span>SINGULARITY</span>
									<span className="text-[0.48em] lg:text-[0.42em] font-light text-white/60 tracking-[0.75em] uppercase translate-y-[0.15em]">
										WORKS
									</span>
								</h1>
							</div>
							<div className="space-y-4">
								<p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed font-light">
									Where minimalism meets psychology.
								</p>
								<p className="text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed font-light">
									We craft digital experiences that speak to the subconscious,
									creating profound connections through purposeful simplicity.
								</p>
							</div>
						</div>
					</div>

					<div className="flex justify-center lg:justify-end">
						<div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square">
							<div className="absolute inset-0 bg-white/8 blur-2xl sm:blur-3xl scale-110 sm:scale-125" />
							<div className="relative w-full h-full">
								<PulsingBorderShader />
							</div>
							<div
								className="hidden sm:block absolute -top-6 -right-6 w-1 h-1 bg-white/60 rounded-full animate-pulse"
								style={{ animationDelay: "0s" }}
							/>
							<div
								className="hidden sm:block absolute top-1/3 -left-8 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"
								style={{ animationDelay: "2s" }}
							/>
							<div
								className="hidden sm:block absolute bottom-1/4 -right-10 w-1 h-1 bg-white/50 rounded-full animate-pulse"
								style={{ animationDelay: "4s" }}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
				<div className="flex items-center gap-6">
					<p className="text-xs text-white/30 font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase">
						Coming Soon
					</p>
					<div className="flex items-center gap-4 text-white/40">
						<a
							href="https://github.com/singularityworks-xyz"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-1 hover:text-white/80 transition-colors text-xs"
							aria-label="GitHub"
						>
							<svg
								className="w-4 h-4 opacity-60 group-hover:opacity-90"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19a11.2 11.2 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.11 3.04.75.81 1.2 1.85 1.2 3.11 0 4.43-2.71 5.41-5.29 5.69.42.36.8 1.07.8 2.17 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="tracking-wider">GitHub</span>
						</a>
						<a
							href="https://www.linkedin.com/company/singularityworks-web"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-1 hover:text-white/80 transition-colors text-xs"
							aria-label="LinkedIn"
						>
							<svg
								className="w-4 h-4 opacity-60 group-hover:opacity-90"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM14.25 9c-2.03 0-3.25 1.12-3.25 1.12V9H7v12h4v-6.5c0-.41.34-1.5 1.75-1.5s1.75 1.09 1.75 1.5V21h4v-7.25C18.5 10.35 16.61 9 14.25 9Z" />
							</svg>
							<span className="tracking-wider">LinkedIn</span>
						</a>
					</div>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
		</div>
	);
}

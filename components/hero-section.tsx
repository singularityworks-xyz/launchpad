import PulsingBorderShader from "./pulsing-border-shader";

export default function Component() {
	return (
		<div className="min-h-screen bg-black text-white overflow-hidden relative">
			{/* Subtle glow effects */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
			</div>

			{/* Hero content */}
			<div className="relative z-10 container mx-auto px-4 py-20">
				<div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
					<div className="space-y-8 lg:pr-8">
						{/* Glassmorphic container */}
						<div className="backdrop-blur-sm bg-white/3 rounded-3xl p-8 lg:p-12 shadow-2xl">
							<div className="space-y-8">
								{/* Agency name */}
								<div className="space-y-2">
									<h1 className="text-4xl lg:text-6xl font-clash font-light tracking-wide text-white">
										SINGULARITY
									</h1>
									<div className="text-lg lg:text-xl font-clash font-light text-white/70 tracking-widest">
										WORKS
									</div>
								</div>

								{/* Design psychology statement */}
								<div className="space-y-4">
									<p className="text-lg lg:text-xl text-white/80 leading-relaxed font-light">
										Where minimalism meets psychology.
									</p>
									<p className="text-sm lg:text-base text-white/60 leading-relaxed font-light">
										We craft digital experiences that speak to the subconscious,
										creating profound connections through purposeful simplicity.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-center lg:justify-end">
						<div className="relative">
							{/* Subtle white glow behind shader */}
							<div className="absolute inset-0 bg-white/8 blur-3xl scale-125" />

							{/* Main shader component */}
							<div className="relative">
								<PulsingBorderShader />
							</div>

							<div
								className="absolute -top-6 -right-6 w-1 h-1 bg-white/60 rounded-full animate-pulse"
								style={{ animationDelay: "0s" }}
							/>
							<div
								className="absolute top-1/3 -left-8 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"
								style={{ animationDelay: "2s" }}
							/>
							<div
								className="absolute bottom-1/4 -right-10 w-1 h-1 bg-white/50 rounded-full animate-pulse"
								style={{ animationDelay: "4s" }}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Subtle coming soon text at bottom center */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
				<p className="text-xs text-white/30 font-light tracking-[0.3em] uppercase">
					Coming Soon
				</p>
			</div>

			{/* Bottom fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
		</div>
	);
}

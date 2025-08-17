import PulsingBorderShader from "./pulsing-border-shader";

export default function Component() {
	return (
		<div className="min-h-screen bg-black text-white overflow-hidden relative">
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-white/5 rounded-full blur-2xl sm:blur-3xl" />
				<div className="absolute bottom-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-white/3 rounded-full blur-2xl sm:blur-3xl" />
			</div>

			<div className="relative z-10 container mx-auto px-4 py-16 sm:py-20">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] lg:min-h-[80vh]">
					<div className="space-y-8 lg:pr-8">
						<div className="backdrop-blur-sm bg-white/3 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
							<div className="space-y-8">
								<div className="space-y-2">
									<h1 className="text-4xl lg:text-6xl font-clash font-light tracking-wide text-white">
										SINGULARITY
									</h1>
									<div className="text-lg lg:text-xl font-clash font-light text-white/70 tracking-widest">
										WORKS
									</div>
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

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
				<p className="text-xs text-white/30 font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase">
					Coming Soon
				</p>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
		</div>
	);
}

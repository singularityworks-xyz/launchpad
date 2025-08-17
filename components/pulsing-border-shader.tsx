import { PulsingBorder } from "@paper-design/shaders-react"

export default function PulsingBorderShader(props) {
  return (
    <PulsingBorder
      colors={["#FFFFFF", "#E5E5E5", "#CCCCCC", "#B3B3B3"]}
      colorBack="#00000000"
      speed={1.2}
      roundness={1}
      thickness={0.03}
      softness={0.15}
      intensity={0.8}
      spotsPerColor={3}
      spotSize={0.08}
      pulse={0.15}
      smoke={0.3}
      smokeSize={1.5}
      scale={0.7}
      rotation={0}
      frame={9161408.251009725}
      {...props}
      style={{
        width: "535px",
        height: "511px",
        borderRadius: "0px",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 70%)",
      }}
    />
  )
}

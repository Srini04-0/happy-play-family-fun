
import { Float, Sphere } from '@react-three/drei'

export default function BackgroundElements() {
  return (
    <>
      {Array.from({ length: 15 }, (_, i) => (
        <Float key={i} speed={0.2} rotationIntensity={0.05} floatIntensity={0.1}>
          <Sphere 
            position={[
              (Math.random() - 0.5) * 25,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 25 - 8
            ]} 
            args={[0.05, 16, 16]}
          >
            <meshStandardMaterial color="#f5f5f7" opacity={0.4} transparent />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

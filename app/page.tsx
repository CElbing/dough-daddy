import dynamic from 'next/dynamic'

const BonsaiCanvas = dynamic(
  () => import('./components/Scene/BonsaiCanvas'),
  { ssr: false }
)

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <BonsaiCanvas />
    </main>
  )
}

import BonsaiCanvas from "./components/Scene/BonsaiCanvas"
import WelcomeBanner from "./components/WelcomeBanner"

export default function Home() {
  return (
    <>
      <main style={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: "hidden",
        position: "fixed",
        zIndex: 2,
        pointerEvents: "none"
      }}>
        <WelcomeBanner />
      </main >

      <BonsaiCanvas />
    </>
  )
}
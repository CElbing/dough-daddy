import BonsaiCanvas from "./components/Scene/BonsaiCanvas";
import WelcomeBanner from "./components/WelcomeBanner";

export default function Home() {
  return (
    <>
      <main
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <WelcomeBanner />
        <BonsaiCanvas />
      </main>
    </>
  );
}

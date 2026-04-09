{
  /* This is the welcome banner component that is first seen when the page loads */
}
export default function WelcomeBanner() {
  return (
    <div className="flex justify-center w-full">
      <div id="welcome-banner-container" className="text-center w-6/12">
        <h1 className="font-display text-9xl">Welcome Cole</h1>
        <p className="p-8 mx-[10%]">
          <i>
            {" "}
            I have been crucified with Christ and I no longer live, but Christ
            lives in me. The life I live in the body, I live by faith in the Son
            of God, who loved me and gave himself for me.{" "}
          </i>
        </p>
        <h3 className="">- Galatians 2:20</h3>
      </div>
    </div>
  );
}

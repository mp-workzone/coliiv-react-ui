// import hero from "../assets/home-hero.webp";
function Hero() {
  return (
    <section className="home-hero hero-section">
      <div className="container">
        <div className="hero-title">
          <h1 className="hero-title__primary">
            <span className="slice landscape"></span>
            El hogar para los
            <span className="hero-title__secondary">Nómadas Digitales</span>
          </h1>
        </div>
        <a className="scroll-down" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="127.576"
            height="127.576"
            viewBox="0 0 127.576 127.576"
          >
            <g id="scroll-down" transform="translate(-308.364 -234.091)">
              <path
                id="Path_2497"
                data-name="Path 2497"
                d="M309.364,297.879a62.786,62.786,0,1,0,21.578-47.373"
                fill="none"
                stroke="#9eb255"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                id="Path_2499"
                data-name="Path 2499"
                d="M590.2,531.917l19.19-19.636H592.023v-8.7h33v32.592h-8.3V518.354l-19.839,19.839Z"
                transform="translate(893.036 -309.73) rotate(90)"
                fill="none"
                stroke="#9eb255"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;

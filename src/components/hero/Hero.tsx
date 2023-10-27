import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>CHAD J CAMPBELL</h2>
          <h1>Full Stack Web Developer</h1>
          <div className="buttons">
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="scroll wheel" />
        </div>
      </div>
      <div className="slidingTextContainer">Code - Create - Innovate</div>
      <div className="imageContainer">
        <img src="/cyberChadHero-noBG.png" alt="Chads Hero Image" />
      </div>
    </div>
  );
};

export default Hero;

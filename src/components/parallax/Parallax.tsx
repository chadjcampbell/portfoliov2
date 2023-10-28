import "./parallax.scss";

type ParallaxProps = {
  type: string;
};

const Parallax = ({ type }: ParallaxProps) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <h3>{type === "skills" ? "Tools in the toolbelt" : "My latest works"}</h3>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  );
};

export default Parallax;

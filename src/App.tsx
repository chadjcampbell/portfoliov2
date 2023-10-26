import "./app.scss";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
      </section>
      <section id="Skills">Parallax</section>
      <section>Skills</section>
      <section id="Projects">Parralax</section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;

import "./first.css";
import foto from "../../assets/img/pablo.jpg";
import reactImg from "../../assets/img/react.svg";
import jsImg from "../../assets/img/js.svg";

export default function First() {
  return (
    <>
      <header>
        <h1>Lading Page</h1>
      </header>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Sobre mi</li>
        </ul>
      </nav>
      <section>
        <div>
          <h2>Pablo Rivas</h2>
          <p>
            Software analyst and developer with extensive knowledge in
            Javascript, Python, React, MySQL, PostrgesSQL, data analysis,
            testing, debugging, software quality and more.
          </p>
          <button>Send Message</button>
        </div>
        <img src={foto} alt="fotografia pablo rivas" />
      </section>
      <article>
        <h2>Tecnologias manejadas</h2>
        <div>
          <img src={reactImg} alt="react svg" />
          <img src={jsImg} alt="javascript sgv" />
        </div>
      </article>
      <footer></footer>
    </>
  );
}

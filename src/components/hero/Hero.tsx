import "./hero.css"
export default function Hero() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm NDOPING WILSON</h1>
        <h2>Full stack developer</h2>
        <p>I create beautiful, functional, and responsive web applications with a focus on user experience.</p>
        <div className="home-buttons">
          <a href="projects" className="btn primary">View My Work</a>
          <a href="contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
     
    </section>
  );
}

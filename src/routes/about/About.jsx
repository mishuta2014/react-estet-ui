import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="textContainer">
        <h1>About Us</h1>
        <ul>
          <li>
            📚 Looking to publish your masterpiece? Look no further! Introducing
            Book Agent, your gateway to literary success!
          </li>
          <li>
            🔍 Are you an aspiring author seeking to navigate the complex world
            of publishing?  With Book Agent, you'll have a seasoned professional
            by your side, guiding you through every step of the process.
          </li>
          <li>
            📝 Our team of experienced literary agents specializes in finding
            the perfect home for your book, whether it's fiction, non-fiction,
            or something in between.
          </li>
          <li>
            💡 From manuscript evaluation to securing the best publishing deals,
            we're committed to helping you achieve your dreams of becoming a
            published author.
          </li>
          <li>
             🤝 Join forces with Book Agent today and let us help turn your
            writing aspirations into reality! Contact us now to schedule your
            consultation and take the first step towards literary success.
          </li>
        </ul>
      </div>
      <div className="imgContainer">
        <img src="/face.png" alt="" />
      </div>
    </div>
  );
}

export default About;

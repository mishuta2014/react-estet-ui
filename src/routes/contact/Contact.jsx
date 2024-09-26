import "./contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Contact Us</h1>
        <div className="email">
          <form action="">
            <input className="emailIn" type="email" placeholder="Enter email" />
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter message" />
            <button>
              <h4>Submit</h4>
            </button>
          </form>
        </div>
      </div>
      <div className="linkContainer">
        <div className="links">
          <a href="https://www.instagram.com/bodya.goat">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.facebook.com/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.pinterest.com/">
            <img src="/pinterest.png" alt="" />
          </a>
          <a href="https://www.dribbble.com/">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
        <img className="env" src="./public/envelope.png" alt="" />
      </div>
    </div>
  );
}

export default Contact;

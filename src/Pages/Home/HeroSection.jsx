import { Link } from "react-scroll";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Sajjad khan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </p>
        </div>
        <Link to="Contact" spy={true} smooth={true}>
        <button className="btn btn-primary" >Get In Touch</button>
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/image1.jpeg" alt="Hero Section" style={{width: '600px', height: '600px' , borderRadius: '20px'}} />
      </div>
    </section>
  );
}

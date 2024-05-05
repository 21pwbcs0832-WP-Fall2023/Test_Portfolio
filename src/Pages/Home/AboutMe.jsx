export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/image2.jpeg" alt="About Me" style={{width: '500px', height: '600px' , borderRadius: '50%'}} />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I'm a React frontend developer, crafting websites and apps that folks find super cool. With React, I make things look great and work smoothly, aiming to make the internet fun and easy for everyone to navigate. So, let's create some digital wonders together!
          </p>
          <p className="hero--section-description">
           Collaborating with my awesome team to build fantastic websites and apps. With React, we make things look awesome and function smoothly, ensuring everyone enjoys a seamless digital experience. Together, we're turning ideas into reality and making the web a better place!
          </p>
        </div>
      </div>
    </section>
  );
}

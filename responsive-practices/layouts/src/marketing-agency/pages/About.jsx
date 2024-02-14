// image import
import goggles from "../images/goggles.jpg";

function About() {
  return (
    <main className="main-template main-grid">
      <h1 className="page-title">About us. </h1>
      <p className="subtitle">
        We are two brothers from Chicago. We can help you with SEO, SEM, content
        marketing and whatever else.
      </p>
      <img className="main-image" src={goggles} alt="goggles" />
      <div className="main-text">
        <h2 className="info-title">We are really great guys</h2>
        <p>
          We grew up in downtown Chicago, and we used to play in a band. Jake
          loves fried chicken, and Elwood loves dry white toast.
        </p>
        <p>
          While the band did not make it, the hard work we put in trying to
          promote it sure did. Like a lot of people, we needed a website, and we
          needed to rank. The experts did not seem to know what they were
          talking about, so we figured it out on our own.
        </p>
        <h2 className="info-title"> We can do all sorts of great stuff</h2>
        <p>
          Honestly most people in this industry seem to be full of crap. We do
          not care what you have heard, or what others have told you, we get
          results and at the end of the day, what else matters?
        </p>
        <p>
          So sure, maybe we are a bit different from what you would expect, but
          if you want to rank, market, and build your way to the top, we are the
          brothers for you.
        </p>
      </div>
    </main>
  );
}

export default About;

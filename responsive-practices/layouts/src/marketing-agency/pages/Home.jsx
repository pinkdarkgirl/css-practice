function Home() {
  return (
    <main>
      <section className="intro main-grid">
        <h2 className="intro-title">
          The only marketing agency on <span> a mission from God,</span> fully
          dedicated to increase your web traffic.
        </h2>
        <p className="intro-subtitle">
          We are two brothers from Chicago that are trying to pay back our debt.
          We can help you with <strong>SEO, SEM, content marketing</strong> and
          whatever else.
        </p>
        <button className="btn btn-primary">contact us</button>
      </section>

      <section className="info main-grid">
        <div className="info-item">
          <h3 className="info-title info-title-center">About Us</h3>
          <p className="info-body">
            We grew up in downtown Chicago, and we used to play in a band. Jake
            loves fried chicken, and Elwood loves dry white toast.
          </p>
        </div>
        <div className="info-item">
          <h3 className="info-title info-title-center">Our skills </h3>
          <p className="info-body">
            Elwood is an expert in SEO, SEM, and driving from the police. Jake
            is our social media specialist, and he has an amazing voice.
          </p>
        </div>
        <div className="info-item">
          <h3 className="info-title info-title-center">Get in touch</h3>
          <p className="info-body">
            Send us an email with some info about what help you need and we will
            drive over to your place in our Bluesmobile the following day to
            discuss the deal.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;

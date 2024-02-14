import "./FlexCard.css";

function FlexCard() {
  return (
    <div className="card">
      <img src="./images/tech.jpg" alt="tech" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">
          7 tech tips and tricks that you need to know
        </h2>
        <p className="card-body">
          Using these 7 proven tips from experts in the industry, you can save
          time, money and more!
        </p>
        <div className="card-details">
          <p>
            <strong>15</strong> minute <br /> read
          </p>
          <button className="card-btn">read more</button>
        </div>
      </div>
    </div>
  );
}

export default FlexCard;

import "./GridCard.css";

function GridCard() {
  return (
    <div className="card">
      <img src="./images/tech.jpg" alt="tech" className="card-img" />
      <h2 className="card-title">
        7 tech tips and tricks that you need to know
      </h2>
      <p className="card-body">
        Using these 7 proven tips from experts in the industry, you can save
        time, money and more!
      </p>
      <p className="card-read-time">
        <strong>15</strong> minute <br /> read
      </p>
      <button className="card-btn">read more</button>
    </div>
  );
}

export default GridCard;

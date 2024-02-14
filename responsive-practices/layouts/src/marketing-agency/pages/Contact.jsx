// image import
import contact from "../images/contact.jpg";

function Contact() {
  return (
    <main className="main-template main-grid">
      <h1 className="page-title">Contact.</h1>
      <p className="subtitle">
        Let us know how we can help you need and we will drive over to your
        place in our Bluesmobile the following day to discuss the deal.
      </p>

      <img className="main-image" src={contact} alt="mailboxes" />
      <div className="secondary-text">
        <h2 className="info-title">Getting in touch with us</h2>
        <p>
          You can either use the form or send us an email. I will get back in
          touch with you as soon as possible!
        </p>
      </div>

      <div className="main-text">
        <form className="contact-form">
          <label className="fname-label">First Name:</label>
          <input className="fname-input" type="text" name="fname" />

          <label className="lname-label">Last Name:</label>
          <input className="lname-input" type="text" name="lname" />

          <label className="message-label">Message:</label>
          <textarea className="message-textarea" name="message"></textarea>

          <button className="btn btn-primary btn-form">send</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;

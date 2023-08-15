import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us !</h1>
      <form>
        <input placeholder="Enter Name"></input>
        <input placeholder="Enter Email"></input>
        <input placeholder="Your Subject"></input>
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;

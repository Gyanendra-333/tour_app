import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Global affair</h1>
          <p>Choose Your Favourite Destination.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/">Change Log</a>
          <a href="/">Status</a>
          <a href="/">Licence</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Projects</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Projects</a>
          <a href="/">twitter</a>
        </div>
        <div>
          <h4>Projects</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
          <a href="/">About Us</a>
        </div>
        <div>
          <h4>Projects</h4>
          <a href="/">Terms of Condition</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Visit Website</a>
          <a href="/">Many More...</a>
        </div>
      </div>
    </div>
  );
}
export default Footer;

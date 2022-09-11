import React from "react";
import "../../Styles/Home/footer.css";
import udemyLogo from "../../Images/Udemy.png";

function footer() {
  return (
    <footer className="footer pt-5 pb-5 text-left h-auto">
      <div className="row">
        <div className="sm col col-lg-3 col-md-4 col-sm-12 show-sm">
          <button className="footer-lang">English</button>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-3">
          <div>
            <a href="" className="footer-link">
              <p>Udemy Business</p>
            </a>
            <a href="" className="footer-link">
              <p>Teach on Udemy</p>
            </a>
            <a href="" className="footer-link">
              <p>Get the app</p>
            </a>
            <a href="" className="footer-link">
              <p>About us</p>
            </a>
            <a href="" className="footer-link">
              <p>Contact us</p>
            </a>
          </div>

          <div className="footer-logo sm">
            <img src={udemyLogo} alt="Udemy logo" />
          </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-3">
          <div>
            <a href="" className="footer-link">
              <p>Careers</p>
            </a>
            <a href="" className="footer-link">
              <p>Blog</p>
            </a>
            <a href="" className="footer-link">
              <p>Help and Support</p>
            </a>
            <a href="" className="footer-link">
              <p>Affiliate</p>
            </a>
            <a href="" className="footer-link">
              <p>Investors</p>
            </a>
          </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-3">
          <div>
            <a href="" className="footer-link">
              <p>Terms</p>
            </a>
            <a href="" className="footer-link">
              <p>Privacy Policy</p>
            </a>
            <a href="" className="footer-link">
              <p>Cookie Settings</p>
            </a>
            <a href="" className="footer-link">
              <p>Sitemap</p>
            </a>
            <a href="" className="footer-link">
              <p>Accessibility statement</p>
            </a>
          </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-3 sm">
          <button className="footer-lang">English</button>
          <p className="copyright">© 2022 Udemy, Inc.</p>
        </div>

        <div className="col col-lg-3 col-md-4 col-sm-4 show-sm">
          <div className="footer-logo show-sm">
            <img src={udemyLogo} alt="Udemy logo" />
          </div>
          <p className="copyright">© 2022 Udemy, Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default footer;

import React from "react";
import "./style.css";
export default function Footer() {
  return (
    <>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget company_widget wow fadeInLeft widget_a"
                  data-wow-delay="0.2s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Get in Touch
                  </h3>
                  <p>Don't hesitate to ask query!</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft widget_a"
                  data-wow-delay="0.4s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Android App</a>
                    </li>
                    <li>
                      <a href="#">ios App</a>
                    </li>
                    <li>
                      <a href="#">Desktop</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">My tasks</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft widget_a"
                  data-wow-delay="0.6s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; conditions</a>
                    </li>
                    <li>
                      <a href="#">Reporting</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                    <li>
                      <a href="#">Support Policy</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft widget_a"
                  data-wow-delay="0.8s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Social Media
                  </h3>
                  <div className="f_social_icon">
                    <a href="#" className="insta icon">
                      <img
                        className="icon_all"
                        src={require("./Images/insta.jpg")}
                        alt="Instagram"
                      />
                    </a>

                    <a href="#" className="twitter icon">
                      <img
                        className="icon_all"
                        src={require("./Images/twitter.jpg")}
                        alt="Twitter"
                      />
                    </a>
                    <a href="#" className="linkedin icon">
                      <img
                        className="icon_all"
                        src={require("./Images/linkedin.png")}
                        alt="Linkedin"
                      />
                    </a>
                    <a href="#" className="insta icon">
                      <img
                        className="icon_all"
                        src={require("./Images/yt.jpg")}
                        alt="youtube"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">
                  © HeptaDiagnostics. 2024 All rights reserved.
                </p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right">
                <p>
                  Made by{" "}
                  <a href="https://www.linkedin.com/in/amar-vagare-a28b691a3">
                    Amar Vagare
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="whatsapp_div">
        <a className="whatsapp-button" href="https://wa.link/gnxsv4">
          <img
            className="whatsapp_img"
            src={require("./Images/whatsapp.png")}
            alt="whatsapp_img"
          />
        </a>
        <span>Contact Us</span>
      </div>
    </>
  );
}

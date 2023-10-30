import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="headersection">
          <h1 className="head2">Pramod Bhoi</h1>
          <h2 className="head3">Web Developer</h2>

          <h2 className="h22">
            <button className="headerbtn">
              <a href="tel:+919403294618">CONTACT ME</a>
            </button>
          </h2>
        </div>
      </div>

   
      <div className="innerdiv">
        <h1>About Me</h1>
        <p>
          Meeting with the development team to discuss user interface ideas and
          applications.
          <br />
          Reviewing application requirements and interface designs.
          <br />
          Identifying web-based user interactions.
          <br />
          Developing and implementing highly responsive user interface
          components using react concepts.
          <br />
          Writing application interface codes using JavaScript following
          react.js workflows.
          <br />
          Troubleshooting interface software and debugging application codes.
          <br />
          Developing and implementing front-end architecture to support user
          interface concepts.
          <br />
          Monitoring and improving front-end performance.
          <br />
          Documenting application changes and developing updates.
          <br />
          Knowledge of Firebase ,Fire-store and Email.js
        </p>
        <button className="downloadresume">
          <a href="https://profile.indeed.com/document/view">
            {" "}
            Download Resume
          </a>
        </button>
      </div>
   

      <div className="sec">
        <h1 className="skills">SKILLS</h1>
        <section className="secsec">
          <div className="secdiv">
            <ruby>
              <rt>
                HTML <br />
                ⭐⭐⭐⭐
              </rt>
            </ruby>
          </div>
          <div className="secdiv">
            <ruby>
              <rt>
                CSS <br />
                ⭐⭐⭐⭐
              </rt>
            </ruby>
          </div>
          <div className="secdiv">
            <ruby>
              <rt>
                JAVASCRIPT <br />
                ⭐⭐⭐⭐
              </rt>
            </ruby>
          </div>
          <div className="secdiv">
            <ruby>
              <rt>
                PYTHON <br />
                ⭐⭐⭐⭐
              </rt>
            </ruby>
          </div>
          <div className="secdiv">
            <ruby>
              <rt>
                BOOTSTRAP <br />
                ⭐⭐⭐
              </rt>
            </ruby>
          </div>
          <div className="secdiv">
            <ruby>
              <rt>
                REACT <br />
                ⭐⭐⭐⭐
              </rt>
            </ruby>
          </div>
          <div className="secdiv">
            <ruby>
              <rt>
                REACT-BOOTSTRAP <br />
                ⭐⭐⭐
              </rt>
            </ruby>
          </div>
          <div className="secdiv">
            <ruby>
              <rt>
                REACT-NATIVE <br />
                ⭐⭐⭐
              </rt>
            </ruby>
          </div>
          <div className="secdiv">
            <ruby>
              <rt>
                FIREBASE <br />
                ⭐⭐⭐
              </rt>
            </ruby>
          </div>
          <div className="secdiv">
            <ruby>
              <rt>
                NETLIFY <br />
                ⭐⭐⭐⭐
              </rt>
            </ruby>
          </div>
        </section>
      </div>

      <div className="footer">
        <section className="footersec">
          <div className="footdiv1">
            <h1 className="getintouch">Get In Touch</h1>
            <p>pramodbhoi.bhoi98@gmail.com</p>
            <p>+919403294618</p>
          </div>
          <div className="footdiv2">
            <h2>
              <button id="headerbtn">
                <a href="https://netflix-clone-ehgd.netlify.app/">
                  Movie Website
                </a>
              </button>
            </h2>
            <h2>
              <button id="headerbtn">
                <a href="https://ecommerse-clone-website.netlify.app/">
                  Ecom Website
                </a>
              </button>
            </h2>
            <h2>
              <button id="headerbtn">
                <a href="https://zoom-meet-clone.netlify.app/">
                  VideocallWebsite
                </a>
              </button>
            </h2>
            <h2>
              <button id="headerbtn">
                <a href="https://pixabay.com/">Pixabay website</a>
              </button>
            </h2>
            <h2>
              <button id="headerbtn">
                <a href="https://ecommerse-clone-website.netlify.app/">
                  Contact website
                </a>
              </button>
            </h2>
            <h2>
              <button id="headerbtn">
                <a href="https://ecommerse-clone-website.netlify.app/">
                  B'day Website
                </a>
              </button>
            </h2>
            <h2>
              <button id="headerbtn">
                <a href="https://birthaday-clone.netlify.app/">
                  Weather website
                </a>
              </button>
            </h2>
            <h2>
              <button id="headerbtn">
                <a href="https://ecommerse-clone-website.netlify.app/">
                  Piano Website
                </a>
              </button>
            </h2>
          </div>

          <div className="footerdiv3">
            <article className="articon">
              <div className="ficon">
                <a href="https://www.linkedin.com/in/pramod-bhoi-8473b9242/"></a>
              </div>
              <div className="ficon">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="ficon">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="ficon">
                <i className="fa-brands fa-twitter"></i>
              </div>
            </article>
            <br />

            <p className="copyright">@copywrite pramodBhoi</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;

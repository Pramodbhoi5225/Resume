import React from "react";
import "./Navbar.css";
const Navabar = () => {

  function toggleOn(){
    let drawer = document.querySelector(".drawer");
    let drawerClose = document.querySelector(".toggleOff");
    drawer.style.display="block";
    drawerClose.style.display="block";
  }

  function toggleOff(){
    let drawerClose = document.querySelector(".toggleOff");
    let drawer = document.querySelector(".drawer");
    drawer.style.display="none";
    drawerClose.style.display="none";
  }


  return (
    <div className="navBody">
          <nav className="navbar">
          <div className="logo">
            <h2 className="head1">PB</h2>
          </div>
          <div className="toggle" onClick={()=> toggleOn()}>
            <big>=</big>
          </div>

          <div className="navarticle">
            <div className="article">Home</div>
            <div className="article">About</div>
            <div className="article">Contact</div>
            <div className="article">Home</div>
          </div>

          <div className="navicon">
            <div className="icon">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="icon">
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className="icon">
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
      </nav>

      <div className="drawer">

          <div className="toggleOff" onClick={()=> toggleOff()}>
            <big>❌</big>
          </div>
        <div className="toggleArticle">
              <div className="article">Home</div>
              <div className="article">About</div>
              <div className="article">Contact</div>
              <div className="article">Home</div>
            </div>

            <div className="toggleavicon">
              <div className="icon">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="icon">
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <div className="icon">
                <i class="fa-brands fa-twitter"></i>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Navabar;

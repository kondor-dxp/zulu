const Header = () => {
      return (
  
        <header id="header" className="header sticky-top">
          {/* <div className="topbar d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
              <div className="contact-info d-flex align-items-center">
                <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
              </div>
              <div className="social-links d-none d-md-flex align-items-center">
                <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
                <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div> */}
          <div className="branding d-flex align-items-cente">
            <div className="container position-relative d-flex align-items-center justify-content-between">
              <a href="/" className="logo d-flex align-items-center">
                {/* Uncomment the line below if you also wish to use an image logo */}
                <img src="images/zuluLogo.png" alt=""/>
                {/* <h1 className="sitename">Zulu Consulting</h1> */}
              </a>
              <nav id="navmenu" className="navmenu">
                <ul>
                  <li><a href="#hero" className="active">HOME</a></li>
                  <li><a href="#services">SERVICES</a></li>
                  <li><a href="#about">ABOUT US</a></li>
                  <li><a href="#contact">CONTACT</a></li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list" />
              </nav>
            </div>
          </div>
        </header>
      );
    }
  export default Header
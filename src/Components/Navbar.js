import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Img from "../logo.png";
function Navbar() {
  const countItem = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light d-flex justify-content-center border-bottom border-info">
        <div className="container ">
          <Link to="/" className="navbar-brand" href="#">
            <img
              src={Img}
              style={{ width: "45px", height: "45px" }}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="monitor"
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Monitor
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Laptop <i className="bi bi-laptop "></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="laptop"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Laptop<i className="bi bi-laptop icon-size"></i>
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link
                      to="headset"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Headset<i className="bi bi-headset icon-size"></i>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      to="mouse"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Mouse<i className="bi bi-mouse icon-size"></i>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      to="keyborad"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Keyboard<i className="bi bi-keyboard icon-size"></i>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mobile <i className="bi bi-phone "></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="headphone"
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Headphones<i className="bi bi-headphones icon-size"></i>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      to="mobile"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Mobile<i className="bi bi-phone-vibrate icon-size"></i>
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link
                      to="tablet"
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Tablet<i className="bi bi-tablet-landscape"></i>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="cart" className="count-parnt">
            <i className="bi bi-bag-heart icon-size"></i>
            <span className="count" id="count">
              {countItem.length}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

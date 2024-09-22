import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* assets */
import logoHeader from "../Assets/ForHeader/Desctop/logoHeader.png";
import mobile from "../Assets/ForHeader/Desctop/iconMobile.png";
import date from "../Assets/ForHeader/Desctop/iconDate.png";
/* assets */

/* routes */
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import { Botulinoterapia } from "../Pages/Services_pages/botulinoterapia";
import ERROR_404 from "../Pages/Error_404";
/* import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Reviews from "../Pages/Reviews";
import Price from "../Pages/Price";
import Questions from "../Pages/Questions";
import { Botulter } from "../Pages/Services/Botulter";
import ReviewsPopUp from "./ReviewsPopUp/ReviewsPopUp";
import QuestionsPopUp from "./QuestionsPopUp/QuestionsPopUp";
import ERROR_404 from "../Pages/Error_404"; */
/* routes */

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid" id="header-container">
              <a className="" href="/">
                <img src={logoHeader} alt="logo" className="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="header-mobile d-md-none">
                <img src={mobile} alt="mobile" />
                <span className="header-mobile-text">+7 (906) 115-85-78</span>
              </div>
              <div
                className="collapse navbar-collapse container-fluid"
                id="navbarContent"
              >
                <div className="row" id="navbarRow">
                  <div className="col-12 col-sm-12 col-md-10 col-lg-8">
                    <ul
                      className="navbar-nav list-unstyled align-top"
                      id="header-ul"
                    >
                      <li className="nav-item active">
                        <a
                          className="nav-link text-decoration-none text-reset"
                          href="/"
                        >
                          Главное
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-decoration-none text-reset"
                          href="/about me"
                        >
                          Обо мне
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-decoration-none text-reset"
                          href="/services"
                        >
                          Услуги
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-decoration-none text-reset"
                          /* href="/reviews" */
                          data-bs-toggle="modal"
                          href="#Reviews"
                        >
                          Отзывы
                        </a>
                        {/* <ReviewsPopUp /> */}
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-decoration-none text-reset"
                          href="/price"
                        >
                          Прайс
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-decoration-none text-reset"
                          /* href="/questions" */
                          data-bs-toggle="modal"
                          href="#Questions"
                        >
                          Вопросы
                        </a>
                        {/* <QuestionsPopUp /> */}
                      </li>
                    </ul>
                  </div>
                  <div className="d-lg-block d-none col-lg-4 align-self-end">
                    <form className="d-flex text-end" id="forms">
                      <button className="" type="submit">
                        <img src={mobile} alt="mobile" />
                        +7 (906) 115-85-78
                      </button>
                      <button className="" type="submit">
                        <img src={date} alt="date" /> Пн-Вс 9:00-20:00
                      </button>
                    </form>
                  </div>
                  <div
                    className="d-none d-sm-none d-md-flex d-lg-none col-md-2 bg-succes"
                    id="toolt"
                  >
                    <div className="ttip" style={{ height: "auto" }}>
                      <img className="" src={mobile} alt="mobile" />
                      <span className="tooltiptext">+7 (906) 115-85-78</span>
                    </div>
                    <div className="ttip">
                      <img className="" src={date} alt="date" />
                      <span className="tooltiptext"> Пн-Вс 9:00-20:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about me" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/botulinoterapia"
              element={<Botulinoterapia />}
            />
            <Route path="/error_404" element={<ERROR_404 />} />
            {/* <Route exact path="/reviews" element={<Reviews />} />
            <Route exact path="/price" element={<Price />} />
            <Route exact path="/questions" element={<Questions />} />
            <Route
              exact
              path="/services/botulinoterapia"
              element={<Botulinoterapia />}
            />
            <Route exact path="/error_404" element={<ERROR_404 />} /> */}
          </Routes>
        </Router>
      </>
    );
  }
}

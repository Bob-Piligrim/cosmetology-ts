import React, { Component } from "react";

import logoFooter from "../Assets/ForFooter/Desctop/logoFooter.png";
import footerVK from "../Assets/ForFooter/Desctop/footerVK.png";
import footerTG from "../Assets/ForFooter/Desctop/footerTG.png";
import footerIG from "../Assets/ForFooter/Desctop/footerIG.png";
import footerWP from "../Assets/ForFooter/Desctop/footerWP.png";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="container-fluid bgss">
            <div className="row">
              <div className="d-none d-md-block col-md-12 col-lg-12">
                <div
                  className="row text-white my-4 px-4 py-4 rounded"
                  style={{ backgroundColor: "#2B8069", fontSize: "1.25vw" }}
                >
                  <div className="col-md-6 col-lg-3">
                    <div className="row">
                      <div className="col-md-6 col-lg-12 mb-2">
                        <img src={logoFooter} alt="logoFooter" />
                      </div>
                      <div className="col-md-6 col-lg-12">
                        <p className="mb-30 footer-desc">
                          г. Казань, ул. Зур Урам, 1к, корпус 2 Ежедневно с 9 до
                          20 часа
                        </p>
                        <p className="mb-30 footer-desc">
                          Номер телефона: +7 (953) 480-17-69
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-lg-1 offset-1">
                    <div className="">
                      <ul className="list-unstyled">
                        <li style={{ marginBottom: "2.3%" }}>
                          <a
                            href="/about me"
                            className="text-decoration-none text-reset"
                          >
                            Обо мне
                          </a>
                        </li>
                        <li style={{ marginBottom: "2.3%" }}>
                          <a
                            href="/services"
                            className="text-decoration-none text-reset"
                          >
                            Услуги
                          </a>
                        </li>
                        <li style={{ marginBottom: "2.3%" }}>
                          <a
                            href="/reviews"
                            className="text-decoration-none text-reset"
                          >
                            Отзывы
                          </a>
                        </li>
                        <li>
                          <a
                            href="/price"
                            className="text-decoration-none text-reset"
                          >
                            Прайс
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3">
                    <div>
                      <ul
                        className="list-unstyled"
                        style={{ marginLeft: "10%" }}
                      >
                        <li style={{ marginBottom: "2%" }}>
                          <a
                            href="/services"
                            className="text-decoration-none text-reset"
                          >
                            Инъекционная косметология
                          </a>
                        </li>
                        <li style={{ marginBottom: "2%" }}>
                          <a
                            href="/services"
                            className="text-decoration-none text-reset"
                          >
                            Аппаратная косметология
                          </a>
                        </li>
                        <li style={{ marginBottom: "2%" }}>
                          <a
                            href="/services"
                            className="text-decoration-none text-reset"
                          >
                            Эстетическая косметология
                          </a>
                        </li>
                        <li>
                          <a
                            href="/question"
                            className="text-decoration-none text-reset"
                          >
                            Ответы на вопросы
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                    <div id="Footer_sites">
                      <h4> Мы в соц. сетях</h4>
                      <div id="Footer_sites-img">
                        <a className="me-1" href="https://vk.com/id88404927">
                          <img className="img-fluid" src={footerVK} alt="VK" />
                        </a>
                        <a className="mx-1" href="https://t.me/.89534801769">
                          <img className="img-fluid" src={footerTG} alt="TG" />
                        </a>
                        <a
                          className="mx-1"
                          href="https://www.instagram.com/ganieva_cosmetolog?igsh=MXQwMHRpd20waGpwMw=="
                        >
                          <img className="img-fluid" src={footerIG} alt="IG" />
                        </a>
                        <a className="mx-1" href="https://wa.me/89534801769">
                          <img className="img-fluid" src={footerWP} alt="WP" />
                        </a>
                      </div>
                      <div style={{ marginTop: "2%", fontSize: "1.2vw" }}>
                        * Instagram признан экстремистской организацией
                        и запрещен на территории РФ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-md-none d-lg-none col-12 col-sm-12 rounded"
                style={{ backgroundColor: "#2B8069" }}
              >
                <div
                  className="row mt-3 pb-3"
                  style={{ borderBottom: "0.3px solid #FFF4E3" }}
                >
                  <div className="col-4 col-sm-4 my-1">
                    <img
                      src={logoFooter}
                      alt="logoFooter"
                      style={{
                        width: "calc(100%)",
                        height: "calc(100%)",
                      }}
                    />
                  </div>
                  <div
                    className="col-8 col-sm-8"
                    style={{ color: "white", fontSize: "3.8vw" }}
                  >
                    <div>г. Казань, ул. Зур Урам, 1к, к. 2</div>
                    <div>Ежедневно с 9-20 часа</div>
                    <div>Номер: +7 (953) 480-17-69</div>
                  </div>
                </div>
                <div className="row mt-1 mb-1 pt-3">
                  <div className="col-6 col-sm-6 align-self-center mb-1">
                    <a
                      href="/about"
                      style={{
                        backgroundColor: "#F8C77A",
                        color: "black",
                        padding: 1 + "rem" + 1.5 + "rem",
                        textDecoration: "none",
                        display: "inline-block",
                        borderRadius: 13 + "px",
                        border: 2 + "px",
                        borderStyle: "solid",
                        borderColor: "white",
                        height: 60 + "px",
                      }}
                      id="ahref"
                      className="text-center d-flex align-items-center justify-content-center"
                    >
                      {" "}
                      Обо мне{" "}
                    </a>
                  </div>
                  <div className="col-6 col-sm-6 align-self-center mb-1">
                    <a
                      href="/services"
                      style={{
                        backgroundColor: "#F8C77A",
                        color: "black",
                        padding: 1 + "rem" + 1.5 + "rem",
                        textDecoration: "none",
                        display: "inline-block",
                        borderRadius: 13 + "px",
                        border: 2 + "px",
                        borderStyle: "solid",
                        borderColor: "white",
                        height: 60 + "px",
                      }}
                      id="ahref"
                      className="text-center d-flex align-items-center justify-content-center"
                    >
                      {" "}
                      Услуги{" "}
                    </a>
                  </div>
                </div>
                <div className="row pb-2" style={{ borderBottom: "0.3px solid #FFF4E3" }}>
                  <div className="col-6 col-sm-6 align-self-center mb-2">
                    <a
                      href="/reviews"
                      style={{
                        backgroundColor: "#F8C77A",
                        color: "black",
                        padding: 1 + "rem" + 1.5 + "rem",
                        textDecoration: "none",
                        display: "inline-block",
                        borderRadius: 13 + "px",
                        border: 2 + "px",
                        borderStyle: "solid",
                        borderColor: "white",
                        height: 60 + "px",
                      }}
                      id="ahref"
                      className="text-center d-flex align-items-center justify-content-center"
                    >
                      {" "}
                      Отзывы{" "}
                    </a>
                  </div>
                  <div className="col-6 col-sm-6 align-self-center mb-2">
                    <a
                      href="/price"
                      style={{
                        backgroundColor: "#F8C77A",
                        color: "black",
                        padding: 1 + "rem" + 1.5 + "rem",
                        textDecoration: "none",
                        display: "inline-block",
                        borderRadius: 13 + "px",
                        border: 2 + "px",
                        borderStyle: "solid",
                        borderColor: "white",
                        height: 60 + "px",
                      }}
                      id="ahref"
                      className="text-center d-flex align-items-center justify-content-center"
                    >
                      {" "}
                      Прайс{" "}
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-12 col-sm-12 my-1 pt-2 pb-2"
                    style={{ borderBottom: "0.3px solid #FFF4E3" }}
                  >
                    <a
                      id="ahref"
                      href="/services"
                      className="text-center d-flex align-items-center justify-content-center"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        width: "auto",
                      }}
                    >
                      Инъекционная косметология
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 my-1 pb-2" style={{ borderBottom: "0.3px solid #FFF4E3" }}>
                    <a
                      id="ahref"
                      href="/services"
                      className="text-center d-flex align-items-center justify-content-center"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        width: "auto",
                      }}
                    >
                      Аппаратная косметология
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 my-1 pb-2" style={{ borderBottom: "0.3px solid #FFF4E3" }}> 
                    <a
                      id="ahref"
                      href="/services"
                      className="text-center d-flex align-items-center justify-content-center"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        width: "auto",
                      }}
                    >
                      Эстетическая косметология
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 my-1 pb-2" style={{ borderBottom: "0.3px solid #FFF4E3" }}>
                    <a
                      id="ahref"
                      href="/questions"
                      className="text-center d-flex align-items-center justify-content-center"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        width: "auto",
                      }}
                    >
                      Ответы на вопросы
                    </a>
                  </div>
                </div>
                <div className="row my-1" style={{ color: "white" }}>
                  <div className="col-12 col-sm-12 my-1">
                    <h6 className="text-center">Мы в соц. сетях</h6>
                  </div>
                  <div className="col-12 col-sm-12 my-1 d-flex justify-content-center align-items-center">
                    <a className="me-1" href="/home">
                      <img width={48} height={48} src={footerVK} alt="VK" />
                    </a>
                    <a className="mx-1" href="/home">
                      <img width={48} height={48} src={footerTG} alt="TG" />
                    </a>
                    <a className="mx-1" href="/home">
                      <img width={48} height={48} src={footerIG} alt="IG" />
                    </a>
                    <a className="mx-1" href="/home">
                      <img width={48} height={48} src={footerWP} alt="WP" />
                    </a>
                  </div>
                  <span className="text-center mb-2">
                    * Instagram признан экстремистскими организациями
                    и запрещены на территории РФ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

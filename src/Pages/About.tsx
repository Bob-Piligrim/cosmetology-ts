import React, { Component } from "react";

/* files for page-desctop */

import Alina1 from "../Assets/ForAbout/Desctop/Alina1.png";
import Alina2 from "../Assets/ForAbout/Desctop/Alina2.png";
import linel from "../Assets/ForAbout/Desctop/linel.png";
import liner from "../Assets/ForAbout/Desctop/liner.png";
import ikonkachats from "../Assets/ForAbout/Desctop/ikonkachats.png";
import footerVK from "../Assets/ForFooter/Desctop/footerVK.png";
import footerTG from "../Assets/ForFooter/Desctop/footerTG.png";
import footerIG from "../Assets/ForFooter/Desctop/footerIG.png";
import footerWP from "../Assets/ForFooter/Desctop/footerWP.png";
import robot from "../Assets/ForAbout/Desctop/robot.png";

/* files for page-mobile */

import Alinamob from "../Assets/ForAbout/Mobile/Alinamob.png";
import linelmob from "../Assets/ForAbout/Mobile/linelmob.png";
import linermob from "../Assets/ForAbout/Mobile/linermob.png";
import ikonkachatsmob from "../Assets/ForAbout/Mobile/ikonkachatsmob.png";
import vkMob from "../Assets/ForHome/Mobile/vkMob.png";
import telegramMob from "../Assets/ForHome/Mobile/telegramMob.png";
import instagramMob from "../Assets/ForHome/Mobile/instagramMob.png";
import whatsappMob from "../Assets/ForHome/Mobile/whatsappMob.png";


/* import ConsultationPopUp from "../Components/ConsultationPopUp/ConsultationPopUp"
import ConsultationPopUpMob from "../Components/ConsultationPopUpMob/ConsultationPopUpMob" */

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid" id="osobcont">
          <div className="row">
            <div className="d-none d-md-block col-md-12 mb-4">
              <div className="row">
                <div className="col-md-12 mt-4">
                  <h1
                    className="text-center ffamily"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    Хочу с вами познакомиться
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 justify-content-center align-items-center mt-2">
                  <div className="row">
                    <div className="col-md-12">
                      <select
                        className="form-control-plaintext ps-2 mt-4 mb-2 ms-3 ps-3"
                        style={{
                          border: 2 + "px",
                          borderStyle: "dashed",
                          borderRadius: 13 + "px",
                          height: 6 + "vw",
                          fontSize: 3 + "vw",
                        }}
                      >
                        <option
                          style={{ color: "#602B1D", textDecoration: "none" }}
                        >
                          Обо мне
                        </option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <select
                        className="form-control-plaintext ps-2 mt-4 mb-2 ms-3 ps-3"
                        style={{
                          border: 2 + "px",
                          borderStyle: "dashed",
                          borderRadius: 13 + "px",
                          height: 6 + "vw",
                          fontSize: 3 + "vw",
                        }}
                      >
                        <option
                          style={{ color: "#602B1D", textDecoration: "none" }}
                        >
                          Мой путь
                        </option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <select
                        className="form-control-plaintext ps-2 mt-4 mb-2 ms-3 ps-3"
                        style={{
                          border: 2 + "px",
                          borderStyle: "dashed",
                          borderRadius: 13 + "px",
                          height: 6 + "vw",
                          fontSize: 3 + "vw",
                        }}
                      >
                        <option
                          style={{ color: "#602B1D", textDecoration: "none" }}
                        >
                          Философия
                        </option>
                      </select>
                    </div>
                    <form className="col-item d-flex align-items-center justify-content-center mt-4 ms-3">
                      <button
                        className="btn btn-outline-dark me-1"
                        id="problem-btn"
                        type="submit"
                        style={{ height: 4 + "vw", borderRadius: 13 + "px" }}
                      >
                        Задать вопрос
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="row mt-2">
                    <div className="col-md-6" style={{ paddingRight: 0 }}>
                      <img
                        style={{
                          width: "calc(100% - 16px)",
                          height: "calc(100% - 20px)",
                        }}
                        src={Alina1}
                        alt="Alina1"
                      />
                    </div>
                    <div className="col-md-6 pe-4" style={{ paddingLeft: 0 }}>
                      <img
                        style={{
                          width: "calc(100% - 16px)",
                          height: "calc(100% - 20px)",
                        }}
                        src={Alina2}
                        alt="Alina1"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6" style={{ paddingRight: 0 }}>
                      <img
                        style={{
                          width: "calc(100% - 13px)",
                          height: "calc(100% - 6px)",
                        }}
                        src={linel}
                        alt="linel"
                      />
                    </div>
                    <div className="col-md-6 pe-4" style={{ paddingLeft: 0 }}>
                      <img
                        style={{
                          width: "calc(100% - 13px)",
                          height: "calc(100% - 6px)",
                        }}
                        src={liner}
                        alt="liner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Мобильная версия */}

            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row">
                <div className="col-12 col-sm-12 mt-3">
                  <h1
                    className="text-center ffamily"
                    style={{ color: "#602B1D", fontSize: 9 + "vw" }}
                  >
                    Хочу с вами познакомиться
                  </h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-11 col-sm-11 mt-3">
                  <img className="problem-img" src={Alinamob} alt="Alinamob" />
                </div>
              </div>
              <div
                className="row"
                style={{ margin: 0, paddingRight: 0, paddingLeft: 0 }}
              >
                <div
                  className="col-6 col-sm-6 mt-2 ps-3"
                  style={{ paddingRight: 0 }}
                >
                  <img
                    className="line-img"
                    style={{ height: 13 + "vw" }}
                    src={linelmob}
                    alt="linelmob"
                  />
                </div>
                <div className="col-6 col-sm-6 mt-2 " style={{ paddingLeft: 0 }}>
                  <img
                    className="line-img"
                    style={{ height: 13 + "vw" }}
                    src={linermob}
                    alt="linermob"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-sm-12 d-flex justify-content-center">
                  <select
                    className="form-control-plaintext ps-2 mt-3 mb-2"
                    style={{
                      border: 2 + "px",
                      borderStyle: "dashed",
                      borderRadius: 13 + "px",
                      height: 13 + "vw",
                      width: 88 + "vw",
                      fontSize: 3 + "vw",
                    }}
                  >
                    <option
                      style={{ color: "#602B1D", textDecoration: "none" }}
                    >
                      Обо мне
                    </option>
                  </select>
                </div>
                <div className="col-12 col-sm-12 d-flex justify-content-center">
                  <select
                    className="form-control-plaintext ps-2 mt-1 mb-2"
                    style={{
                      border: 2 + "px",
                      borderStyle: "dashed",
                      borderRadius: 13 + "px",
                      height: 13 + "vw",
                      width: 88 + "vw",
                      fontSize: 3 + "vw",
                    }}
                  >
                    <option
                      style={{ color: "#602B1D", textDecoration: "none" }}
                    >
                      Мой путь
                    </option>
                  </select>
                </div>
                <div className="col-12 col-sm-12 d-flex justify-content-center">
                  <select
                    className="form-control-plaintext ps-2 mt-1 mb-2"
                    style={{
                      border: 2 + "px",
                      borderStyle: "dashed",
                      borderRadius: 13 + "px",
                      height: 13 + "vw",
                      width: 88 + "vw",
                      fontSize: 3 + "vw",
                    }}
                  >
                    <option
                      style={{ color: "#602B1D", textDecoration: "none" }}
                    >
                      Философия
                    </option>
                  </select>
                </div>
                <form className="col-12 col-sm-12 d-flex align-items-center justify-content-center mt-1 mb-3">
                  <button
                    className="btn btn-outline-dark me-1"
                    type="submit"
                    style={{
                      height: 13 + "vw",
                      width: 88 + "vw",
                      borderRadius: 13 + "px",
                    }}
                  >
                    Задать вопрос
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Второй контейнер */}

        <div className="container-fluid">
          <div className="row">
            <div className="d-none d-md-block col-md-12 mb-4">
              <div className="row">
                <div className="col-md-12 mt-2 mb-2">
                  <h1
                    className="ffamily text-left m-1 mb-3"
                    style={{ color: "#602B1D", fontSize: 4.8 + "vw" }}
                  >
                    Основные направления
                  </h1>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-6 d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#2B8069",
                    borderRadius: 13 + "px",
                    border: 2 + "px",
                    borderStyle: "solid",
                    borderColor: "#2B8069",
                    width: "calc(50% - 15px)",
                    height: 45 + "vw",
                  }}
                >
                  <div
                    className="text-center align-self-center lh-1"
                    style={{ fontSize: 3.6 + "vw" }}
                  >
                    Инъекционная косметология
                  </div>
                </div>
                <div className="col-md-6 ms-2">
                  <div className="row">
                    <div
                      className="col-md-12 d-flex justify-content-center align-items-center mb-2"
                      style={{
                        border: 2 + "px",
                        borderStyle: "dashed",
                        borderRadius: 13 + "px",
                        width: "calc(100% - 10px)",
                        height: 22.3 + "vw",
                        borderColor: "#602B1D",
                      }}
                    >
                      <div
                        className="text-center align-self-center lh-1"
                        style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                      >
                        Аппаратная косметология
                      </div>
                    </div>
                    <div
                      className="col-md-12 d-flex justify-content-center align-items-center mb-2"
                      style={{
                        backgroundColor: "#F8C77A",
                        borderColor: "#F8C77A",
                        border: 2 + "px",
                        borderStyle: "dashed",
                        borderRadius: 13 + "px",
                        width: "calc(100% - 10px)",
                        height: 22.3 + "vw",
                      }}
                    >
                      <div
                        className="text-center align-self-center lh-1"
                        style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                      >
                        Эстетическая косметология
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row mt-3">
                <div className="col-12 col-sm-12">
                  <h1
                    className="ffamily text-center"
                    style={{ color: "#602B1D", fontSize: 7.6 + "vw" }}
                  >
                    Основные направления
                  </h1>
                </div>
              </div>
              <div className="row mt-3 justify-content-center align-items-center mb-2">
                <div
                  className="col-12 col-sm-12 d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#2B8069",
                    borderRadius: 13 + "px",
                    border: 2 + "px",
                    borderStyle: "solid",
                    borderColor: "#2B8069",
                    width: "calc(100% - 15px)",
                    height: 33.4 + "vw",
                  }}
                >
                  <div
                    className="text-center align-self-center lh-1"
                    style={{ fontSize: 6 + "vw" }}
                  >
                    Инъекционная косметология
                  </div>
                </div>
              </div>
              <div className="row justify-content-center align-items-center mb-2">
                <div
                  className="col-12 col-sm-12 d-flex justify-content-center align-items-center"
                  style={{
                    borderRadius: 13 + "px",
                    border: 2 + "px",
                    borderColor: "#602B1D",
                    borderStyle: "dashed",
                    width: "calc(100% - 15px)",
                    height: 33.4 + "vw",
                  }}
                >
                  <div
                    className="text-center align-self-center lh-1"
                    style={{ color: "#602B1D", fontSize: 6.2 + "vw" }}
                  >
                    Аппаратная косметология
                  </div>
                </div>
              </div>
              <div className="row justify-content-center align-items-center mb-2">
                <div
                  className="col-12 col-sm-12 d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#F8C77A",
                    borderColor: "#F8C77A",
                    borderRadius: 13 + "px",
                    border: 2 + "px",
                    borderStyle: "dashed",
                    width: "calc(100% - 15px)",
                    height: 33.4 + "vw",
                  }}
                >
                  <div
                    className="text-center align-self-center lh-1"
                    style={{ color: "#602B1D", fontSize: 6 + "vw" }}
                  >
                    Эстетическая косметология
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Третий контейнер */}
        <div className="container-fluid mt-5 mb-3">
          <div className="row">
            <div className="d-none d-md-block col-md-12 justify-content-md-center">
              <h1
                className="col-md-11 text-center ffamily"
                style={{ color: "#602B1D", fontSize: 4.8 + "vw" }}
              >
                Отзывы от моих пациенток
              </h1>
            </div>
            <div className="d-md-none d-lg-none col-12 col-sm-12 justify-content-md-center">
              <h1
                className="col-md-11 text-center ffamily"
                style={{ color: "#602B1D", fontSize: 7.8 + "vw" }}
              >
                Отзывы от пациенток
              </h1>
            </div>
          </div>
          <div className="col-md-12 border" style={{ height: 500 + "px" }}></div>
        </div>
        {/* Четвертый контейнер */}
        <div className="container-fluid" id="osobcont">
          <div className="row">
            <div className="d-none d-md-block col-md-12 mb-4">
              <div className="row pt-5">
                <div className="col-md-4 ps-4">
                  <img
                    className="ps-1"
                    style={{
                      width: "calc(100% - 15px)",
                      height: "calc(100% - 48px)",
                    }}
                    src={ikonkachats}
                    alt="ikonkachats"
                  />
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-11 px-3">
                      <div
                        className="text-center px-2"
                        style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}
                      >
                        Приглашаю вас на консультацию, где мы сможем обсудить
                        ваши цели и подобрать индивидуальный план ухода. Вместе
                        мы добьемся желаемых результатов и найдем ваш истинный
                        блеск! Я уверена, что вы останетесь довольны нашим
                        сотрудничеством и результатами, которые мы достигнем
                        вместе.
                      </div>
                      <div
                        className="text-center px-2 pt-1"
                        style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}
                      >
                        На консультации я проведу детальный анализ вашей кожи,
                        чтобы определить ее состояние и потребности. Мы обсудим
                        ваши пожелания и ожидания, а также разработаем план
                        процедур, который будет направлен на достижение ваших
                        целей. Я всегда готова ответить на ваши вопросы и
                        предоставить рекомендации по уходу за кожей в домашних
                        условиях, чтобы вы могли поддерживать результаты и
                        наслаждаться здоровой и красивой кожей каждый день.
                      </div>
                    </div>

                    <div className="col-md-11 d-flex align-items-center justify-content-center mt-5 mb-5 ms-3">
                      <button
                        className="btn me-1"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#Consultation"
                        style={{
                          backgroundColor: "#F8C77A",
                          border: 1 + "px",
                          borderStyle: "dashed",
                          borderColor: "#602B1D",
                          width: 1460 + "px",
                          height: 60 + "px",
                        }}
                      >
                        Записаться на консультацию
                      </button>
                    </div>
                    {/* <ConsultationPopUp /> */}
                  </div>
                </div>
              </div>
            </div>
            ;{/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12 ms-2 ps-4">
              <div className="row mt-3">
                <div className="col-7 col-sm-7">
                  <div
                    className="text-left lh-sm"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    Приглашаю вас на консультацию, где мы сможем обсудить ваши
                    цели и подобрать индивидуальный план ухода.
                  </div>
                </div>
                <div className="col-5 col-sm-5 pe-4" style={{ paddingLeft: 0 }}>
                  <img src={ikonkachatsmob} alt="ikonkachatsmob" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-9 col-sm-9">
                  <div
                    className="text-left lh-sm"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    Вместе мы добьемся желаемых результатов и найдем ваш
                    истинный блеск! Я уверена, что вы останетесь довольны нашим
                    сотрудничеством и результатами, которые мы достигнем вместе.
                  </div>
                </div>
              </div>
              <div className="row mt-3 mb-3">
                <div className="col-md-12 d-flex align-items-center justify-content-center">
                  <button
                    className="btn me-4"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#ConsultationMob"
                    style={{
                      backgroundColor: "#F8C77A",
                      border: 1 + "px",
                      borderStyle: "dashed",
                      borderColor: "#602B1D",
                      height: 60 + "px",
                      width: "inherit",
                    }}
                  >
                    Записаться на консультацию
                  </button>
                </div>
                {/* <ConsultationPopUpMob/> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="d-none d-md-block col-md-12 mb-4">
              <div className="row">
                <div className="col-md-7" style={{ paddingRight: 0 }}>
                  <div className="row mt-5 pt-3">
                    <div className="col-md-12 lh-1">
                      <div
                        className="ffamily"
                        style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                      >
                        Вся актуальная<br></br> информация в наших<br></br> соц.
                        сетях
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-10">
                      <div style={{ color: "#602B1D", fontSize: 1.2 + "vw" }}>
                        Результаты до/после, специальные предложения, о трендах
                        и антитрендах <br></br> в области эстетической и
                        аппаратной косметологии, а также много другой полезной
                        информации вы получите в моих социальных сетях.
                      </div>
                      <div
                        className="mt-3"
                        style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}
                      >
                        Присоединяйся, не пожалеешь!
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mt-5">
                        <a className="me-3" href="/home">
                          <img
                            className="img-fluid"
                            width={80}
                            height={80}
                            src={footerVK}
                            alt="VK"
                          />
                        </a>
                        <a className="me-3" href="/home">
                          <img
                            className="img-fluid"
                            width={80}
                            height={80}
                            src={footerWP}
                            alt="WP"
                          />
                        </a>
                        <a className="me-3" href="/home">
                          <img
                            className="img-fluid"
                            width={80}
                            height={80}
                            src={footerTG}
                            alt="TG"
                          />
                        </a>
                        <a className="me-3" href="/home">
                          <img
                            className="img-fluid"
                            width={80}
                            height={80}
                            src={footerIG}
                            alt="IG"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-5 mt-2 pe-2 pt-5 d-flex justify-content-center align-items-center"
                  style={{}}
                >
                  <img className="img-fluid" src={robot} alt="robot" />
                </div>
              </div>
            </div>

            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row">
                <div className="col-12 col-sm-12 mt-4">
                  <div
                    className="ffamily text-center lh-sm"
                    style={{ color: "#602B1D", fontSize: 7.4 + "vw" }}
                  >
                    Вся актуальная информация в наших <br></br> соц. сетях
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 mt-4 lh-1">
                  <div style={{ color: "#602B1D", fontSize: 4 + "vw" }}>
                    Результаты до/после, специальные предложения, о трендах и
                    антитрендах в области эстетической и аппаратной
                    косметологии, а также много другой полезной информации вы
                    получите в моих социальных сетях.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 mt-3 lh-1">
                  <div style={{ color: "#602B1D", fontSize: 4 + "vw" }}>
                    Присоединяйся, не пожалеешь!
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 mt-4 mb-4">
                  <div className="d-flex inline-flex justify-content-center align-items-center">
                    <img className="img-fluid me-4" src={vkMob} alt="vkMob" />
                    <img
                      className="img-fluid mx-4"
                      src={telegramMob}
                      alt="telegramMob"
                    />
                    <img
                      className="img-fluid mx-4"
                      src={instagramMob}
                      alt="instagramMob"
                    />
                    <img
                      className="img-fluid mx-4"
                      src={whatsappMob}
                      alt="whatsappMob"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

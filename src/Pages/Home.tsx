import React, { Component } from "react";
import "../App.css";

/* files for page-desctop */

import man from "../Assets/ForHome/Desctop/man.png";
import woman1 from "../Assets/ForHome/Desctop/woman1.png";
import woman2 from "../Assets/ForHome/Desctop/woman2.png";
import Alina from "../Assets/ForHome/Desctop/Alina.png";
import Consult from "../Assets/ForHome/Desctop/consult.png";
import Chistka from "../Assets/ForHome/Desctop/chistka.png";
import Akne from "../Assets/ForHome/Desctop/akne.png";
import Piling from "../Assets/ForHome/Desctop/piling.png";
import Present from "../Assets/ForHome/Desctop/present.png";
import Ex1 from "../Assets/ForHome/Desctop/Ex1.png";
import left from "../Assets/ForHome/Desctop/left.png";
import right from "../Assets/ForHome/Desctop/right.png";
import Kovleft from "../Assets/ForHome/Desctop/Kovleft.png";
import Kovright from "../Assets/ForHome/Desctop/Kovright.png";
import AlinaZapic from "../Assets/ForHome/Desctop/AlinaZapic.png";
import footerVK from "../Assets/ForFooter/Desctop/footerVK.png";
import footerTG from "../Assets/ForFooter/Desctop/footerTG.png";
import footerIG from "../Assets/ForFooter/Desctop/footerIG.png";
import footerWP from "../Assets/ForFooter/Desctop/footerWP.png";

/* import Mapk from "../Assets/forHome/Map.png"; */

/* files for page-mobile */

import Chistkamob from "../Assets/ForHome/Mobile/Chistka.png";
import Consultatcia from "../Assets/ForHome/Mobile/Consultatcia.png";
import Lechenie from "../Assets/ForHome/Mobile/Lechenie.png";
import Pilling_small from "../Assets/ForHome/Mobile/Pilling_small.png";

import trubkaMob from "../Assets/ForHome/Mobile/trubkaMob.png";
import clockMob from "../Assets/ForHome/Mobile/clockMob.png";
import vkMob from "../Assets/ForHome/Mobile/vkMob.png";
import telegramMob from "../Assets/ForHome/Mobile/telegramMob.png";
import instagramMob from "../Assets/ForHome/Mobile/instagramMob.png";
import whatsappMob from "../Assets/ForHome/Mobile/whatsappMob.png";

/* add MODULES */

import RECEPTION_MODAL from "../Components/Reception_Modal/Reception_Modal-desctop/Reception_Modal";
import RECEPTION_MODAL_MOBILE from "../Components/Reception_Modal/Reception_Modal-mobile/Reception_Modal-mobile";

/* yandex-map-api (в дальнейшем создать отдельный файл) */

import { YMaps, Map } from "@pbe/react-yandex-maps";
/* import Calendar from "../Components/Calendar/Calendar"; */

const HomeMap = () => (
  <YMaps>
    <Map className="homeMap"
      id="maps"
      defaultState={{ center: [55.794668133, 49.210856], zoom: 13.4 }}
    />
  </YMaps>
);

/* yandex-map-api end */

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="d-none d-md-block col-md-12 mb-4">
              <div className="row mb-5">
                <div className="col-md-6">
                  <div className="row mt-2">
                    <div
                      className="col-md-12 mb-2 mt-1"
                      style={{
                        height: "31vw",
                        backgroundColor: "#2B8069",
                        borderRadius: 13 + "px",
                        border: 2 + "px",
                        borderStyle: "solid",
                        borderColor: "#2B8069",
                      }}
                    >
                      <div className="row justify-content-center">
                        <div
                          className="col-md-11"
                          style={{
                            marginTop: "12%",
                            marginBottom: "9%",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        >
                          <h1
                            className="text-start ffamily"
                            style={{ color: "#FFEBCA", fontSize: 2.8 + "vw" }}
                          >
                            Профессиональный и бережный уход за кожей лица –
                            секрет вашей ежедневной уверенности.
                          </h1>
                        </div>
                        <div
                          className="col-md-12"
                          style={{ margin: "0 auto 1% auto" }}
                        >
                          <div
                            className="row"
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                          >
                            <div className="col-md-6">
                              <a
                                href="/services"
                                style={{
                                  background: "inherit",
                                  color: "white",
                                  textDecoration: "none",
                                  display: "inline-block",
                                  borderRadius: 13 + "px",
                                  border: "0.5px",
                                  borderStyle: "solid",
                                  borderColor: "#FFF4E3",
                                  fontSize: 1.2 + "vw",
                                  height: "5vw",
                                  width: "22vw",
                                }}
                                id="ahref"
                                className="text-center d-flex align-items-center justify-content-center px-3 py-3"
                              >
                                {" "}
                                Посмотреть услуги{" "}
                              </a>
                            </div>
                            <div className="col-md-6">
                              <a
                                data-bs-toggle="modal"
                                href="#Procedure"
                                style={{
                                  backgroundColor: "#F8C77A",
                                  color: "#602B1D",
                                  textDecoration: "none",
                                  display: "inline-block",
                                  borderRadius: 13 + "px",
                                  border: "0.5px",
                                  borderColor: "#F8C77A",
                                  borderStyle: "solid",
                                  fontSize: 1.2 + "vw",
                                  height: "5vw",
                                  width: "22vw",
                                }}
                                className="text-center d-flex align-items-center justify-content-center px-3 py-3"
                              >
                                {" "}
                                Записаться на прием{" "}
                              </a>
                            </div>
                            <RECEPTION_MODAL />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-6 mt-1"
                      style={{ paddingLeft: 0, paddingRight: 9 }}
                    >
                      <img className="problem-img" src={woman1} alt="woman1" />
                    </div>
                    <div
                      className="col-6 mt-1"
                      style={{ paddingLeft: 9, paddingRight: 0 }}
                    >
                      <img className="problem-img" src={woman2} alt="woman2" />
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 mt-2 pt-1"
                  style={{
                    paddingLeft: "14px",
                    paddingRight: 0,
                    height: "49vw",
                  }}
                >
                  <img
                    className=""
                    src={man}
                    alt="man"
                    style={{ width: "calc(100%)", height: "calc(100% - 10px)" }}
                  />
                </div>
              </div>
            </div>

            {/* Мобильная версия */}

            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row mb-5">
                <div
                  className="col-12 col-sm-12"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <div
                    style={{
                      height: "auto",
                      backgroundColor: "#2B8069",
                      borderRadius: 13 + "px",
                      border: 2 + "px",
                      borderStyle: "solid",
                      borderColor: "#2B8069",
                    }}
                  >
                    <div className="row justify-content-center">
                      <div
                        className="col-12 col-sm-12"
                        style={{
                          paddingTop: "15%",
                          paddingLeft: "6%",
                          paddingRight: "6%",
                          marginBottom: "8%",
                        }}
                      >
                        <h1
                          className="mt-2 mb-4  text-center ffamily"
                          style={{ color: "#FFEBCA", fontSize: 6.6 + "vw" }}
                        >
                          Профессиональный уход за кожей лица – для уверенности
                          в каждом дне
                        </h1>
                      </div>
                      <div className="col-11 col-sm-11 align-self-center mb-2">
                        <a
                          href="/services"
                          style={{
                            background: "inherit",
                            color: "white",
                            textDecoration: "none",
                            display: "inline-block",
                            borderRadius: 13 + "px",
                            border: "0.5px",
                            borderStyle: "solid",
                            borderColor: "white",
                            fontSize: 4 + "vw",
                          }}
                          id="ahref"
                          className="text-center d-flex align-items-center justify-content-center py-3"
                        >
                          {" "}
                          Посмотреть услуги{" "}
                        </a>
                      </div>
                      <div className="col-11 col-sm-11 align-self-center mb-5">
                        <a
                          data-bs-toggle="modal"
                          href="#ProcedureMob"
                          style={{
                            backgroundColor: "#F8C77A",
                            color: "#602B1D",
                            textDecoration: "none",
                            display: "inline-block",
                            borderRadius: 13 + "px",
                            border: "0.5px",
                            borderStyle: "solid",
                            borderColor: "white",
                            fontSize: 4 + "vw",
                          }}
                          className="text-center d-flex align-items-center justify-content-center py-3"
                        >
                          {" "}
                          Записаться на прием{" "}
                        </a>
                      </div>
                      <RECEPTION_MODAL_MOBILE/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Второй контейнер */}

        <div
          className="container-fluid border rounded"
          style={{
            backgroundColor: "#2B8069",
          }}
        >
          <div className="row mt-4">
            <div className="d-none d-md-block col-md-12">
              <div className="row">
                <div className="col-md-6 ps-4">
                  <div className="row">
                    <div className="col-md-12 mt-1">
                      <h1
                        className="ffamily lh-1"
                        style={{ color: "#FFEBCA", fontSize: 2.77 + "vw" }}
                      >
                        Привет, красотка! <br></br>
                        Меня зовут Алина Ганиева.
                      </h1>
                    </div>
                    <div className="col-md-12" style={{ marginTop: "5%" }}>
                      <h4 style={{ color: "#FFEBCA", fontSize: 1.26 + "vw" }}>
                        Я профессиональный косметолог с более чем 6 лет опыта
                        <br></br>
                        работы в области ухода за кожей.
                      </h4>
                      <h4
                        style={{
                          color: "#FFEBCA",
                          fontSize: 1.26 + "vw",
                          marginTop: "4%",
                        }}
                      >
                        Моя миссия — помочь вам раскрыть и поддерживать вашу
                        естественную красоту с помощью передовых методики
                        индивидуального подхода.
                      </h4>
                      <h4
                        style={{
                          color: "#FFEBCA",
                          fontSize: 1.26 + "vw",
                          marginTop: "4%",
                        }}
                      >
                        Я верю, что красота начинается изнутри, и мой подход
                        направлен <br></br> на достижение гармонии между
                        внутренним <br></br> и внешним состоянием. Для меня
                        важно, чтобы каждый клиент покидал мой кабинет не только
                        с великолепным результатом, <br></br> но и с чувством
                        полного удовлетворения и релаксации. <br></br>
                      </h4>
                      <h4
                        style={{
                          color: "#FFEBCA",
                          fontSize: 1.26 + "vw",
                          marginTop: "4%",
                        }}
                      >
                        Я стремлюсь создать атмосферу доверия и комфорта, где
                        каждый клиент может расслабиться и насладиться процессом
                        ухода <br></br> за собой.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div
                      className="col-md-12"
                      style={{ marginBottom: "3%", paddingRight: "3%" }}
                    >
                      <img className="problem-img" src={Alina} alt="Alina" />
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-4 ps-4">
                  <a
                    href="/services"
                    style={{
                      backgroundColor: "#F8C77A",
                      color: "#602B1D",
                      padding: "1.5rem + 1.5rem",
                      textDecoration: "none",
                      display: "inline-block",
                      borderRadius: "3px",
                      border: "0.5px",
                      borderStyle: "solid",
                      borderColor: "#F8C77A",
                      minHeight: "50px",
                      height: "2.8vw",
                      fontSize: "1.14em",
                    }}
                    id="ahref"
                    className="text-center d-flex align-items-center justify-content-center rounded"
                  >
                    {" "}
                    Читать подробнее{" "}
                  </a>
                </div>
              </div>
            </div>

            {/* Мобильная версия */}

            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div
                className="row"
                style={{
                  minHeight: 589 + "px",
                  backgroundColor: "#2B8069",
                  borderRadius: 13 + "px",
                  border: 2 + "px",
                  borderStyle: "solid",
                  borderColor: "#2B8069",
                }}
              >
                <div
                  className="col-12 col-sm-12"
                  style={{ marginBottom: 0, paddingBottom: 0 }}
                >
                  <img className="img-fluid" src={Alina} alt="Alina" />
                </div>
                <div className="col-12 col-sm-12 mb-3 align-self-center">
                  <h1
                    className="ffamily mt-3"
                    style={{ color: "#FFEBCA", fontSize: 6.6 + "vw" }}
                  >
                    Привет, красотка! Меня зовут Алина Ганиева.
                  </h1>
                  <div
                    className="mt-3 lh-sm"
                    style={{ color: "#FFEBCA", fontSize: 4.4 + "vw" }}
                  >
                    Я косметолог с более чем 6 лет опыта. Помогаю раскрыть и
                    поддерживать вашу естественную красоту с индивидуальным
                    подходом. Стремлюсь к гармонии внутреннего и внешнего
                    состояния. Важно, чтобы каждый клиент уходил довольным и
                    расслабленным. Создаю атмосферу доверия и комфорта для
                    вашего ухода за собой.
                  </div>
                </div>
                <div className="col-12 col-sm-12 mb-3 align-self-center">
                  <a
                    href="/services"
                    style={{
                      backgroundColor: "#F8C77A",
                      color: "#602B1D",
                      padding: "1rem + 1.5rem",
                      textDecoration: "none",
                      display: "inline-block",
                      borderRadius: "13px",
                      border: "0.5px",
                      borderStyle: "solid",
                      borderColor: "F8C77A",
                      height: "60px",
                    }}
                    id="ahref"
                    className="text-center d-flex align-items-center justify-content-center"
                  >
                    {" "}
                    Читать подробнее{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Третий контейнер */}
        <div className="container-fluid" id="osobcont">
          <div className="row justify-content-md-center mt-5 mb-4">
            <div
              className="d-none d-md-block col-md-12"
              style={{
                backgroundColor: "#FFEBCA",
                height: "auto",
              }}
            >
              <svg viewBox="0 0 84 1">
                <line
                  className="top"
                  fill="none"
                  x1={0}
                  x2={100}
                  y1={0}
                  y2={0}
                  style={{
                    stroke: "#602B1D",
                    strokeWidth: "0.1px",
                    strokeDashoffset: "1.5",
                    strokeDasharray: "1px",
                  }}
                ></line>
              </svg>
              <div className="row d-flex justify-content-center">
                <div
                  className="col-md-12 text-center"
                  style={{ marginTop: "4%", marginBottom: "1%" }}
                >
                  <h1
                    className="ffamily"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    Почему я?
                  </h1>
                </div>
                <div className="col-md-12">
                  <details className="Home_details">
                    <summary className="Home_summary">
                      <svg viewBox="0 0 1376 80">
                        <rect
                          x="0.5"
                          y="1.29297"
                          width="1371"
                          height="78"
                          rx="11.5"
                          stroke="#602B1D"
                          strokeWidth="1px"
                          stroke-dasharray="12 12"
                          strokeDashoffset="1"
                          fill="none"
                        />
                        <foreignObject x="0" y="0" width="1370" height="78">
                          <span className="float-start Home_summary-text1">
                            01/04
                          </span>
                          <span className="float-end Home_summary-text2">
                            Индивидуальный подход
                          </span>
                        </foreignObject>
                      </svg>
                    </summary>
                    <div className="Home_answer">
                      <svg viewBox="0 0 1376 90">
                        <rect
                          x="0.5"
                          y="1.29297"
                          width="1371"
                          height="88"
                          rx="11.5"
                          stroke="#602B1D"
                          strokeWidth="1px"
                          stroke-dasharray="12 12"
                          strokeDashoffset="1"
                          fill="#F8C77A"
                        />
                        <foreignObject x="0" y="0" width="1370" height="86">
                          <p className="Home_answer-text">
                            Мы строго следим за качеством материалов и
                            оборудования. Все продукты проходят тщательный отбор
                            и соответствуют стандартам безопасности, что
                            гарантирует эффективность процедур и минимизирует
                            риск аллергий и побочных эффектов. Наша цель —
                            безопасный и комфортный опыт с видимыми улучшениями
                            состояния кожи.
                          </p>
                        </foreignObject>
                      </svg>
                    </div>
                  </details>
                </div>
                <div className="col-md-12">
                  <details className="Home_details">
                    <summary className="Home_summary">
                      <svg viewBox="0 0 1376 80">
                        <rect
                          x="0.5"
                          y="1.29297"
                          width="1371"
                          height="78"
                          rx="11.5"
                          stroke="#602B1D"
                          strokeWidth="1px"
                          stroke-dasharray="12 12"
                          strokeDashoffset="1"
                          fill="none"
                        />
                        <foreignObject x="0" y="0" width="1370" height="78">
                          <span className="float-start Home_summary-text1">
                            02/04
                          </span>
                          <span className="float-end Home_summary-text2">
                            Безопасность и качество
                          </span>
                        </foreignObject>
                      </svg>
                    </summary>
                    <div className="Home_answer">
                      <svg viewBox="0 0 1376 90">
                        <rect
                          x="0.5"
                          y="1.29297"
                          width="1371"
                          height="88"
                          rx="11.5"
                          stroke="#602B1D"
                          strokeWidth="1px"
                          stroke-dasharray="12 12"
                          strokeDashoffset="1"
                          fill="#F8C77A"
                        />
                        <foreignObject x="0" y="0" width="1370" height="86">
                          <p className="Home_answer-text">
                            Мы строго следим за качеством материалов и
                            оборудования. Все продукты проходят тщательный отбор
                            и соответствуют стандартам безопасности, что
                            гарантирует эффективность процедур и минимизирует
                            риск аллергий и побочных эффектов. Наша цель —
                            безопасный и комфортный опыт с видимыми улучшениями
                            состояния кожи.
                          </p>
                        </foreignObject>
                      </svg>
                    </div>
                  </details>
                </div>
                <div className="col-md-12">
                  <details className="Home_details">
                    <summary className="Home_summary">
                      <svg viewBox="0 0 1376 80">
                        <rect
                          x="0.5"
                          y="1.29297"
                          width="1371"
                          height="78"
                          rx="11.5"
                          stroke="#602B1D"
                          strokeWidth="1px"
                          stroke-dasharray="12 12"
                          strokeDashoffset="1"
                          fill="none"
                        />
                        <foreignObject x="0" y="0" width="1370" height="78">
                          <span className="float-start Home_summary-text1">
                            03/04
                          </span>
                          <span className="float-end Home_summary-text2">
                            Профессионализм и опыт
                          </span>
                        </foreignObject>
                      </svg>
                    </summary>
                    <div className="Home_answer">
                      <svg viewBox="0 0 1376 90">
                        <rect
                          x="0.5"
                          y="1.29297"
                          width="1371"
                          height="88"
                          rx="11.5"
                          stroke="#602B1D"
                          strokeWidth="1px"
                          stroke-dasharray="12 12"
                          strokeDashoffset="1"
                          fill="#F8C77A"
                        />
                        <foreignObject x="0" y="0" width="1370" height="86">
                          <p className="Home_answer-text">
                            Мы строго следим за качеством материалов и
                            оборудования. Все продукты проходят тщательный отбор
                            и соответствуют стандартам безопасности, что
                            гарантирует эффективность процедур и минимизирует
                            риск аллергий и побочных эффектов. Наша цель —
                            безопасный и комфортный опыт с видимыми улучшениями
                            состояния кожи.
                          </p>
                        </foreignObject>
                      </svg>
                    </div>
                  </details>
                </div>
                <div className="col-md-12">
                  <details className="Home_details">
                    <summary className="Home_summary">
                      <svg viewBox="0 0 1376 80">
                        <rect
                          x="0.5"
                          y="1.29297"
                          width="1371"
                          height="78"
                          rx="11.5"
                          stroke="#602B1D"
                          strokeWidth="1px"
                          stroke-dasharray="12 12"
                          strokeDashoffset="1"
                          fill="none"
                        />
                        <foreignObject x="0" y="0" width="1370" height="78">
                          <span className="float-start Home_summary-text1">
                            04/04
                          </span>
                          <span className="float-end Home_summary-text2">
                            Постоянное обучение
                          </span>
                        </foreignObject>
                      </svg>
                    </summary>
                    <div className="Home_answer">
                      <svg viewBox="0 0 1376 90">
                        <rect
                          x="0.5"
                          y="1.29297"
                          width="1371"
                          height="88"
                          rx="11.5"
                          stroke="#602B1D"
                          strokeWidth="1px"
                          stroke-dasharray="12 12"
                          strokeDashoffset="1"
                          fill="#F8C77A"
                        />
                        <foreignObject x="0" y="0" width="1370" height="86">
                          <p className="Home_answer-text">
                            Мы строго следим за качеством материалов и
                            оборудования. Все продукты проходят тщательный отбор
                            и соответствуют стандартам безопасности, что
                            гарантирует эффективность процедур и минимизирует
                            риск аллергий и побочных эффектов. Наша цель —
                            безопасный и комфортный опыт с видимыми улучшениями
                            состояния кожи.
                          </p>
                        </foreignObject>
                      </svg>
                    </div>
                  </details>
                </div>
              </div>
              <svg
                fill="none"
                viewBox="0 0 84 1"
                style={{ position: "absolute" }}
              >
                <line
                  fill="none"
                  className="bottom"
                  x1={0}
                  x2={100}
                  y1={0}
                  y2={0}
                  style={{
                    stroke: "#602B1D",
                    strokeWidth: "0.1px",
                    strokeDashoffset: "1.5",
                    strokeDasharray: "1px",
                  }}
                ></line>
              </svg>
            </div>
            {/* Мобильная версия */}
            <div
              className="d-md-none d-lg-none col-12 col-sm-12"
              style={{
                backgroundColor: "#FFEBCA",
                minHeight: 361 + "px",
              }}
            >
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-sm-12 mt-4 mb-3">
                  <h1
                    className=" text-center ffamily"
                    style={{ color: "#602B1D", fontSize: 8 + "vw" }}
                  >
                    Почему я?
                  </h1>
                </div>
                <div
                  className="col-11 col-sm-11"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <details className="Homemob_details">
                    <summary className="Homemob_summary">
                      <div className="Homemob_summary-border">
                        <div className="float-start Homemob_summary-text1">
                          04/04
                        </div>
                        <div className="float-end Homemob_summary-text2">
                          Постоянное обучение
                        </div>
                      </div>
                    </summary>
                    <div className="Homemob_answer">
                      <p className="Homemob_answer-text">
                        Мы строго следим за качеством материалов и оборудования.
                        Все продукты проходят тщательный отбор и соответствуют
                        стандартам безопасности, что гарантирует эффективность
                        процедур и минимизирует риск аллергий и побочных
                        эффектов. Наша цель — безопасный и комфортный опыт с
                        видимыми улучшениями состояния кожи.
                      </p>
                    </div>
                  </details>
                </div>
                <div
                  className="col-11 col-sm-11"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <details className="Homemob_details">
                    <summary className="Homemob_summary">
                      <div className="Homemob_summary-border">
                        <div className="float-start Homemob_summary-text1">
                          04/04
                        </div>
                        <div className="float-end Homemob_summary-text2">
                          Постоянное обучение
                        </div>
                      </div>
                    </summary>
                    <div className="Homemob_answer">
                      <p className="Homemob_answer-text">
                        Мы строго следим за качеством материалов и оборудования.
                        Все продукты проходят тщательный отбор и соответствуют
                        стандартам безопасности, что гарантирует эффективность
                        процедур и минимизирует риск аллергий и побочных
                        эффектов. Наша цель — безопасный и комфортный опыт с
                        видимыми улучшениями состояния кожи.
                      </p>
                    </div>
                  </details>
                </div>
                {/* <div className="col-11 col-sm-11 mt-1 mb-2 ">
                  <svg viewBox="0 0 328 80">
                    <rect
                      x="0.5"
                      y="1.29297"
                      width="325"
                      height="70"
                      rx="11.5"
                      stroke="#602B1D"
                      strokeWidth="1px"
                      stroke-dasharray="12 12"
                      strokeDashoffset="1"
                      fill="none"
                    ></rect>
                    <text x="10" y="40" fontSize={18} color="">
                      01/04
                    </text>
                    <text x="70" y="40" fontSize={18} color="">
                      Индивидуальный подход
                    </text>
                  </svg>
                </div>
                <div className="col-11 col-sm-11 mt-1 mb-2">
                  <svg viewBox="0 0 328 80">
                    <rect
                      x="0.5"
                      y="1.29297"
                      width="325"
                      height="70"
                      rx="11.5"
                      stroke="#602B1D"
                      strokeWidth="1px"
                      stroke-dasharray="12 12"
                      strokeDashoffset="1"
                      fill="none"
                    ></rect>
                    <text x="10" y="40" fontSize={18} color="">
                      02/04
                    </text>
                    <text x="70" y="40" fontSize={18} color="">
                      Безопасность и качество
                    </text>
                  </svg>
                </div>
                <div className="col-11 col-sm-11 mt-1 mb-2">
                  <svg viewBox="0 0 328 80">
                    <rect
                      x="0.5"
                      y="1.29297"
                      width="325"
                      height="70"
                      rx="11.5"
                      stroke="#602B1D"
                      strokeWidth="1px"
                      stroke-dasharray="12 12"
                      strokeDashoffset="1"
                      fill="none"
                    ></rect>
                    <text x="10" y="40" fontSize={18} color="">
                      03/04
                    </text>
                    <text x="70" y="40" fontSize={18} color="">
                      Профессионализм и опыт
                    </text>
                  </svg>
                </div>
                <div className="col-11 col-sm-11 mt-1 mb-4">
                  <svg viewBox="0 0 328 80">
                    <rect
                      x="0.5"
                      y="1.29297"
                      width="325"
                      height="70"
                      rx="11.5"
                      stroke="#602B1D"
                      strokeWidth="1px"
                      stroke-dasharray="12 12"
                      strokeDashoffset="1"
                      fill="none"
                    ></rect>
                    <text x="10" y="40" fontSize={18} color="">
                      04/04
                    </text>
                    <text x="70" y="40" fontSize={18} color="">
                      Постоянное обучение
                    </text>
                  </svg>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Четвертый контейнер */}
        <div className="container-fluid">
          <div className="row mt-5 mb-2">
            <div
              className="d-none d-md-block col-md-12 ps-n1 ms-n1"
              style={{ height: "auto" }}
            >
              <div className="row">
                <div
                  className="col-md-12 mt-4"
                  style={{ marginBottom: "3%", paddingLeft: 0 }}
                >
                  <h3
                    className="text-start ffamily"
                    style={{ color: "#602B1D", fontSize: 4.2 + "vw" }}
                  >
                    Чем я могу помочь...
                  </h3>
                </div>
                <div className="col-md-6">
                  <div className="row pe-2">
                    <div
                      className="col-md-6 pe-2"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      <img
                        className="problem-img"
                        src={Consult}
                        alt="Consult"
                      />
                    </div>
                    <div
                      className="col-md-6"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      <img
                        className="problem-img"
                        src={Chistka}
                        alt="Chistka"
                      />
                    </div>
                    <div
                      className="col-md-12"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      <img className="problem-img" src={Akne} alt="Akne" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div
                      className="col-md-12 mb-1"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      <img className="problem-img" src={Piling} alt="Piling" />
                    </div>
                    <div
                      className="col-md-12 mb-3"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      <svg viewBox="0 0 695 380">
                        <rect
                          x="0.5"
                          y="1.29297"
                          width="690"
                          height="377"
                          rx="11.5"
                          stroke="#602B1D"
                          strokeWidth="2px"
                          stroke-dasharray="12 12"
                          strokeDashoffset="1"
                          fill="none"
                        ></rect>
                        <text x="10" y="370" fontSize={"1.7vw"}>
                          Другие процедуры
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row">
                <div className="col-12 col-sm-12 mt-2">
                  <h1
                    className="text-center ffamily"
                    style={{ color: "#602B1D", fontSize: 6 + "vw" }}
                  >
                    Чем я могу помочь?
                  </h1>
                </div>
                <div
                  className="col-5 col-sm-5 mt-3"
                  style={{ paddingLeft: 0, paddingRight: "10px" }}
                >
                  <img className="problem-img" src={Chistkamob} alt="Consult" />
                </div>
                <div
                  className="col-7 col-sm-7 mt-3 d-flex justify-content-end"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <img
                    className="problem-img"
                    src={Consultatcia}
                    alt="Consult"
                  />
                </div>
                <div
                  className="col-7 col-sm-7 mt-1"
                  style={{ paddingLeft: 0, paddingRight: "10px" }}
                >
                  <img className="problem-img" src={Lechenie} alt="Consult" />
                </div>
                <div
                  className="col-5 col-sm-5 mt-1 d-flex justify-content-end"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <img
                    className="problem-img"
                    src={Pilling_small}
                    alt="Consult"
                  />
                </div>
                <div
                  className="col-12 col-sm-12 mt-3"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <svg width="100%" viewBox="0 0 328 112">
                    <rect
                      x="0.5"
                      y="1.29297"
                      width="326"
                      height="110"
                      rx="11.5"
                      stroke="#602B1D"
                      strokeWidth="1px"
                      stroke-dasharray="12 12"
                      strokeDashoffset="1"
                      fill="none"
                    ></rect>
                    <text x="10" y="100" fontSize={17}>
                      Другие процедуры
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Пятый контейнер */}
        <div className="container-fluid mt-5 mb-3">
          <div className="row">
            <div
              className="col-md-12"
              style={{ paddingLeft: 0, paddingRight: 0, height: "auto" }}
            >
              <div style={{ height: "auto" }}>
                <img className="problem-img" src={Present} alt="present" />
              </div>
            </div>
          </div>
        </div>
        {/* Шестой контейнер */}
        <div className="container-fluid mt-5 mb-3">
          <div className="row">
            <div className="col-md-12 justify-content-md-center p-0">
              <div style={{ marginBottom: "4%" }}>
                <h1
                  className="col-md-11 text-center ffamily"
                  id="Homerev_title"
                >
                  Отзывы от моих пациенток
                </h1>
              </div>
              <div
                id="carouselReviewsofHome"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <img src={Kovleft} alt="Kovleft" className="Homerev_kovleft" />
                <img
                  src={Kovright}
                  alt="Kovright"
                  className="Homerev_kovright"
                />
                <div className="carousel-inner">
                  <div className="carousel-item active" id="Homerev_cont">
                    <div className="col-md-2" id="Homerev_border-left"></div>
                    <div className="col-md-10" id="Homerev_border">
                      <div id="Homerev_text">
                        Это был мой первый опыт косметических процедур, и я
                        полностью довольна результатами. Внимательное отношение,
                        индивидуальный подход и, конечно, восхитительные
                        результаты!
                      </div>
                      <div id="Homerev_img-border">
                        <div id="Homerev_img">
                          <img src={Ex1} className="d-block" alt="ex1" />
                        </div>
                        <div id="Homerev_nd">
                          <div id="Homerev_name">Лиза Семакина</div>
                          <div id="Homerev_date">27.12.2024</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2" id="Homerev_border-right"></div>
                  </div>
                  <div className="carousel-item" id="Homerev_cont">
                    <div className="col-md-2" id="Homerev_border-left"></div>
                    <div className="col-md-10" id="Homerev_border">
                      <div id="Homerev_text">
                        Это был мой первый опыт косметических процедур, и я
                        полностью довольна результатами. Внимательное отношение,
                        индивидуальный подход и, конечно, восхитительные
                        результаты! asfasfa
                      </div>
                      <div id="Homerev_img-border">
                        <div id="Homerev_img">
                          <img src={Ex1} className="d-block" alt="ex1" />
                        </div>
                        <div id="Homerev_nd">
                          <div id="Homerev_name">Лиза Семакина</div>
                          <div id="Homerev_date">27.12.2024</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2" id="Homerev_border-right"></div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  role="button"
                  href="#carouselReviewsofHome"
                  data-bs-slide="prev"
                  id="Homerev_left"
                >
                  <img
                    className="carousel-control"
                    aria-hidden="true"
                    src={left}
                    alt="left"
                  />
                </a>
                <a
                  className="carousel-control-next"
                  role="button"
                  href="#carouselReviewsofHome"
                  data-bs-slide="next"
                  id="Homerev_right"
                >
                  <img
                    className="carousel-control"
                    aria-hidden="true"
                    src={right}
                    alt="right"
                  />
                </a>
              </div>
            </div>
            <div className="d-md-none d-lg-none col-12 col-sm-12 justify-content-md-center">
              <h1
                className="col-md-11 text-center ffamily"
                style={{ color: "#602B1D", fontSize: 7 + "vw" }}
              >
                Отзывы от пациенток
              </h1>
            </div>
          </div>
        </div>
        {/* Седьмой контейнер */}
        {/* Calendar */}
        {/* <div className="calendar-rectangle">
          <div id="calendar-content" className="calendar-content">
            <Calendar/>
          </div>
        </div> */}

        {/* Calendar */}

        <div className="container-fluid" id="osobcont">
          <div className="row mt-5 mb-3">
            <div
              className="d-none d-md-block col-md-12"
              style={{
                backgroundColor: "#FFEBCA",
                height: "auto",
              }}
            >
              <svg viewBox="0 0 84 1">
                <line
                  className="top"
                  fill="none"
                  x1={0}
                  x2={100}
                  y1={0}
                  y2={0}
                  style={{
                    stroke: "#602B1D",
                    strokeWidth: "0.1px",
                    strokeDashoffset: "1.5",
                    strokeDasharray: "1px",
                  }}
                ></line>
              </svg>
              <div className="row mt-4 pb-3">
                <div
                  className="col-md-5 mt-5 pt-3 ms-4"
                  style={{ paddingRight: 0 }}
                >
                  <img
                    src={AlinaZapic}
                    alt="Alina"
                    style={{
                      width: "calc(100% - 10px)",
                      height: "calc(100% - 50px)",
                    }}
                  />
                </div>
                <div
                  className="col-md-6 offset-md-1 mt-5 pt-3 ms-3"
                  style={{ paddingRight: 0 }}
                >
                  <div className="mb-4">
                    <h2
                      className="ffamily text-center"
                      style={{ color: "#602B1D", fontSize: 2.7 + "vw" }}
                    >
                      Запись на консультацию
                    </h2>
                  </div>
                  <form>
                    <div className="form-group my-4">
                      <input
                        style={{ color: "#602B1D", fontSize: 1.4 + "vw" }}
                        type="text"
                        className="form-control-plaintext ps-2"
                        id="InputText"
                        placeholder="Ваше имя"
                      />
                      <svg fill="none" viewBox="0 0 84 1">
                        <line
                          x1={0}
                          x2={100}
                          y1={0}
                          y2={0}
                          strokeDasharray={2.5}
                          style={{
                            stroke: "#602B1D",
                            strokeWidth: 0.5 + "px",
                            strokeDashoffset: "1.5",
                          }}
                        ></line>
                      </svg>
                    </div>
                    <div className="form-group my-4">
                      <input
                        style={{ color: "#602B1D", fontSize: 1.4 + "vw" }}
                        type="password"
                        className="form-control-plaintext ps-2"
                        id="InputPassword"
                        placeholder="Номер телефона"
                      />
                      <svg fill="none" viewBox="0 0 84 1">
                        <line
                          x1={0}
                          x2={100}
                          y1={0}
                          y2={0}
                          strokeDasharray={2.5}
                          style={{
                            stroke: "#602B1D",
                            strokeWidth: 0.5 + "px",
                            strokeDashoffset: "1.5",
                          }}
                        ></line>
                      </svg>
                    </div>
                    <div className="form-group my-4">
                      <input
                        style={{ color: "#602B1D", fontSize: 1.4 + "vw" }}
                        type="email"
                        className="form-control-plaintext ps-2"
                        id="InputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="E-mail"
                      />
                      <svg fill="none" viewBox="0 0 84 1">
                        <line
                          x1={0}
                          x2={100}
                          y1={0}
                          y2={0}
                          strokeDasharray={2.5}
                          style={{
                            stroke: "#602B1D",
                            strokeWidth: 0.5 + "px",
                            strokeDashoffset: "1.5",
                          }}
                        ></line>
                      </svg>
                    </div>
                    <select className="form-control-plaintext ps-2 mt-4 mb-2">
                      <option
                        style={{ color: "#602B1D", fontSize: 1.4 + "vw" }}
                      >
                        Выберите вариант
                      </option>
                    </select>
                    <svg fill="none" viewBox="0 0 84 1">
                      <line
                        x1={0}
                        x2={100}
                        y1={0}
                        y2={0}
                        strokeDasharray={2.5}
                        style={{
                          stroke: "#602B1D",
                          strokeWidth: 0.5 + "px",
                          strokeDashoffset: "1.5",
                        }}
                      ></line>
                    </svg>
                  </form>
                  <div className="mt-2 mb-5">
                    <span
                      style={{
                        lineHeight: "1",
                        color: "#602B1D",
                        textShadow: "60%",
                        fontSize: 1.4 + "vw",
                      }}
                    >
                      Отправляя данную форму, Вы соглашаетесь на обработку
                      персональных данных
                    </span>
                  </div>
                  <form className="col-item d-flex align-items-center justify-content-center mt-4 mb-5">
                    <button
                      className="btn"
                      type="submit"
                      style={{
                        width: 1460 + "px",
                        height: 60 + "px",
                        color: "#602B1D",
                        border: "0.5px solid #F8C77A",
                        backgroundColor: "#F8C77A",
                        borderRadius: "13px",
                      }}
                    >
                      Отправить заявку
                    </button>
                  </form>
                </div>
              </div>
              <svg
                fill="none"
                viewBox="0 0 84 1"
                style={{ position: "absolute" }}
              >
                <line
                  fill="none"
                  className="bottom"
                  x1={0}
                  x2={100}
                  y1={0}
                  y2={0}
                  style={{
                    stroke: "#602B1D",
                    strokeWidth: "0.1px",
                    strokeDashoffset: "1.5",
                    strokeDasharray: "1px",
                  }}
                ></line>
              </svg>
            </div>
            {/* Мобильная версия */}
            <div
              className="d-md-none d-lg-none col-12 col-sm-12"
              style={{
                backgroundColor: "#FFEBCA",
                height: "auto",
              }}
            >
              <div className="row">
                <div className="col-12 col-sm-12 mt-4 mb-3">
                  <h1
                    className="text-center ffamily fw-light"
                    style={{ color: "#602B1D", fontSize: 8.5 + "vw" }}
                  >
                    Запись на консультацию
                  </h1>
                </div>
                <form>
                  <div className="form-group mt-1 mx-2">
                    <input
                      style={{ color: "#602B1D", fontSize: 5 + "vw" }}
                      type="text"
                      className="form-control-plaintext ms-3 ps-4"
                      id="InputText"
                      placeholder="Ваше имя"
                    />
                    <svg fill="none" viewBox="0 0 84 1" className="mx-3">
                      <line
                        x1={0}
                        x2={84}
                        y1={0}
                        y2={0}
                        strokeDasharray={2.5}
                        style={{
                          stroke: "#602B1D",
                          strokeWidth: 0.5 + "px",
                          strokeDashoffset: "1.5",
                        }}
                      ></line>
                    </svg>
                  </div>
                  <div className="form-group mt-1 mx-2">
                    <input
                      style={{ color: "#602B1D", fontSize: 5 + "vw" }}
                      type="password"
                      className="form-control-plaintext ms-3 ps-4"
                      id="InputPassword"
                      placeholder="Номер телефона"
                    />
                    <svg fill="none" viewBox="0 0 84 1" className="mx-3">
                      <line
                        x1={0}
                        x2={100}
                        y1={0}
                        y2={0}
                        strokeDasharray={2.5}
                        style={{
                          stroke: "#602B1D",
                          strokeWidth: 0.5 + "px",
                          strokeDashoffset: "1.5",
                        }}
                      ></line>
                    </svg>
                  </div>
                  <div className="form-group mt-1 mx-2">
                    <input
                      style={{ color: "#602B1D", fontSize: 5 + "vw" }}
                      type="email"
                      className="form-control-plaintext ms-3 ps-4"
                      id="InputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="E-mail"
                    />
                    <svg fill="none" viewBox="0 0 84 1" className="mx-3">
                      <line
                        x1={0}
                        x2={100}
                        y1={0}
                        y2={0}
                        strokeDasharray={2.5}
                        style={{
                          stroke: "#602B1D",
                          strokeWidth: 0.5 + "px",
                          strokeDashoffset: "1.5",
                        }}
                      ></line>
                    </svg>
                  </div>
                  <select
                    className="form-control-plaintext ps-5 mt-1 mb-2"
                    /* autocomplete="" */
                  >
                    <option style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                      Выберите вариант
                    </option>
                  </select>
                  <svg fill="none" viewBox="0 0 84 1" className="mx-3">
                    <line
                      x1={0}
                      x2={100}
                      y1={0}
                      y2={0}
                      strokeDasharray={2.5}
                      style={{
                        stroke: "#602B1D",
                        strokeWidth: 0.5 + "px",
                        strokeDashoffset: "1.5",
                      }}
                    ></line>
                  </svg>
                </form>
                <div className="mt-2 mb-4 mx-2 lh-1">
                  <div
                    className="ps-2"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Отправляя данную форму, Вы соглашаетесь на обработку
                    персональных данных
                  </div>
                </div>
                <form className="col-item d-flex align-items-center justify-content-center mt-4 mb-5">
                  <button
                    className="btn mx-2"
                    type="submit"
                    style={{
                      width: "inherit",
                      height: 60 + "px",
                      backgroundColor: "#F8C77A",
                      border: "2px",
                      borderStyle: "dashed",
                      borderColor: "#602B1D",
                      borderRadius: 13 + "px",
                    }}
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Восьмой контейнер */}
        <div className="container-fluid">
          <div className="row mt-3 mb-3">
            <div className="d-none d-md-block col-md-12">
              <svg
                width="inherit"
                height="inherit"
                viewBox="0 0 1376 550"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="1.29297"
                  width="1375"
                  height="548"
                  rx="11.5"
                  stroke="#602B1D"
                  stroke-dasharray="12 12"
                />
                <foreignObject x="0" y="0" width="1374" height="547">
                  <div
                    className="row justify-content-md-center"
                    style={{
                      paddingLeft: 0,
                      paddingRight: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      height: "auto",
                      position: "relative",
                    }}
                  >
                    <div className="col-md-6" style={{ color: "#602B1D" }}>
                      <div className="mb-3 ms-4" style={{ marginTop: "11%" }}>
                        <h1 style={{ fontSize: 3.7 + "rem" }}>
                          Казань, Зур урам, 1к, <br></br> корпус 2
                        </h1>
                      </div>
                      <div
                        className="mt-5 ms-4"
                        style={{ fontSize: 1.2 + "rem" }}
                      >
                        <div className="mt-5 mb-3">
                          <span>+7(953)4801769</span>
                        </div>
                        <div className="mt-3 mb-5">
                          <span>Ежедневно с 9 до 20 часа</span>
                        </div>
                      </div>
                      <div className="mt-5 pt-5 ms-4">
                        <a className="me-3" href="/home">
                          <img
                            className="img-fluid"
                            width={48}
                            height={48}
                            src={footerVK}
                            alt="VK"
                          />
                        </a>
                        <a className="me-3" href="/home">
                          <img
                            className="img-fluid"
                            width={48}
                            height={48}
                            src={footerWP}
                            alt="WP"
                          />
                        </a>
                        <a className="me-3" href="/home">
                          <img
                            className="img-fluid"
                            width={48}
                            height={48}
                            src={footerTG}
                            alt="TG"
                          />
                        </a>
                        <a className="me-3" href="/home">
                          <img
                            className="img-fluid"
                            width={48}
                            height={48}
                            src={footerIG}
                            alt="IG"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6" id="Map-container">
                      <HomeMap />
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </div>

            {/* Мобильная версия */}

            <div className="d-md-none d-lg-none col-12 col-sm-12 mb-3">
              <svg
                width="inherit"
                height="inherit"
                viewBox="0 0 328 518"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="1.29297"
                  width="322"
                  height="510"
                  rx="11.5"
                  stroke="#602B1D"
                  stroke-dasharray="12 12"
                />
                <foreignObject x="0" y="0" width="327" height="518">
                  <div
                    className="row justify-content-center"
                    style={{
                      minWidth: "auto",
                      height: "auto",
                      position: "relative",
                    }}
                  >
                    <div
                      className="col-12 col-sm-12"
                      style={{ marginTop: "9%" }}
                    >
                      <h3
                        className="text-center ffamily"
                        style={{ color: "#602B1D", fontSize: "1.5rem" }}
                      >
                        Казань, Зур урам, 1к, к. 2
                      </h3>
                    </div>
                    <div
                      className="col-11 col-sm-11 d-flex inline-flex justify-content-center"
                      style={{ marginTop: "2%" }}
                    >
                      <div
                        className="d-flex inline-flex justify-content-center align-items-center"
                        style={{
                          width: 290 + "px",
                          height: 56 + "px",
                          borderRadius: 15 + "px",
                          border: 1 + "px",
                          borderStyle: "solid",
                          borderColor: "#602B1D",
                          color: "#602B1D",
                        }}
                      >
                        <img
                          className="img-fluid"
                          src={trubkaMob}
                          alt="trubka"
                        />
                        <span>+7 (906) 115-85-78</span>
                      </div>
                    </div>
                    <div
                      className="col-11 col-sm-11 d-flex inline-flex justify-content-center"
                      style={{ marginTop: "2%" }}
                    >
                      <div
                        className="d-flex inline-flex justify-content-center align-items-center"
                        style={{
                          minWidth: 290 + "px",
                          height: 56 + "px",
                          borderRadius: 15 + "px",
                          border: 1 + "px",
                          borderStyle: "solid",
                          borderColor: "#602B1D",
                          color: "#602B1D",
                        }}
                      >
                        <img className="img-fluid" src={clockMob} alt="clock" />
                        <span>Пн-Вс 9:00-20:00</span>
                      </div>
                    </div>
                    <div
                      className="col-12 col-sm-12"
                      style={{ marginTop: "4%" }}
                    >
                      <div className="d-flex inline-flex justify-content-center align-items-center">
                        <img
                          className="img-fluid mx-4"
                          src={vkMob}
                          alt="vkMob"
                        />
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
                    <div
                      className="col-12 col-sm-12 d-flex justify-content-center align-items-center"
                      style={{
                        marginTop: "3%",
                        marginLeft: "3%",
                        marginRight: "3%",
                      }}
                    >
                      <div style={{ margin: "2%" }}>
                        <HomeMap />
                      </div>
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

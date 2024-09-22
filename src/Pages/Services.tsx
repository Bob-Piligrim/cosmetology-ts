import React, { Component } from "react";

import vector from "../Assets/ForServices/Desctop/vector.png";
import vectormob from "../Assets/ForServices/Mobile/vectormob.png";

export default class Services extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div
              className="d-none d-md-block col-md-12"
              style={{ paddingBottom: 50 + "px" }}
            >
              <div className="row">
                <div className="col-md-12 mt-3">
                  <h1
                    className="text-left ffamily"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    ИНЪЕКЦИОННАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Биоревитализация
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Косметологическая процедура, которая увлажняет и омолаживает
                    кожу <br></br> с помощью инъекций гиалуроновой кислоты. Она
                    помогает улучшить текстуру кожи, повысить её упругость и
                    уменьшить морщины.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <a href="/error_404">
                    <img src={vector} alt="vector" />
                  </a>
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Ботулинотерапия
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Косметологическая процедура, при которой ботокс
                    (ботулинический<br></br> токсин) вводится в мышцы лица для
                    их расслабления. Это помогает разгладить морщины и сделать
                    кожу более гладкой<br></br> и молодой на вид.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <a href="/services/botulinoterapia">
                    <img src={vector} alt="vector" />
                  </a>
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Контурная пластика
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Косметологическая процедура, при которой с помощью инъекций{" "}
                    <br></br>
                    филлеров (чаще всего гиалуроновой кислоты) корректируют
                    форму <br></br> и объем лица. Она помогает улучшить контуры,
                    разгладить морщины<br></br> и придать лицу более молодой
                    вид.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Лечение гипергидроза
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Методы, направленные на уменьшение чрезмерного
                    потоотделения. <br></br> Оно может включать использование
                    антиперспирантов, инъекции <br></br> ботокса или медицинские
                    процедуры, такие как ионофорез или <br></br> лазерное
                    лечение.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Липолитики
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Процедуры, направленные на разрушение жировых клеток в{" "}
                    <br></br>
                    определенных областях тела. Они могут включать в себя
                    использование ультразвука, радиочастоты, инъекции с
                    жиросжигающими препаратами <br></br> или лазерные технологии
                    для уменьшения объемов и улучшения <br></br> контуров тела.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Мезотерапия
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Косметологическая процедура, при которой в кожу вводятся{" "}
                    <br></br>
                    микроинъекции с витаминами, минералами и другими активными
                    веществами. Цель — улучшить состояние кожи, повысить её
                    упругость <br></br> и устранить мелкие недостатки, такие как
                    морщины или пигментация.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row mt-3 mb-2">
                <div className="col-12 col-sm-12">
                  <h1
                    className="text-center"
                    style={{ color: "#602B1D", fontSize: 6.4 + "vw" }}
                  >
                    ИНЪЕКЦИОННАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Биоревитализация
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <a href="/error_404">
                    <img src={vectormob} alt="vectormob" />
                  </a>
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Косметологическая процедура, которая увлажняет и омолаживает
                    кожу с помощью инъекций гиалуроновой кислоты. Она помогает
                    улучшить текстуру кожи, повысить её упругость и уменьшить
                    морщины.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Ботулинотерапия
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <a href="/services/botulinoterapia">
                    <img src={vectormob} alt="vectormob" />
                  </a>
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Косметологическая процедура, при которой ботокс
                    (ботулинический токсин) вводится в мышцы лица для их
                    расслабления. Это помогает разгладить морщины и сделать кожу
                    более гладкой и молодой на вид.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Контурная пластика
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Косметологическая процедура, при которой с помощью инъекций
                    филлеров (чаще всего гиалуроновой кислоты) корректируют
                    форму и объем лица. Она помогает улучшить контуры,
                    разгладить морщины и придать лицу более молодой вид.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Лечение гипергидроза
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Косметологическая процедура, при которой ботокс
                    (ботулинический токсин) вводится в мышцы лица для их
                    расслабления. Это помогает разгладить морщины и сделать кожу
                    более гладкой и молодой на вид.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Липолитики
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Косметологическая процедура, при которой ботокс
                    (ботулинический токсин) вводится в мышцы лица для их
                    расслабления. Это помогает разгладить морщины и сделать кожу
                    более гладкой и молодой на вид.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Мезотерапия
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Косметологическая процедура, при которой ботокс
                    (ботулинический токсин) вводится в мышцы лица для их
                    расслабления. Это помогает разгладить морщины и сделать кожу
                    более гладкой и молодой на вид.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Второй контейнер */}
        <div className="container-fluid mt-5" id="osobcont">
          <div
            className="row"
            style={{ marginLeft: 20 + "px", marginRight: 20 + "px" }}
          >
            <div
              className="d-none d-md-block col-md-12"
              style={{ paddingBottom: 50 + "px" }}
            >
              <div className="row mt-4">
                <div className="col-md-12 mt-4">
                  <h1
                    className="text-left ffamily"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    АППАРАТНАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    LED-маска с сывороткой
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Косметическое устройство, которое использует светодиоды
                    (LED) <br></br> для улучшения состояния кожи. В сочетании с
                    сывороткой она помогает бороться с акне, уменьшать морщины,
                    улучшать тонус и текстуру кожи. <br></br> Свет разных цветов
                    воздействует на разные проблемы кожи, <br></br> а сыворотка
                    усиливает эффект процедуры.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    RF-лифтинг
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Косметологическая процедура, при которой радиочастотные
                    волны прогревают кожу, стимулируя выработку коллагена и
                    эластина.<br></br> Это помогает подтянуть кожу, улучшить её
                    упругость и уменьшить<br></br> морщины.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Криотерапия
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Терапевтическое использование низких температур для лечения
                    <br></br>и оздоровления. В косметологии и медицине она
                    помогает уменьшить воспаление, улучшить кровообращение,
                    снять боль и ускорить восстановление тканей.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Микротоковая терапия
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Метод, при котором слабые электрические импульсы применяются{" "}
                    <br></br>
                    для стимуляции мышц или тканей. Она используется в
                    косметологии <br></br> для улучшения тонуса кожи, сокращения
                    морщин и улучшения <br></br> циркуляции крови.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Ультразвуковая терапия
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Метод, при котором высокочастотные звуковые волны
                    применяются <br></br> для лечения и косметических процедур.
                    В медицине она используется <br></br> для разрушения камней
                    в почках или желчном пузыре, а в косметологии <br></br>— для
                    улучшения текстуры кожи, уменьшения целлюлита и повышения
                    упругости кожи.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div
                className="row"
                style={{ marginLeft: 20 + "px", marginRight: 20 + "px" }}
              >
                <div className="col-12 col-sm-12 mt-5">
                  <h1
                    className="text-center"
                    style={{ color: "#602B1D", fontSize: 6.4 + "vw" }}
                  >
                    АППАРАТНАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    LED-маска с сывороткой
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Косметическое устройство, которое использует светодиоды
                    (LED) для улучшения состояния кожи. В сочетании с сывороткой
                    она помогает бороться с акне, уменьшать морщины, улучшать
                    тонус и текстуру кожи. Свет разных цветов воздействует на
                    разные проблемы кожи, а сыворотка усиливает эффект
                    процедуры.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    RF-лифтинг
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Косметологическая процедура, при которой радиочастотные
                    волны прогревают кожу, стимулируя выработку коллагена и
                    эластина. Это помогает подтянуть кожу, улучшить её упругость
                    и уменьшить морщины.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Криотерапия
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Терапевтическое использование низких температур для лечения
                    и оздоровления. В косметологии и медицине она помогает
                    уменьшить воспаление, улучшить кровообращение, снять боль и
                    ускорить восстановление тканей.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Микротоковая терапия
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Метод, при котором слабые электрические импульсы применяются
                    для стимуляции мышц или тканей. Она используется в
                    косметологии для улучшения тонуса кожи, сокращения морщин и
                    улучшения циркуляции крови.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3 mb-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Ультразвуковая терапия
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Метод, при котором высокочастотные звуковые волны
                    применяются для лечения и косметических процедур. В медицине
                    она используется для разрушения камней в почках или желчном
                    пузыре, а в косметологии — для улучшения текстуры кожи,
                    уменьшения целлюлита и повышения упругости кожи.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Третий контейнер */}
        <div className="container-fluid mt-5">
          <div className="row">
            <div
              className="d-none d-md-block col-md-12"
              style={{ paddingBottom: 50 + "px" }}
            >
              <div className="row">
                <div className="col-md-12 mt-3">
                  <h1
                    className="text-left ffamily"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    ЭСТЕТИЧЕСКАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Пилинги
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Косметологические процедуры, которые помогают отшелушивать{" "}
                    <br></br>
                    верхние слои кожи с помощью различных химических или
                    физических воздействий. Они улучшают текстуру кожи,
                    уменьшают морщины, выравнивают тон, уменьшают пигментацию и
                    способствуют обновлению клеток кожи.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Чистки
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Косметологическая процедура, включающая очищение кожи от
                    <br></br>
                    загрязнений, комедонов (черных точек) и мертвых клеток.
                    Обычно <br></br> включает паровую обработку лица,
                    механическое удаление проблемных элементов, маску и
                    увлажнение кожи.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row mt-3 mb-2">
                <div className="col-12 col-sm-12">
                  <h1
                    className="text-center"
                    style={{ color: "#602B1D", fontSize: 6.4 + "vw" }}
                  >
                    ЭСТЕТИЧЕСКАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Пилинги
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Косметологические процедуры, которые помогают отшелушивать
                    верхние слои кожи с помощью различных химических или
                    физических воздействий. Они улучшают текстуру кожи,
                    уменьшают морщины, выравнивают тон, уменьшают пигментацию и
                    способствуют обновлению клеток кожи.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Чистки
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Косметологическая процедура, включающая очищение кожи от
                    загрязнений, комедонов (черных точек) и мертвых клеток.
                    Обычно включает паровую обработку лица, механическое
                    удаление проблемных элементов, маску и увлажнение кожи.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Четвертый контейнер */}
        <div className="container-fluid mt-5 mb-5" id="osobcont">
          <div
            className="row"
            style={{ marginLeft: 20 + "px", marginRight: 20 + "px" }}
          >
            <div
              className="d-none d-md-block col-md-12"
              style={{ paddingBottom: 50 + "px" }}
            >
              <div className="row mt-4">
                <div className="col-md-12 mt-4">
                  <h1
                    className="text-left ffamily"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    МУЖСКАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Аппаратные процедуры
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Аппаратные процедуры для мужчин в косметологии включают{" "}
                    <br></br>
                    RF-лифтинг, ультразвуковую терапию, криотерапию,
                    микротоковую <br></br> терапию, LED-терапию. Эти методы
                    улучшают состояние кожи, <br></br> устраняют морщины,
                    воспаления и пигментацию.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Ботулинотерапия
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Инъекционная процедура, использующая ботулотоксин <br></br>{" "}
                    для разглаживания морщин и омоложения кожи. Препарат{" "}
                    <br></br> временно блокирует нервные импульсы в мышцах, что
                    приводит к их расслаблению и уменьшению выраженности морщин.
                    Процедура<br></br>
                    популярна для коррекции лба, области вокруг глаз и между{" "}
                    <br></br>
                    бровями. Эффект длится около 3-6 месяцев.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Пилинги
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Процедуры, направленные на обновление и улучшение состояния
                    кожи путем удаления ее верхних слоев. Они могут быть
                    химическими, механическими (микродермабразия) или
                    физическими (лазерные <br></br> пилинги). Пилинги помогают
                    уменьшить морщины, пигментацию, рубцы <br></br> от акне и
                    улучшить текстуру кожи. Процедуры стимулируют обновление
                    клеток, делая кожу более гладкой и свежей.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 46.5 + "px",
                }}
              >
                <div className="col-md-4 mt-2 ps-5">
                  <div style={{ color: "#602B1D", fontSize: 2.5 + "vw" }}>
                    Чистки
                  </div>
                </div>
                <div className="col-md-6 mt-2 lh-sm pe-2">
                  <div style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}>
                    Процедуры, направленные на глубокое очищение кожи от
                    загрязнений, избытка себума и черных точек. Включают
                    механическую чистку, ультразвуковую чистку и вакуумную
                    чистку. Эти процедуры улучшают <br></br> цвет лица,
                    предотвращают акне и улучшают общее состояние кожи,{" "}
                    <br></br> делая её более свежей и здоровой.
                  </div>
                </div>
                <div className="col-md-1 offset-1 mt-2 pe-2">
                  <img src={vector} alt="vector" />
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div
                className="row"
                style={{ marginLeft: 20 + "px", marginRight: 20 + "px" }}
              >
                <div className="col-12 col-sm-12 mt-5">
                  <h1
                    className="text-center"
                    style={{ color: "#602B1D", fontSize: 6.4 + "vw" }}
                  >
                    МУЖСКАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Аппаратные процедуры
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Аппаратные процедуры для мужчин в косметологии включают
                    RF-лифтинг, ультразвуковую терапию, криотерапию,
                    микротоковую терапию, LED-терапию. Эти методы улучшают
                    состояние кожи, устраняют морщины, воспаления и пигментацию.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Ботулинотерапия
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Инъекционная процедура, использующая ботулотоксин для
                    разглаживания морщин и омоложения кожи. Препарат временно
                    блокирует нервные импульсы в мышцах, что приводит к их
                    расслаблению и уменьшению выраженности морщин. Процедура
                    популярна для коррекции лба, области вокруг глаз и между
                    бровями. Эффект длится около 3-6 месяцев.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Пилинги
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Процедуры, направленные на обновление и улучшение состояния
                    кожи путем удаления ее верхних слоев. Они могут быть
                    химическими, механическими (микродермабразия) или
                    физическими (лазерные пилинги). Пилинги помогают уменьшить
                    морщины, пигментацию, рубцы от акне и улучшить текстуру
                    кожи. Процедуры стимулируют обновление клеток, делая кожу
                    более гладкой и свежей.
                  </div>
                </div>
              </div>
              <div
                className="row mt-3 mb-5"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20 + "px",
                }}
              >
                <div className="col-8 col-sm-8">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Чистки
                  </div>
                </div>
                <div className="col-4 col-sm-4">
                  <img src={vectormob} alt="vectormob" />
                </div>
                <div className="col-12 col-sm-12 mt-2">
                  <div
                    className="lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    Процедуры, направленные на глубокое очищение кожи от
                    загрязнений, избытка себума и черных точек. Включают
                    механическую чистку, ультразвуковую чистку и вакуумную
                    чистку. Эти процедуры улучшают цвет лица, предотвращают акне
                    и улучшают общее состояние кожи, делая её более свежей и
                    здоровой.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

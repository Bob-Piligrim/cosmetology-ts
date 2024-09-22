import { Component } from "react";

import vector from "../Assets/ForPrice/Desctop/vector.png";
import vectormob from "../Assets/ForPrice/Mobile/vectormob.png";

export default class Price extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="d-none d-md-block col-md-12 mb-5">
              <div className="row mt-3">
                <div className="col-md-12">
                  <h1
                    className="text-start ffamily"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    ИНЪЕКЦИОННАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingTop: 26.5 + "px",
                  paddingBottom: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Биоревитализация
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 26.5 + "px",
                  paddingTop: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Ботулинотерапия
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 26.5 + "px",
                  paddingTop: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Контурная пластика
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 26.5 + "px",
                  paddingTop: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Лечение гипергидроза
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 26.5 + "px",
                  paddingTop: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Липолитики
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 26.5 + "px",
                  paddingTop: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Мезотерапия
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row">
                <div className="col-12 col-sm-12">
                  <h1
                    className="ffamily text-center"
                    style={{ color: "#602B1D", fontSize: 6.7 + "vw" }}
                  >
                    ИНЪЕКЦИОННАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    Биоревитализация
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    Ботулинотерапия
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    Контурная пластика
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    Лечение гипергидроза
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    Липолитики
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    Мезотерапия
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
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
            <div className="d-none d-md-block col-md-12 mb-5">
              <div className="row mt-3">
                <div className="col-md-12">
                  <h1
                    className="text-start ffamily pt-4"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    АППАРАТНАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingTop: 26.5 + "px",
                  paddingBottom: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    LED-маска с сывороткой
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingTop: 26.5 + "px",
                  paddingBottom: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    RF-лифтинг
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingTop: 26.5 + "px",
                  paddingBottom: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Криотерапия
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingTop: 26.5 + "px",
                  paddingBottom: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Микротоковая терапия
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingTop: 26.5 + "px",
                  paddingBottom: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Ультразвуковая терапия
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12 mb-5 pt-5">
              <div className="row">
                <div className="col-12 col-sm-12">
                  <h1
                    className="ffamily text-center"
                    style={{ color: "#602B1D", fontSize: 6.7 + "vw" }}
                  >
                    АППАРАТНАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    LED-маска с сывороткой
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    RF-лифтинг
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Криотерапия
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Микротоковая терапия
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Ультразвуковая терапия
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Третий контейнер */}
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="d-none d-md-block col-md-12 mb-5">
              <div className="row mt-3">
                <div className="col-md-12 mt-5">
                  <h1
                    className="text-start ffamily"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    ЭСТЕТИЧЕСКАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingTop: 26.5 + "px",
                  paddingBottom: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Пилинги
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 26.5 + "px",
                  paddingTop: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Чистки
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row">
                <div className="col-12 col-sm-12">
                  <h1
                    className="ffamily text-center"
                    style={{ color: "#602B1D", fontSize: 6.7 + "vw" }}
                  >
                    ЭСТЕТИЧЕСКАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    Пилинги
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    Чистки
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Четвертый контейнер */}
        <div className="container-fluid mt-5 mb-4" id="osobcont">
          <div
            className="row mb-5"
            style={{ marginLeft: 20 + "px", marginRight: 20 + "px" }}
          >
            <div className="d-none d-md-block col-md-12 mb-5">
              <div className="row mt-3">
                <div className="col-md-12">
                  <h1
                    className="text-start ffamily pt-4"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    МУЖСКАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingTop: 26.5 + "px",
                  paddingBottom: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Аппаратные процедуры
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingTop: 26.5 + "px",
                  paddingBottom: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Ботулинотерапия
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingTop: 26.5 + "px",
                  paddingBottom: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Пилинги
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingTop: 26.5 + "px",
                  paddingBottom: 26.5 + "px",
                }}
              >
                <div className="col-md-6">
                  <div
                    className="text-start py-2"
                    style={{ color: "#602B1D", fontSize: 3 + "vw" }}
                  >
                    Чистки
                  </div>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <img src={vector} alt="vector" />
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12 mb-5">
              <div className="row pt-4">
                <div className="col-12 col-sm-12">
                  <h1
                    className="ffamily text-center"
                    style={{ color: "#602B1D", fontSize: 6.7 + "vw" }}
                  >
                    МУЖСКАЯ КОСМЕТОЛОГИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Аппаратные 
                    процедуры
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Ботулинотерапия
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Пилинги
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                  paddingBottom: 20.5 + "px",
                  paddingTop: 20.5 + "px",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Чистки
                  </div>
                </div>
                <div className="col-6 col-sm-6 text-end">
                  <img src={vectormob} alt="vectormob" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import { Component } from "react";

import present from "../Services_pages/Botulinoterapia/Desctop/present.png";
import strelkal from "../Services_pages/Botulinoterapia/Desctop/strelkal.png";
import strelkap from "../Services_pages/Botulinoterapia/Desctop/strelkap.png";
import wm1 from "../Services_pages/Botulinoterapia/Desctop/wm1.png";
import wm2 from "../Services_pages/Botulinoterapia/Desctop/wm2.png";

import presentmob from "../Services_pages/Botulinoterapia/Mobile/presentmob.png";

export class Botulinoterapia extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="d-none d-md-block col-md-12"
              style={{ paddingBottom: 20 + "px" }}
            >
              <div className="row mt-3 mb-3">
                <div className="col-md-12">
                  <h1
                    className="text-left ffamily"
                    style={{ color: "#602B1D", fontSize: 4 + "vw" }}
                  >
                    БОТУЛИНОТЕРАПИЯ
                  </h1>
                </div>
              </div>
              <div
                className="row mt-1 mb-2"
                style={{
                  border: 2 + "px",
                  borderStyle: "dashed",
                  borderRadius: 13 + "px",
                  borderColor: "#602B1D",
                }}
              >
                <div className="col-md-3 ms-5" style={{ paddingTop: 40 + "px" }}>
                  <div
                    className="text-left"
                    style={{ color: "#602B1D", fontSize: 2 + "vw" }}
                  >
                    Об услуге:
                  </div>
                </div>
                <div
                  className="col-md-8 ms-5"
                  style={{ paddingTop: 40 + "px", paddingBottom: 40 + "px" }}
                >
                  <div
                    className="text-left lh-sm mb-3"
                    style={{ color: "#602B1D", fontSize: 1.4 + "vw" }}
                  >
                    Ботулинотерапия, или инъекции ботокса, применяется для
                    уменьшения мимических морщин на лице. В процедуре
                    используется ботулинумный токсин типа A, который временно
                    парализует или ослабляет активность мышц, блокируя нервные
                    импульсы к ним. Это помогает сгладить морщины на лбу, между
                    бровями и вокруг глаз.
                  </div>
                  <div
                    className="text-left lh-sm"
                    style={{ color: "#602B1D", fontSize: 1.4 + "vw" }}
                  >
                    Эффект начинает проявляться через несколько дней, достигает
                    пика через 1-2 недели и длится от 3 до 6 месяцев. Процедура
                    проводится быстро, с минимальным дискомфортом.
                  </div>
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row mt-5">
                <div className="col-12 col-sm-12">
                  <h1
                    className="text-center ffamily"
                    style={{ color: "#602B1D", fontSize: 6.6 + "vw" }}
                  >
                    {" "}
                    БОТУЛИНОТЕРАПИЯ{" "}
                  </h1>
                </div>
              </div>
              <div
                className="row"
                style={{
                  border: 2 + "px",
                  borderStyle: "dashed",
                  borderRadius: 13 + "px",
                  borderColor: "#602B1D",
                }}
              >
                <div className="col-12 col-sm-12 pt-3">
                  <div style={{ color: "#602B1D", fontSize: 5 + "vw" }}>
                    Об услуге:
                  </div>
                  <div
                    className="pt-3 lh-sm"
                    style={{ color: "#602B1D", fontSize: 4.3 + "vw" }}
                  >
                    Ботулинотерапия, или инъекции ботокса, применяется для
                    уменьшения мимических морщин на лице. В процедуре
                    используется ботулинумный токсин типа A, который временно
                    парализует или ослабляет активность мышц, блокируя нервные
                    импульсы к ним. Это помогает сгладить морщины на лбу, между
                    бровями и вокруг глаз.
                  </div>
                  <div
                    className="py-3 lh-sm"
                    style={{ color: "#602B1D", fontSize: 4.3 + "vw" }}
                  >
                    Эффект начинает проявляться через несколько дней, достигает
                    пика через 1-2 недели и длится от 3 до 6 месяцев. Процедура
                    проводится быстро, с минимальным дискомфортом.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Второй контейнер */}
        <div className="container-fluid">
          <div className="row">
            <div
              className="d-none d-md-block col-md-12"
              style={{ paddingBottom: 20 + "px" }}
            >
              <div
                className="row mt-1 mb-2"
                style={{
                  border: 2 + "px",
                  borderStyle: "dashed",
                  borderRadius: 13 + "px",
                  borderColor: "#602B1D",
                  backgroundColor: "#2B8069",
                }}
              >
                <div className="col-md-3 ms-5" style={{ paddingTop: 40 + "px" }}>
                  <div
                    className="text-left"
                    style={{ color: "#FFEBCA", fontSize: 2 + "vw" }}
                  >
                    Подходит:
                  </div>
                </div>
                <div
                  className="col-md-8"
                  style={{ paddingTop: 40 + "px", paddingBottom: 20 + "px" }}
                >
                  <div
                    className="text-left lh-sm mb-3 ms-5"
                    style={{ color: "#FFEBCA", fontSize: 1.4 + "vw" }}
                  >
                    – морщины вокруг губ и глаз;<br></br> – межбровные и лобные
                    морщины;<br></br>– крупные носогубные складки;<br></br> –
                    опущение уголков губ;<br></br> – ухудшение формы лица;
                    <br></br> – гипергидроз;<br></br> – снижение тургора кожи в
                    зоне декольте.
                  </div>
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div
                className="row mt-4"
                style={{
                  border: 2 + "px",
                  borderStyle: "dashed",
                  borderRadius: 13 + "px",
                  borderColor: "#602B1D",
                  backgroundColor: "#2B8069",
                }}
              >
                <div className="col-12 col-sm-12 pt-3">
                  <div
                    className="text-left"
                    style={{ color: "#FFEBCA", fontSize: 5 + "vw" }}
                  >
                    Подходит:
                  </div>
                </div>
                <div className="col-12 col-sm-12 py-3">
                  <div
                    className="text-left lh-sm"
                    style={{ color: "#FFEBCA", fontSize: 4.3 + "vw" }}
                  >
                    – морщины вокруг губ и глаз;<br></br> – межбровные и лобные
                    морщины;<br></br>– крупные носогубные складки;<br></br> –
                    опущение уголков губ;<br></br> – ухудшение формы лица;
                    <br></br> – гипергидроз;<br></br> – снижение тургора кожи в
                    зоне декольте.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Третий контейнер */}
        <div className="container-fluid">
          <div className="row">
            <div
              className="d-none d-md-block col-md-12"
              style={{ paddingBottom: 20 + "px" }}
            >
              <div
                className="row mt-1 mb-2"
                style={{
                  border: 2 + "px",
                  borderStyle: "dashed",
                  borderRadius: 13 + "px",
                  borderColor: "#602B1D",
                  backgroundColor: "#FFEBCA",
                }}
              >
                <div className="col-md-3 ms-5" style={{ paddingTop: 40 + "px" }}>
                  <div
                    className="text-left"
                    style={{ color: "#602B1D", fontSize: 2 + "vw" }}
                  >
                    Противопоказания:
                  </div>
                </div>
                <div
                  className="col-md-8"
                  style={{ paddingTop: 40 + "px", paddingBottom: 20 + "px" }}
                >
                  <div
                    className="text-left lh-sm mb-3 ms-5"
                    style={{ color: "#602B1D", fontSize: 1.4 + "vw" }}
                  >
                    – нарушения нервно-мышечной системы; <br></br>– острые
                    инфекции;<br></br>– воспалительные процессы кожи лица;
                    <br></br>– гравитационный птоз;<br></br>– нарушение
                    свертываемости крови;<br></br>– хронические заболевания
                    печени, почек, легких;<br></br>– склонность к рубцеванию
                    кожи;<br></br>– онкология;<br></br>– беременность и период
                    лактации;<br></br>– выраженная миопия;<br></br>– крупные
                    грыжи в районе век.<br></br>
                  </div>
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div
                className="row mt-4"
                style={{
                  border: 2 + "px",
                  borderStyle: "dashed",
                  borderRadius: 13 + "px",
                  borderColor: "#602B1D",
                  backgroundColor: "#FFEBCA",
                }}
              >
                <div className="col-12 col-sm-12 pt-3">
                  <div
                    className="text-left"
                    style={{ color: "#602B1D", fontSize: 5 + "vw" }}
                  >
                    Противопоказания:
                  </div>
                </div>
                <div className="col-12 col-sm-12 py-3">
                  <div
                    className="text-left lh-sm"
                    style={{ color: "#602B1D", fontSize: 4.3 + "vw" }}
                  >
                    – нарушения нервно-мышечной системы; <br></br>– острые
                    инфекции;<br></br>– воспалительные процессы кожи лица;
                    <br></br>– гравитационный птоз;<br></br>– нарушение
                    свертываемости крови;<br></br>– хронические заболевания
                    печени, почек, легких;<br></br>– склонность к рубцеванию
                    кожи;<br></br>– онкология;<br></br>– беременность и период
                    лактации;<br></br>– выраженная миопия;<br></br>– крупные
                    грыжи в районе век.<br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Четвертый контейнер */}
        <div className="container-fluid">
          <div className="row">
            <div
              className="d-none d-md-block col-md-12"
              style={{ paddingBottom: 40 + "px" }}
            >
              <div className="row">
                <form className="col-md-6 d-flex align-items-center justify-content-center ps-0">
                  <button
                    className="btn btn-outline-dark me-1"
                    type="submit"
                    style={{
                      backgroundColor: "#F8C77A",
                      border: 1 + "px",
                      borderStyle: "dashed",
                      borderColor: "#602B1D",
                      width: "100%",
                      height: 60 + "px",
                    }}
                  >
                    Записаться на процедуру
                  </button>
                </form>
                <form className="col-md-6 d-flex align-items-center justify-content-center pe-0">
                  <button
                    className="btn btn-outline-dark me-1"
                    type="submit"
                    style={{
                      border: 1 + "px",
                      borderStyle: "dashed",
                      borderColor: "#602B1D",
                      width: "100%",
                      height: 60 + "px",
                    }}
                  >
                    Посмотреть результаты
                  </button>
                </form>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row mt-2">
                <form className="col-12 col-sm-12 d-flex align-items-center justify-content-center px-0">
                  <button
                    className="btn btn-outline-dark"
                    type="submit"
                    style={{
                      backgroundColor: "#F8C77A",
                      border: 1 + "px",
                      borderStyle: "dashed",
                      borderColor: "#602B1D",
                      width: "100%",
                      height: 60 + "px",
                    }}
                  >
                    Записаться на процедуру
                  </button>
                </form>
                <form className="col-12 col-sm-12 d-flex align-items-center justify-content-center mt-3 px-0">
                  <button
                    className="btn btn-outline-dark"
                    type="submit"
                    style={{
                      border: 1 + "px",
                      borderStyle: "dashed",
                      borderColor: "#602B1D",
                      width: "100%",
                      height: 60 + "px",
                    }}
                  >
                    Посмотреть результаты
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Пятый контейнер */}
        <div className="container-fluid">
          <div className="row">
            <div
              className="d-none d-md-block col-md-12"
              style={{ paddingBottom: 15 + "px" }}
            >
              <div
                className="row"
                style={{
                  paddingBottom: 25 + "px",
                  borderBottom: 2 + "px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "#602B1D",
                }}
              >
                <div className="col-md-6">
                  <h1
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 3.6 + "vw" }}
                  >
                    СТОИМОСТЬ УСЛУГ
                  </h1>
                </div>
                <div className="col-md-6">
                  <div
                    className="text-end"
                    style={{
                      color: "#602B1D",
                      fontSize: 2.4 + "vw",
                      textShadow: 50 + "%",
                    }}
                  >
                    Ботулинотерапия
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                }}
              >
                <div
                  className="col-md-6"
                  style={{ marginTop: 40 + "px", marginBottom: 40 + "px" }}
                >
                  <h1
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 1.8 + "vw" }}
                  >
                    Ботокс (1 ед)
                  </h1>
                </div>
                <div className="col-md-6">
                  <div
                    className="text-end price"
                    style={{
                      color: "#602B1D",
                      fontSize: 1.8 + "vw",
                      textShadow: 50 + "%",
                      marginTop: 40 + "px",
                      marginBottom: 40 + "px",
                    }}
                  >
                    330
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                }}
              >
                <div
                  className="col-md-6"
                  style={{ marginTop: 40 + "px", marginBottom: 40 + "px" }}
                >
                  <h1
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 1.8 + "vw" }}
                  >
                    Диспорт (1 ед) / больше 100 ед
                  </h1>
                </div>
                <div className="col-md-6">
                  <div
                    className="text-end price"
                    style={{
                      color: "#602B1D",
                      fontSize: 1.8 + "vw",
                      textShadow: 50 + "%",
                      marginTop: 40 + "px",
                      marginBottom: 40 + "px",
                    }}
                  >
                    140 / 130
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                }}
              >
                <div
                  className="col-md-6"
                  style={{ marginTop: 40 + "px", marginBottom: 40 + "px" }}
                >
                  <h1
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 1.8 + "vw" }}
                  >
                    Ксеомин (1 ед) / больше 100 ед
                  </h1>
                </div>
                <div className="col-md-6">
                  <div
                    className="text-end price"
                    style={{
                      color: "#602B1D",
                      fontSize: 1.8 + "vw",
                      textShadow: 50 + "%",
                      marginTop: 40 + "px",
                      marginBottom: 40 + "px",
                    }}
                  >
                    330 / 320
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                }}
              >
                <div
                  className="col-md-6"
                  style={{ marginTop: 40 + "px", marginBottom: 40 + "px" }}
                >
                  <h1
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 1.8 + "vw" }}
                  >
                    Релатокс (1 ед)
                  </h1>
                </div>
                <div className="col-md-6">
                  <div
                    className="text-end price"
                    style={{
                      color: "#602B1D",
                      fontSize: 1.8 + "vw",
                      textShadow: 50 + "%",
                      marginTop: 40 + "px",
                      marginBottom: 40 + "px",
                    }}
                  >
                    330
                  </div>
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div
                className="row mt-5"
                style={{
                  paddingBottom: 20 + "px",
                  borderBottom: 2 + "px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "#602B1D",
                }}
              >
                <div className="col-12 col-sm-12 px-0">
                  <h1
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 5 + "vw" }}
                  >
                    СТОИМОСТЬ УСЛУГ
                  </h1>
                  <div
                    className="text-start"
                    style={{
                      color: "#602B1D",
                      fontSize: 4.2 + "vw",
                      textShadow: 50 + "%",
                    }}
                  >
                    Ботулинотерапия
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <h1
                    className="text-start py-3"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Ботокс (1 ед)
                  </h1>
                </div>
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-end price py-3"
                    style={{
                      color: "#602B1D",
                      fontSize: 3.5 + "vw",
                      textShadow: 50 + "%",
                    }}
                  >
                    330
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <h1
                    className="text-start py-3"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Диспорт (1 ед) / больше 100 ед
                  </h1>
                </div>
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-end price py-3"
                    style={{
                      color: "#602B1D",
                      fontSize: 3.5 + "vw",
                      textShadow: 50 + "%",
                    }}
                  >
                    140 / 130
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <h1
                    className="text-start py-3"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Ксеомин (1 ед) / больше 100 ед
                  </h1>
                </div>
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-end price py-3"
                    style={{
                      color: "#602B1D",
                      fontSize: 3.5 + "vw",
                      textShadow: 50 + "%",
                    }}
                  >
                    330 / 320
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{
                  borderBottom: 2 + "px",
                  borderBottomStyle: "dashed",
                  borderBottomColor: "#602B1D",
                }}
              >
                <div className="col-6 col-sm-6 px-0">
                  <h1
                    className="text-start py-3"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Релатокс (1 ед)
                  </h1>
                </div>
                <div className="col-6 col-sm-6 px-0">
                  <div
                    className="text-end price py-3"
                    style={{
                      color: "#602B1D",
                      fontSize: 3.5 + "vw",
                      textShadow: 50 + "%",
                    }}
                  >
                    330
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Шестой контейнер */}
        <div className="container-fluid">
          <div className="row">
            <div
              className="d-none d-md-block col-md-12"
              style={{ paddingBottom: 30 + "px" }}
            >
              <div className="row">
                <div
                  className="col-md-6 center"
                  style={{
                    border: 3 + "px",
                    borderColor: "#602B1D",
                    borderStyle: "dashed",
                    borderRadius: 13 + "px",
                    backgroundColor: "#FFEBCA",
                  }}
                >
                  <div
                    className="text-start ms-4 mb-2 pt-4 lh-sm"
                    style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}
                  >
                    Препарат подбирается индивидуально, исходя из:
                  </div>
                  <div
                    className="text-start ms-4 mt-3 lh-sm"
                    style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}
                  >
                    – состояния кожи; <br></br> – типа и выраженности морщин{" "}
                    <br></br> – возраста пациента;<br></br> – объема необходимой
                    коррекции <br></br> – истории предыдущих инъекций и реакции
                    на них<br></br> – наличия аллергий и противопоказаний
                  </div>
                </div>
                <div
                  className="col-md-6 center"
                  style={{
                    border: 3 + "px",
                    borderColor: "#602B1D",
                    borderStyle: "dashed",
                    borderRadius: 13 + "px",
                    backgroundColor: "#FFEBCA",
                  }}
                >
                  <div
                    className="text-start ms-4 mb-3 pt-4 lh-sm"
                    style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}
                  >
                    Количество процедур зависит от индивидуальных<br></br>{" "}
                    особенностей пациента, степени выраженности <br></br>морщин,
                    желаемого результата, реакции на первую <br></br> процедуру,
                    общего состояния кожи.
                  </div>
                  <div
                    className="text-start ms-4 mb-3 pt-1 lh-sm"
                    style={{ color: "#602B1D", fontSize: 1.3 + "vw" }}
                  >
                    Регулярные процедуры могут потребоваться<br></br> для
                    поддержания эффекта и предотвращения новых <br></br> морщин.
                  </div>
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row mt-3">
                <div
                  className="col-12 col-sm-12"
                  style={{
                    border: 2 + "px",
                    borderStyle: "dashed",
                    borderRadius: 13 + "px",
                    borderColor: "black",
                    backgroundColor: "#FFEBCA",
                  }}
                >
                  <div
                    className="text-start mt-3 ms-4 lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Препарат подбирается индивидуально, исходя из:
                  </div>
                  <div
                    className="text-start ms-4 mt-3 mb-4 lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    – состояния кожи; <br></br> – типа и выраженности морщин{" "}
                    <br></br> – возраста пациента;<br></br> – объема необходимой
                    коррекции <br></br> – истории предыдущих инъекций и реакции
                    на них<br></br> – наличия аллергий и противопоказаний
                  </div>
                </div>
                <div
                  className="col-12 col-sm-12 mt- pb-3"
                  style={{
                    border: 3 + "px",
                    borderColor: "#602B1D",
                    borderStyle: "dashed",
                    borderRadius: 13 + "px",
                    backgroundColor: "#FFEBCA",
                  }}
                >
                  <div
                    className="text-start ms-4 mb-3 pt-4 lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Количество процедур зависит от индивидуальных<br></br>{" "}
                    особенностей пациента, степени выраженности <br></br>морщин,
                    желаемого результата, реакции на первую <br></br> процедуру,
                    общего состояния кожи.
                  </div>
                  <div
                    className="text-start ms-4 mb-3 pt-1 lh-sm"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    Регулярные процедуры могут потребоваться<br></br> для
                    поддержания эффекта и предотвращения новых <br></br> морщин.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Седьмой контейнер */}
        <div className="container-fluid">
          <div className="row">
            <div
              className="d-none d-md-block col-md-12"
              style={{ paddingBottom: 20 + "px" }}
            >
              <div
                className="row rounded"
                style={{ backgroundColor: "#2B8069", marginBottom: 40 + "px" }}
              >
                <div className="col-md-9 d-flex align-items-center">
                  <h1
                    className="ps-3"
                    style={{ color: "#FFEBCA", fontSize: 3.8 + "vw" }}
                  >
                    Коррекция через 2 недели при необходимости БЕСПЛАТНАЯ
                  </h1>
                </div>
                <div className="col-md-3 d-flex justify-content-end my-5">
                  <img className="img-fluid" src={present} alt="present" />
                </div>
              </div>
              <div className="row">
                <form className="col-md-6 d-flex align-items-center justify-content-center ps-0">
                  <button
                    className="btn btn-outline-dark me-1"
                    type="submit"
                    style={{
                      backgroundColor: "#F8C77A",
                      border: 1 + "px",
                      borderStyle: "dashed",
                      borderColor: "#602B1D",
                      width: "100%",
                      height: 60 + "px",
                    }}
                  >
                    Записаться на процедуру
                  </button>
                </form>
                <form className="col-md-6 d-flex align-items-center justify-content-center pe-0">
                  <button
                    className="btn btn-outline-dark me-1"
                    type="submit"
                    style={{
                      border: 1 + "px",
                      borderStyle: "dashed",
                      borderColor: "#602B1D",
                      width: "100%",
                      height: 60 + "px",
                    }}
                  >
                    Задать вопрос
                  </button>
                </form>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div
                className="row rounded py-4"
                style={{ backgroundColor: "#2B8069" }}
              >
                <div className="col-12 col-sm-12 text-center">
                  <img className="img-fluid" src={presentmob} alt="presentmob" />
                </div>
                <div className="col-12 col-sm-12 text-center">
                  <div style={{ color: "#FFEBCA", fontSize: 7 + "vw" }}>
                    Коррекция через 2 недели при необходимости БЕСПЛАТНАЯ
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <form className="col-12 col-sm-12 d-flex align-items-center justify-content-center px-0">
                  <button
                    className="btn btn-outline-dark me-1"
                    type="submit"
                    style={{
                      backgroundColor: "#F8C77A",
                      border: 1 + "px",
                      borderStyle: "dashed",
                      borderColor: "#602B1D",
                      width: "100%",
                      height: 60 + "px",
                    }}
                  >
                    Записаться на процедуру
                  </button>
                </form>
                <form className="col-12 col-sm-12 d-flex align-items-center justify-content-center px-0 mt-3">
                  <button
                    className="btn btn-outline-dark me-1"
                    type="submit"
                    style={{
                      border: 1 + "px",
                      borderStyle: "dashed",
                      borderColor: "#602B1D",
                      width: "100%",
                      height: 60 + "px",
                    }}
                  >
                    Задать вопрос
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Восьмой контейнер */}
        <div className="container-fluid mt-5">
          <div className="row">
            <div
              className="d-none d-md-block col-md-12"
              style={{ paddingBottom: 20 + "px" }}
            >
              <div className="row">
                <div className="col-md-6">
                  <h1
                    className="text-start"
                    style={{ color: "#602B1D", fontSize: 3.5 + "vw" }}
                  >
                    РЕЗУЛЬТАТЫ ПАЦИЕНТОК
                  </h1>
                </div>
                <div className="col-md-6 text-end" style={{ padding: 0 }}>
                  <img className="img-fluid" src={strelkal} alt="strelkal" />
                  <img className="img-fluid" src={strelkap} alt="strelkap" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <img className="img-fluid" src={wm1} alt="wm1" />
                </div>
                <div className="col-md-6">
                  <img className="img-fluid" src={wm2} alt="wm2" />
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row mt-5">
                <div className="col-12 col-sm-12 px-0">
                  <h1
                    className="text-center"
                    style={{ color: "#602B1D", fontSize: 6.7 + "vw" }}
                  >
                    РЕЗУЛЬТАТЫ ПАЦИЕНТОК
                  </h1>
                </div>
                <div className="col-12 col-sm-12 mt-3 px-0">
                  <img className="img-fluid" src={wm1} alt="wm1" />
                </div>
                <div className="col-12 col-sm-12 mt-2 px-0">
                  <img className="img-fluid" src={wm2} alt="wm2" />
                </div>
              </div>
              <div className="row mt-3 my-5">
                <div className="col-6 col-sm-6 ps-0">
                  <img className="img-fluid" src={strelkal} alt="strelkal" />
                </div>
                <div className="col-6 col-sm-6 pe-0">
                  <img className="img-fluid" src={strelkap} alt="strelkap" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

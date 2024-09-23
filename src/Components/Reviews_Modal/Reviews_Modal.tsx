import { Component } from "react";

import "../Reviews_Modal/Reviews_Modal.css";
import Ex1 from "./Assets/Ex1.png";
import left from "./Assets/left.png";
import right from "./Assets/right.png";
import Kovleft from "../../Assets/ForHome/Desctop/Kovleft.png";
import Kovright from "../../Assets/ForHome/Desctop/Kovright.png";

export default class Reviews_Modal extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="Reviews"
          data-bs-backdrop="true"
          data-bs-keyboard="true"
          tabIndex={-1}
          aria-labelledby="Rev"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            id="Rev_media-dialog"
          >
            <div className="modal-content" id="Rev_media-content">
              <div
                id="Rev"
                className="modal-header d-flex justify-content-center align-items-center"
              >
                <div className="modal-title" style={{ marginLeft: 7 + "px" }}>
                  <div className="ffamily text-center" id="Rev_title">
                    Отзывы от моих пациенток
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  id="Rev_button"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body" id="Rev_media-body">
                <div
                  id="carouselReviews"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <img src={Kovleft} alt="Kovleft" className="Rev_kovleft" />
                  <img src={Kovright} alt="Kovright" className="Rev_kovright" />
                  <div className="carousel-inner">
                    <div className="carousel-item active" id="Rev_cont">
                      <div className="col-md-2" id="Rev_border-left"></div>
                      <div className="col-12 col-sm-12 col-md-10" id="Rev_border">
                        <div id="Rev_text">
                          Это был мой первый опыт косметических процедур, и я
                          полностью довольна результатами. Внимательное
                          отношение, индивидуальный подход и, конечно,
                          восхитительные результаты!
                        </div>
                        <div id="Rev_img-border">
                          <svg id="Rev_svg">
                            <rect id="Rev_rect" x="0.5" y="1.29297" rx="11.5" />
                            <foreignObject x="0" y="0" id="Rev_foreignObject">
                              <div id="Rev_reviews">
                                <div id="Rev_img">
                                  <img
                                    src={Ex1}
                                    className="d-block"
                                    alt="ex1"
                                  />
                                </div>
                                <div id="Rev_nd">
                                  <div id="Rev_name">Лиза Семакина</div>
                                  <div id="Rev_date">27.12.2024</div>
                                </div>
                              </div>
                            </foreignObject>
                          </svg>
                        </div>
                      </div>
                      <div className="col-md-2" id="Rev_border-right"></div>
                    </div>
                    <div className="carousel-item" id="Rev_cont">
                      <div className="col-md-2" id="Rev_border-left"></div>
                      <div className="col-md-10" id="Rev_border">
                        <div id="Rev_text">
                          Это был мой первый опыт косметических процедур, и я
                          полностью довольна результатами. Внимательное
                          отношение, индивидуальный подход и, конечно,
                          восхитительные результаты! asfasfa
                        </div>
                        <div id="Rev_img-border">
                        <svg className="col-12" id="Rev_svg">
                            <rect id="Rev_rect" x="0.5" y="1.29297" rx="11.5" />
                            <foreignObject x="0" y="0" id="Rev_foreignObject">
                              <div id="Rev_reviews">
                                <div id="Rev_img">
                                  <img
                                    src={Ex1}
                                    className="d-block"
                                    alt="ex1"
                                  />
                                </div>
                                <div id="Rev_nd">
                                  <div id="Rev_name">Лиза Семакина</div>
                                  <div id="Rev_date">27.12.2024</div>
                                </div>
                              </div>
                            </foreignObject>
                          </svg>
                        </div>
                      </div>
                      <div className="col-md-2" id="Rev_border-right"></div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    role="button"
                    href="#carouselReviews"
                    data-bs-slide="prev"
                    id="Rev_left"
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
                    href="#carouselReviews"
                    data-bs-slide="next"
                    id="Rev_right"
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

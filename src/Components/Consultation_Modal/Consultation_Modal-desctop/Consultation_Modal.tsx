import React, { Component } from "react";
import "../Consultation_Modal-desctop/Consultation_Modal.css";
import AlinaZapic from "../Assets/AlinaZapic.png";

export default class ConsultationPopUp extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="Consultation"
          data-bs-backdrop="true"
          data-bs-keyboard="true"
          tabIndex={-1}
          aria-labelledby="Consult"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" id="Cons_media-dialog">
            <div className="modal-content" id="Cons_media-content">
              <div
                id="Consult"
                className="modal-header d-flex justify-content-center align-items-center"
              >
                <div className="modal-title" style={{ marginLeft: 7 + "px" }}>
                  <div
                    className="ffamily text-center"
                    style={{ color: "#602B1D", fontSize: 2.7 + "vw" }}
                  >
                    Записать на консультацию
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  style={{ marginRight: 7 + "px" }}
                ></button>
              </div>
              <div className="modal-body container-fluid">
                <div className="row" id="Cons_media-row">
                  <div className="col-md-6" id="Cons_media-img">
                    <img className="Cons_img" src={AlinaZapic} alt="AlinaZapic" />
                  </div>
                  <div className="col-md-6" id="Cons_media-col">
                    <form>
                      <div className="form-group" id="Cons_media-input">
                        <input
                          type="text"
                          className="form-control-plaintext"
                          id="InputText"
                          placeholder="Ваше имя"
                        />
                        <svg fill="none" viewBox="0 0 84 1">
                          <line x1={0} x2={80} y1={0} y2={0}></line>
                        </svg>
                      </div>
                      <div className="form-group" id="Cons_media-input">
                        <input
                          type="text"
                          className="form-control-plaintext"
                          id="InputNumber"
                          placeholder="Номер телефона"
                        />
                        <svg fill="none" viewBox="0 0 84 1">
                          <line x1={0} x2={80} y1={0} y2={0}></line>
                        </svg>
                      </div>
                      <div className="form-group" id="Cons_media-input">
                        <input
                          type="email"
                          className="form-control-plaintext"
                          id="InputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="E-mail"
                        />
                        <svg fill="none" viewBox="0 0 84 1">
                          <line
                            x1={0}
                            x2={80}
                            y1={0}
                            y2={0}
                            strokeDasharray={2.5}
                          ></line>
                        </svg>
                      </div>
                      <select className="form-control-plaintext" id="Cons_media-select">
                        <option>Выберите вариант</option>
                      </select>
                      <svg fill="none" viewBox="0 0 84 1">
                        <line x1={0} x2={80} y1={0} y2={0}></line>
                      </svg>
                    </form>
                    <div id="Cons_media-span">
                      <div>
                        Отправляя данную форму, Вы соглашаетесь на обработку
                        персональных данных
                      </div>
                    </div>
                    <div
                      className="col-item d-flex align-items-center justify-content-center"
                      id="Cons_media-form"
                    >
                      <button id="Cons_media-button" className="btn me-1" type="submit">
                        Отправить заявку
                      </button>
                    </div>
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

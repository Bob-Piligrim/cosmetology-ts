import React, { Component } from "react";

import Procedure from "../Assets/Procedure.png";
import "../Reception_Modal-desctop/Reception_Modal.css"

export default class Reception_Modal extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="Procedure"
          data-bs-backdrop="true"
          data-bs-keyboard="true"
          tabIndex={-1}
          aria-labelledby="Proce"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" id="Rec_media-dialog">
            <div className="modal-content" id="Rec_media-content">
              <div
                id="Proce"
                className="modal-header d-flex justify-content-center align-items-center"
              >
                <div className="modal-title" style={{ marginLeft: 7 + "px" }}>
                  <div
                    className="ffamily text-center"
                    style={{ color: "#602B1D", fontSize: 2.7 + "vw" }}
                  >
                    Запись на процедуру
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
                <div className="row" id="Rec_media-row">
                  <div className="col-md-6" id="Rec_media-img">
                    <img className="Rec_img" src={Procedure} alt="Procedure" />
                  </div>
                  <div className="col-md-6" id="Rec_media-col">
                    <form>
                      <div className="form-group" id="Rec_media-input">
                        <input
                          type="text"
                          className="form-control-plaintext ps-2"
                          id="InputText"
                          placeholder="Ваше имя"
                        />
                        <svg fill="none" viewBox="0 0 84 1">
                          <line x1={0} x2={80} y1={0} y2={0}></line>
                        </svg>
                      </div>
                      <div className="form-group" id="Rec_media-input">
                        <input
                          type="text"
                          className="form-control-plaintext ps-2"
                          id="InputNumber"
                          placeholder="Номер телефона"
                        />
                        <svg fill="none" viewBox="0 0 84 1">
                          <line x1={0} x2={80} y1={0} y2={0}></line>
                        </svg>
                      </div>
                      <div className="form-group" id="Rec_media-input">
                        <input
                          type="email"
                          className="form-control-plaintext ps-2"
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
                      <select className="form-control-plaintext" id="Rec_media-select">
                        <option>Выберите вариант</option>
                      </select>
                      <svg fill="none" viewBox="0 0 84 1">
                        <line x1={0} x2={80} y1={0} y2={0}></line>
                      </svg>
                    </form>
                    <div id="Rec_media-span">
                      <div>
                        Отправляя данную форму, Вы соглашаетесь на обработку
                        персональных данных
                      </div>
                    </div>
                    <div
                      className="col-item d-flex align-items-center justify-content-center"
                      id="Rec_media-form"
                    >
                      <button id="Rec_media-button" className="btn me-1" type="submit">
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

import React, { Component } from "react";

import "../Reception_Modal-mobile/Reception_Modal-mobile.css";

export default class Reception_Modal_mobile extends Component {
  
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="ProcedureMob"
          data-bs-backdrop="true"
          data-bs-keyboard="true"
          tabIndex={-1}
          aria-labelledby="ProceMob"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" id="Recmob_media-dialog" >
            <div className="modal-content" id="Recmob_media-content">
              <div className="modal-header" id="Recmob_ProceMob">
                <div className="modal-title" id="Recmob_media-title">
                  <div className="">Запись на процедуру</div>
                </div>
                <button
                  id="close-button"
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body container-fluid" id="Recmob_media-body">
                <div className="row" id="Recmob_media-row">
                  <div
                    className="d-md-none d-lg-none col-12 col-sm-12"
                    id="Recmob_media-col"
                  >
                    <form>
                      <div className="form-group" id="Recmob_media-input">
                        <input
                          type="text"
                          className="form-control-plaintext"
                          id="InputText"
                          placeholder="Ваше имя"
                        />
                        <svg fill="none" viewBox="0 0 84 1">
                          <line x1={0} x2={84} y1={0} y2={0}></line>
                        </svg>
                      </div>
                      <div className="form-group" id="Recmob_media-input">
                        <input
                          type="password"
                          className="form-control-plaintext"
                          id="InputPassword"
                          placeholder="Номер телефона"
                        />
                        <svg fill="none" viewBox="0 0 84 1">
                          <line x1={0} x2={100} y1={0} y2={0}></line>
                        </svg>
                      </div>
                      <div className="form-group" id="Recmob_media-input">
                        <input
                          type="email"
                          className="form-control-plaintext"
                          id="InputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="E-mail"
                        />
                        <svg fill="none" viewBox="0 0 84 1">
                          <line x1={0} x2={100} y1={0} y2={0}></line>
                        </svg>
                      </div>
                      <select className="form-control-plaintext" id="Recmob_media-select">
                        <option>Выберите вариант</option>
                      </select>
                      <svg fill="none" viewBox="0 0 84 1">
                        <line x1={0} x2={100} y1={0} y2={0}></line>
                      </svg>
                    </form>
                    <div id="Recmob_media-span">
                      <div>
                        Отправляя данную форму, Вы соглашаетесь на обработку
                        персональных данных
                      </div>
                    </div>
                    <div
                      className="col-item d-flex align-items-center justify-content-center"
                      id="Recmob_media-form"
                    >
                      <button className="btn" id="Recmob_media-button" type="submit">
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

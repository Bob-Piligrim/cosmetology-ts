import { Component } from "react";
import "../Consultation_Modal-mobile/Consultation_Modal-mobile.css";

export default class ConsultationPopUpMob extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="ConsultationMob"
          data-bs-backdrop="true"
          data-bs-keyboard="true"
          tabIndex={-1}
          aria-labelledby="ConsultMob"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" id="Consmob_media-dialog">
            <div className="modal-content" id="Consmob_media-content">
              <div className="modal-header" id="ConsultMob">
                <div className="modal-title" id="Consmob_media-title">
                  <div className="">Записаться на консультацию</div>
                </div>
                <button
                  id="close-button"
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body container-fluid">
                <div className="row" id="Consmob_media-row">
                  <div
                    className="d-md-none d-lg-none col-12 col-sm-12"
                    id="Consmob_media-col"
                  >
                    <form>
                      <div className="form-group" id="Consmob_media-input">
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
                      <div className="form-group" id="Consmob_media-input">
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
                      <div className="form-group" id="Consmob_media-input">
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
                      <select className="form-control-plaintext" id="Consmob_media-select">
                        <option>Выберите вариант</option>
                        <option>Выберите вариант</option>
                        <option>Выберите вариант</option>
                      </select>
                      <svg fill="none" viewBox="0 0 84 1">
                        <line x1={0} x2={100} y1={0} y2={0}></line>
                      </svg>
                    </form>
                    <div id="Consmob_media-span">
                      <div>
                        Отправляя данную форму, Вы соглашаетесь на обработку
                        персональных данных
                      </div>
                    </div>
                    <div
                      className="col-item d-flex align-items-center justify-content-center"
                      id="Consmob_media-form"
                    >
                      <button className="btn" id="Consmob_media-button" type="submit">
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

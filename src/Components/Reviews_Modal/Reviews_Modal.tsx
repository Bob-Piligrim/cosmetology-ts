import { Component } from "react";

import "../Reviews_Modal/Reviews_Modal.css";
import Carousel from "../Reviews_Carousel/Reviews_Carousel";

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
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

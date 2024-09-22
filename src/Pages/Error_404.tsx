import { Component } from "react";

import Error404 from "../Assets/ForError_404/Desctop/Error_404.png";
import Error404m from "../Assets/ForError_404/Mobile/Error_404m.png";

export default class Error_404 extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="d-none d-md-block col-md-12 mb-4">
              <div
                className="row"
                style={{ marginLeft: "140px", marginRight: "140px" }}
              >
                <div className="col-md-12 mt-5">
                  <img className="problem-img" src={Error404} alt="Error404" />
                </div>
                <div className="col-md-12 pt-5 mt-3">
                  <div
                    className="ffamily text-center"
                    style={{ color: "#602B1D", fontSize: 1.7 + "vw" }}
                  >
                    Данной страницы не существует, но вы можете перейти на
                    главную страницу
                  </div>
                </div>
                <div className="col-md-12 mt-5 text-center">
                  <a
                    className="text-center d-flex align-items-center justify-content-center px-3 py-3"
                    href="/"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#F8C77A",
                      border: "1px",
                      borderRadius: "13px",
                      height: "4vw",
                      color: "#602B1D",
                      fontSize: "1.4vw",
                    }}
                  >
                    Перейти на главную страницу
                  </a>
                </div>
              </div>
            </div>
            {/* Мобильная версия */}
            <div className="d-md-none d-lg-none col-12 col-sm-12">
              <div className="row mx-2 mb-5">
                <div className="col-12 col-sm-12 mt-5">
                  <img className="problem-img" src={Error404m} alt="Error404m" />
                </div>
                <div className="col-12 col-sm-12 pt-3 mt-2 lh-1">
                  <div
                    className="ffamily text-center"
                    style={{ color: "#602B1D", fontSize: 3.7 + "vw" }}
                  >
                    Данной страницы не существует, но вы можете перейти на
                    главную страницу
                  </div>
                </div>
                <div className="col-12 col-sm-12 mt-5 text-center">
                  <a
                    className="text-center d-flex align-items-center justify-content-center px-3 py-3"
                    href="/"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#F8C77A",
                      border: "1px",
                      borderRadius: "13px",
                      height: "8vw",
                      color: "#602B1D",
                      fontSize: "4vw",
                    }}
                  >
                    Перейти на главную страницу
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

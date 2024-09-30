import { Component } from "react";
import "./Present.css";
import PresentImg from "./Assets/present.png";
import PresentImgMob from "./Assets/presentMob.png";

export default class Present extends Component<
  {},
  { isPresentBlock: boolean }
> {
  constructor(props: boolean) {
    super(props);
    this.state = {
      isPresentBlock: true,
    };
  }

  render() {
    return (
      <div className="container-fluid mt-5" id="container_fl">
        <div className="d-none d-md-block Present_container">
          {this.state.isPresentBlock ? (
            <div
              className="Present_img"
              onClick={(e) => this.setState({ isPresentBlock: false })}
            >
              <img className="present" src={PresentImg} alt="present" />
            </div>
          ) : (
            <div
              className="Present_content"
              onClick={(e) => this.setState({ isPresentBlock: true })}
            >
              <div className="block1 text-center">
                <h2 className="ffamily">Акция "Красота в Подарок!"</h2>
                <div>
                  Приобретите курс из трех процедур по уходу за кожей и получите
                  четвертую БЕСПЛАТНО! Это ваш шанс испытать высококачественный
                  уход и увидеть результаты на собственном опыте.
                </div>
              </div>
              <div className="block2">
                <svg id="Present_svg">
                  <rect id="Present_rect" x="0.5" y="1.29297" />
                  <foreignObject x="0" y="0" id="Present_foreignObject">
                    <h3>Условия акции:</h3>
                    <ul>
                      <li>Акция действует до 5 октября.</li>
                      <li>
                        Чтобы воспользоваться предложением, необходимо упомянуть
                        промокод "BEAUTY4YOU" при визите.
                      </li>
                      <li>
                        Бесплатная процедура предоставляется после приобретения
                        трех процедур.
                      </li>
                    </ul>
                  </foreignObject>
                </svg>
              </div>
              <div className="block3 text-center">
                <div style={{ fontStyle: "italic" }}>
                  Запишитесь на консультацию сегодня и начните свой путь к
                  здоровой и сияющей коже вместе с нами! Предложение ограничено,
                  подробности у наших администраторов.
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="d-block d-md-none Presentmob_container">
          {this.state.isPresentBlock ? (
            <div
              className="Presentmob_img"
              onClick={(e) => this.setState({ isPresentBlock: false })}
            >
              <img className="presentmob" src={PresentImgMob} alt="present" />
            </div>
          ) : (
            <div
              className="Presentmob_content"
              onClick={(e) => this.setState({ isPresentBlock: true })}
            >
              <div className="Mobblock1 text-center">
                <h2 className="ffamily">Красота в Подарок!</h2>
                <div>
                  Приобретите курс из 3 процедур по уходу за кожей и получите 4
                  БЕСПЛАТНО!
                </div>
              </div>
              <div className="Mobblock2 lh-sm">
                <svg id="Presentmob_svg">
                  <rect id="Presentmob_rect" x="0.5" y="1.29297" rx="11.5" />
                  <foreignObject x="0" y="0" id="Presentmob_foreignObject">
                    <h3>Условия акции:</h3>
                    <ul>
                      <li>Акция действует до 5 октября;</li>
                      <li>Промокод "BEAUTY4YOU" ;</li>
                      <li>
                        Бесплатная процедура предоставляется после приобретения
                        трех процедур.
                      </li>
                    </ul>
                  </foreignObject>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

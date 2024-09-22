import { Component } from "react";

import "./Question_Modal.css";

export default class Question_Modal extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="Questions"
          data-bs-backdrop="true"
          data-bs-keyboard="true"
          tabIndex={-1}
          aria-labelledby="Quest"
          aria-hidden="true"
        >
          <div className="modal-dialog" id="Quest_media-dialog">
            <div className="modal-content" id="Quest_media-content">
              <div
                id="Quest"
                className="modal-header d-flex justify-content-center align-items-center"
              >
                <div className="modal-title">
                  <div className="ffamily text-center" id="Quest_title">
                    Вопросы
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  id="Quest_button"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body" id="Quest_media-body">
                <div id="Quest_question">
                  <details className="Quest_details">
                    <summary className="Quest_question-text">
                      Какие процедуры подходят для моего типа кожи
                    </summary>
                    <div className="Quest_answer">
                      <div className="Quest_answer-text">
                        На консультации мы проведем оценку вашего типа кожи и
                        состояния. Подходящие процедуры могут включать
                        увлажняющие уходы для сухой кожи, чистки и пилинги для
                        жирной и комбинированной кожи, а также процедуры,
                        направленные на уменьшение пигментации или возрастных
                        изменений.
                      </div>
                    </div>
                  </details>
                  <details className="Quest_details">
                    <summary className="Quest_question-text">
                      Сколько времени займет восстановление после процедуры
                    </summary>
                    <div className="Quest_answer">
                      <p className="Quest_answer-text">
                        На консультации мы проведем оценку вашего типа кожи и
                        состояния. Подходящие процедуры могут включать
                        увлажняющие уходы для сухой кожи, чистки и пилинги для
                        жирной и комбинированной кожи, а также процедуры,
                        направленные на уменьшение пигментации или возрастных
                        изменений.
                      </p>
                    </div>
                  </details>
                  <details className="Quest_details">
                    <summary className="Quest_question-text">
                      Как долго будет длиться эффект после процедуры
                    </summary>
                    <div className="Quest_answer">
                      <p className="Quest_answer-text">
                        На консультации мы проведем оценку вашего типа кожи и
                        состояния. Подходящие процедуры могут включать
                        увлажняющие уходы для сухой кожи, чистки и пилинги для
                        жирной и комбинированной кожи, а также процедуры,
                        направленные на уменьшение пигментации или возрастных
                        изменений.
                      </p>
                    </div>
                  </details>
                  <details className="Quest_details">
                    <summary className="Quest_question-text">
                      Какие советы по уходу за кожей в повседневной жизни вы
                      можете дать
                    </summary>
                    <div className="Quest_answer">
                      <p className="Quest_answer-text">
                        На консультации мы проведем оценку вашего типа кожи и
                        состояния. Подходящие процедуры могут включать
                        увлажняющие уходы для сухой кожи, чистки и пилинги для
                        жирной и комбинированной кожи, а также процедуры,
                        направленные на уменьшение пигментации или возрастных
                        изменений.
                      </p>
                    </div>
                  </details>
                  <details className="Quest_details">
                    <summary className="Quest_question-text">
                      Есть ли какие-то противопоказания или риски для конкретной
                      процедуры
                    </summary>
                    <div className="Quest_answer">
                      <p className="Quest_answer-text">
                        На консультации мы проведем оценку вашего типа кожи и
                        состояния. Подходящие процедуры могут включать
                        увлажняющие уходы для сухой кожи, чистки и пилинги для
                        жирной и комбинированной кожи, а также процедуры,
                        направленные на уменьшение пигментации или возрастных
                        изменений.
                      </p>
                    </div>
                  </details>
                  <details className="Quest_details">
                    <summary className="Quest_question-text">
                      ККакие продукты или уход рекомендуется использовать после
                      процедуры
                    </summary>
                    <div className="Quest_answer">
                      <p className="Quest_answer-text">
                        На консультации мы проведем оценку вашего типа кожи и
                        состояния. Подходящие процедуры могут включать
                        увлажняющие уходы для сухой кожи, чистки и пилинги для
                        жирной и комбинированной кожи, а также процедуры,
                        направленные на уменьшение пигментации или возрастных
                        изменений.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

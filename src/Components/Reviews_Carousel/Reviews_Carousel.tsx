// src/Carousel.tsx
import React, { Component } from "react";
import "./Reviews_Carousel.css";
import prev from "./Assets/left.png";
import next from "./Assets/right.png";
import Ex1 from "./Assets/Ex1.png";

interface CarouselProps {
  items: Array<{body: string, from: string, src: string, date: string}>;
  interval?: number;
}

interface CarouselState {
  currentIndex: number;
}

class Carousel extends Component<CarouselProps, CarouselState> {
  private intervalId?: NodeJS.Timeout;
  private sliderRef = React.createRef<HTMLDivElement>();

  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  thisSlide(index: number) {
    document
      .querySelectorAll(".rev_slider__dot")
      .forEach((item) => item.classList.remove("rev_active-dot"));
    document
      .querySelectorAll(".rev_slider__dot")
      [index].classList.add("rev_active-dot");
  }

  componentDidMount = (): void => {
    this.rollSlider();
    const { interval } = this.props;
    if (interval) {
      this.startAutoSlide(interval);
    }

    document.querySelectorAll(".rev_slider__dot").forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.setState(() => {
          this.thisSlide(index);
          this.rollSlider();
          return { currentIndex: index };
        });
      });
    });
  };

  componentWillUnmount = (): void => {
    this.clearAutoSlide();
  };

  clearAutoSlide = (): void => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  };

  startAutoSlide = (interval: number): void => {
    this.intervalId = setInterval(this.nextSlide, interval);
  };

  nextSlide = () => {
    this.setState(
      (prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % this.props.items.length,
      }),
      this.rollSlider
    );
    this.thisSlide((this.state.currentIndex + 1) % this.props.items.length);
  };

  prevSlide = () => {
    this.setState(
      (prevState) => ({
        currentIndex:
          (prevState.currentIndex - 1 + this.props.items.length) %
          this.props.items.length,
      }),
      this.rollSlider
    );
    this.thisSlide(
      (this.state.currentIndex - 1 + this.props.items.length) %
        this.props.items.length
    );
  };

  /* sliderRef: React.RefObject<HTMLDivElement>; */
  rollSlider = () => {
    /* const { currentIndex } = this.state;
    const offset = currentIndex * 98;
    if (this.sliderRef.current) {
      this.sliderRef.current.style.transform = `translateX(-${offset}%)`;
      this.sliderRef.current.style.transition = "transform 1s ease"
    }; */
    if (this.sliderRef.current) {
      const sliderWidth = this.sliderRef.current.clientWidth;
      this.sliderRef.current.style.transform = `translateX(${
        -this.state.currentIndex * sliderWidth
      }px)`;
      this.sliderRef.current.style.transition = "transform 1s ease";
    }
  };

  render() {
    const { items } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="forDots">
        <div className="rev_carousel">
          <h1 className="rev_title">Отзывы от пациенток</h1>
          <div ref={this.sliderRef} className="rev_content">
            {items.map((item, index) => (
              <div
                key={index}
                className="col-md-12 col-10 rev_border rev_border-active"
              >
                <div className="rev_text">{items[currentIndex].body}</div>
                <div className="rev_img-border">
                  <svg className="rev_svg">
                    <rect className="rev_rect" x="0.5" y="1.29297" rx="11.5" />
                    <foreignObject x="0" y="0" className="rev_foreignObject">
                      <div className="rev_reviews">
                        <div className="rev_img">
                          <img src={Ex1} className="d-block" alt="ex1" />
                        </div>
                        <div className="rev_nd">
                          <div className="rev_name">{items[currentIndex].from}</div>
                          <div className="rev_date">{items[currentIndex].date}</div>
                        </div>
                      </div>
                    </foreignObject>
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <button onClick={this.prevSlide} className="rev_slider__btn-prev">
            <img src={prev} alt="prev" />
          </button>
          <button onClick={this.nextSlide} className="rev_slider__btn-next">
            <img src={next} alt="next" />
          </button>
        </div>
        <div className="rev_slider__wrapper">
          <div className="rev_slider__dot rev_active-dot"></div>
          <div className="rev_slider__dot"></div>
          <div className="rev_slider__dot"></div>
          <div className="rev_slider__dot"></div>
          <div className="rev_slider__dot"></div>
          <div className="rev_slider__dot"></div>
          <div className="rev_slider__dot"></div>
        </div>
      </div>
    );
  }
}

export default Carousel;

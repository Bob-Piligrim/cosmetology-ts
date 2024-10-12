// src/Carousel.tsx
import React, { Component } from "react";
import "./Reviews_Carousel.css";
import prev from "./Assets/left.png";
import next from "./Assets/right.png";
import Ex1 from "./Assets/Ex1.png";

interface Review {
  review: string;
  name: string;
  date: string;
}

interface CarouselProps {
  interval?: number;
}

interface CarouselState {
  currentIndex: number;
  reviews: Review[];
  loading: boolean;
  error: string | null;
}

class Carousel extends Component<CarouselProps, CarouselState> {
  private intervalId?: NodeJS.Timeout;
  private sliderRef = React.createRef<HTMLDivElement>();
  private dotsContainerRef = React.createRef<HTMLDivElement>();

  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      currentIndex: 0,
      reviews: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount = (): void => {
    this.fetchReviews();
    const { interval } = this.props;
    if (interval) {
      this.startAutoSlide(interval);
    }
  };

  componentDidUpdate(
    prevProps: Readonly<CarouselProps>,
    prevState: Readonly<CarouselState>,
    snapshot?: any
  ): void {
    if (
      prevState.reviews !== this.state.reviews ||
      prevState.currentIndex !== this.state.currentIndex
    ) {
      this.createDots();
    }
  }

  fetchReviews = async () => {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/44c521c5-2dac-45d8-9711-ccc7fbbeb6f6"
      );
      if (!response.ok) {
        throw new Error("Файлы недоступны");
      }
      const data: Review[] = await response.json();
      this.setState({ reviews: data, loading: false }, () => this.createDots);
    } catch (error) {
      this.setState({ error: (error as Error).message, loading: false });
    }
  };

  startAutoSlide = (interval: number): void => {
    this.intervalId = setInterval(this.nextSlide, interval);
  };

  clearAutoSlide = (): void => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  };

  componentWillUnmount = (): void => {
    this.clearAutoSlide();
  };

  rollSlider = () => {
    if (this.sliderRef.current) {
      const sliderWidth = this.sliderRef.current.clientWidth;
      this.sliderRef.current.style.transform = `translateX(${
        -this.state.currentIndex * sliderWidth
      }px)`;
      this.sliderRef.current.style.transition = "transform 1s ease";
    }
  };
  createDots = () => {
    const dotsContainer = this.dotsContainerRef.current;
    if (!dotsContainer) {
      console.error("контейнер не найден");
      return;
    }

    dotsContainer.innerHTML = "";

    if (this.state.reviews.length > 10) {
      console.log(`Отзывов больше ${this.state.reviews.length}, dots спрятаны`);
      return;
    }
    this.state.reviews.forEach((_, index: number) => {
      const dot = document.createElement("div");
      dot.classList.add("rev_slider-dot");
      dot.dataset.index = index.toString();
      if (index === this.state.currentIndex) {
        dot.classList.add("rev_active-dot");
      }

      dot.addEventListener("click", () => {
        this.handleDotClick(index);
        this.updateActiveDot(index);
      });

      dotsContainer.appendChild(dot);
    });
  };

  handleDotClick = (index: number): void => {
    try {
      this.setState(() => {
        this.rollSlider();
        return { currentIndex: index };
      });
    } catch (error) {
      console.error("Ошибка в обработчике", error);
    }
  };

  updateActiveDot = (activeIndex: number): void => {
    const dots: NodeListOf<HTMLElement> =
      document.querySelectorAll(".rev_slider-dot");

    dots.forEach((dot: HTMLElement, index: number) => {
      if (index === activeIndex) {
        dot.classList.add("rev_active-dot");
      } else {
        dot.classList.remove("rev_active-dot");
      }
    });
  };

  nextSlide = () => {
    this.setState(
      (prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % this.state.reviews.length,
      }),
      this.rollSlider
    );
    this.updateActiveDot(
      (this.state.currentIndex + 1) % this.state.reviews.length
    );
  };

  prevSlide = () => {
    this.setState(
      (prevState) => ({
        currentIndex:
          (prevState.currentIndex - 1 + this.state.reviews.length) %
          this.state.reviews.length,
      }),
      this.rollSlider
    );
    this.updateActiveDot(
      (this.state.currentIndex - 1 + this.state.reviews.length) %
        this.state.reviews.length
    );
  };

  render() {
    const { currentIndex } = this.state;
    const { reviews, loading, error } = this.state;

    if (loading) {
      return <div>Загрузка...</div>;
    }

    if (error) {
      return <div>Ошибка: {error}</div>;
    }

    return (
      <div className="forDots">
        <div className="rev_carousel">
          <div ref={this.sliderRef} className="rev_content">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="col-md-12 col-10 rev_border rev_border-active"
              >
                <div className="rev_text">{reviews[currentIndex].review}</div>
                <div className="rev_img-border">
                  <svg className="rev_svg">
                    <rect className="rev_rect" x="0.5" y="1.29297" rx="11.5" />
                    <foreignObject x="0" y="0" className="rev_foreignObject">
                      <div className="rev_reviews">
                        <div className="rev_img">
                          <img src={Ex1} className="d-block" alt="ex1" />
                        </div>
                        <div className="rev_nd">
                          <div className="rev_name">
                            {reviews[currentIndex].name}
                          </div>
                          <div className="rev_date">
                            {reviews[currentIndex].date}
                          </div>
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

          <div
            className="rev_slider__wrapper"
            ref={this.dotsContainerRef}
          ></div>
        </div>
      </div>
    );
  }
}

export default Carousel;

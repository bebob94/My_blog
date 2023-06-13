import Carousel from "react-bootstrap/Carousel";
import Image1 from "../Images/photo_2023-06-13_10-11-25.jpg";
import Image2 from "../Images/P_20211218_114508.jpg";
import Image3 from "../Images/P_20220103_111324.jpg";
import Image4 from "../Images/photo_2023-06-13_10-11-30.jpg";
import Image5 from "../Images/photo_2023-06-13_10-44-35.jpg";
import Image6 from "../Images/IMG_20210203_104410.jpg";
import Image7 from "../Images/photo_2023-06-13_10-11-30.jpg";
function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block myCarouselImages rounded-4"
          src={Image1}
          alt="slide1"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block myCarouselImages rounded-4"
          src={Image2}
          alt="slide2"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block myCarouselImages rounded-4"
          src={Image3}
          alt="slide3"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block myCarouselImages rounded-4"
          src={Image4}
          alt="slide4"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block myCarouselImages rounded-4"
          src={Image5}
          alt="slide5"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block myCarouselImages rounded-4"
          src={Image6}
          alt="slide6"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block myCarouselImages rounded-4"
          src={Image7}
          alt="slide7"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;

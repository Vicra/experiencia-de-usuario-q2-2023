import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/slider/img1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption style={{ color: "white" }}>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/slider/img2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption style={{ color: "white" }}>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/slider/img3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption style={{ color: "white" }}>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

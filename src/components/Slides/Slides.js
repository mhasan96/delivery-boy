import React from "react";
import { Carousel } from "react-bootstrap";
import banner2 from "../../images/15.jpg";
import banner3 from "../../images/7.jpg";
import banner4 from "../../images/18.jpg";
import banner5 from "../../images/17.jpg";
import banner6 from "../../images/2.jpg";
import "./Slides.css";

const Slides = () => {
  return (
    <div>
      <Carousel role="listbox" className="banner ">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 " src={banner6} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-8xl mb-48 opacity-70">Summer Vacation</h3>
            <p className="opacity-60">
              If you are in a beautiful place where you can enjoy sunrise and
              sunset, then you are living like a lord. Read more at
              https://www.brainyquote.com/topics/beautiful-place-quotes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h3 className="text-8xl mb-48 opacity-70">Autumn Vacation</h3>
            <p className="opacity-60">
              If you are in a beautiful place where you can enjoy sunrise and
              sunset, then you are living like a lord. Read more at
              https://www.brainyquote.com/topics/beautiful-place-quotes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="text-8xl mb-48 opacity-70">Winter Vacation</h3>
            <p className="opacity-60">
              If you are in a beautiful place where you can enjoy sunrise and
              sunset, then you are living like a lord. Read more at
              https://www.brainyquote.com/topics/beautiful-place-quotes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={banner4} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="text-8xl mb-48 opacity-70">
              Explore Beautiful France Vacation
            </h3>
            <p className="opacity-60">
              If you are in a beautiful place where you can enjoy sunrise and
              sunset, then you are living like a lord. Read more at
              https://www.brainyquote.com/topics/beautiful-place-quotes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={banner5} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="text-8xl mb-48 opacity-70">Colorado Explore </h3>
            <p className="opacity-60">
              If you are in a beautiful place where you can enjoy sunrise and
              sunset, then you are living like a lord. Read more at
              https://www.brainyquote.com/topics/beautiful-place-quotes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div
        className="container flex justify-around flex-wrap text-4xl "
        style={{ marginTop: "25px", marginBottom: "25px" }}
      >
        <p>
          <i
            style={{ marginRight: "20px", color: "rgba(0, 255, 255, 0.5)" }}
            className="fas fa-mobile-alt"
          ></i>
          +880156000000
        </p>

        <p>
          <i
            style={{ marginRight: "20px", color: "rgba(0, 255, 255, 0.5)" }}
            class="far fa-envelope"
          ></i>
          info@travelguy.com
        </p>
        <p>
          <i
            style={{ marginRight: "20px", color: "rgba(0, 255, 255, 0.5)" }}
            class="fas fa-map-marker-alt"
          ></i>
          Dhanmondi, Dhaka
        </p>
      </div>
    </div>
  );
};

export default Slides;

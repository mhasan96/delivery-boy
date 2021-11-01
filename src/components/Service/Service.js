import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import Slider from "react-slick";

const Service = ({ service }) => {
  const { Name, img, Description, _id, Price } = service;
  return (
    <div className="container">
      <CardGroup>
        <Card>
          <Card.Img variant="top" style={{ height: "250px" }} src={img} />
          <Card.Body>
            <Card.Title className="text-left">{Name}</Card.Title>
            <hr />
            <Card.Text className="text-left ">{Description}</Card.Text>
            <Card.Text className="text-left ">${Price}</Card.Text>
            <NavLink to={`/service/${_id}`}>
              <button className="bg-blue-400 hover:bg-blue-600 px-8 py-2 rounded-xl text-white hover:text-black">
                Book Now
              </button>
            </NavLink>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;

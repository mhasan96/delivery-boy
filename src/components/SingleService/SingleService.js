import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SingleService.css";
import useAuth from "../Hooks/useAuth";

const SingleService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  let { id } = useParams();
  const { user } = useAuth();
  const [serviceDetails, setServiceDetails] = useState({});

  //loading Data
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  return (
    <div>
      <p className="text-4xl mt-24"> {serviceDetails?.Name} Booking</p>
      <div className="container mt-24 grid grid-cols-2 ">
        <div className="grid lg:grid-cols-6 sm:grid-cols-1 mt-16 text-center  justify-center">
          <CardGroup className="col-start-2 col-span-4">
            <Card>
              <Card.Img variant="top" src={serviceDetails?.img} />
              <Card.Body>
                <Card.Title className="text-left font-bold font-xl text-blue-500">
                  {serviceDetails?.Name}
                </Card.Title>
                <hr />
                <Card.Text className="text-left ">
                  {serviceDetails?.Description}
                </Card.Text>
                <hr />

                <Card.Text className="text-left ">
                  Cost: ${serviceDetails?.Price}
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div className="add-service mt-16 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("Name", { required: true, maxLength: 20 })}
              placeholder="name"
              value={user?.displayName || ""}
            />
            <input
              {...register("email", { required: true, maxLength: 20 })}
              placeholder="name"
              value={user?.email || ""}
            />

            <textarea {...register("address")} placeholder="address" />
            <input
              type="number"
              {...register("Price")}
              placeholder="Contact Number"
            />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleService;

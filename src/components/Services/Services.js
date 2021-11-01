import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div id="services" className="container mt-16">
      <p className="text-3xl">Our Top Services</p>
      <div className="grid lg:grid-cols-3 mt-16 sm:grid-cols-1 gap-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

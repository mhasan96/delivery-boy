import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";

const ManageUserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [singleOrder, setSingleOrder] = useState([]);
  const { user } = useAuth();
  let { id } = useParams();

  useEffect(() => {
    fetch(
      `https://infinite-refuge-60984.herokuapp.com/orders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  useEffect(() => {
    fetch(`https://infinite-refuge-60984.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleOrder(data));
  }, []);
  return (
    // <div>
    //   <h2>Total Placed: {orders.length} Orders</h2>
    // </div>
    <div>
      <h2 className="mt-24">Your Order List</h2>
      <div className="grid grid-cols-3 gap-4">
        <h2>Total Placed: {orders.length} Orders</h2>
      </div>
      {/* ))} */}
    </div>
    // </div>
  );
};

export default ManageUserOrders;

import { useParams } from "react-router-dom";
// import {
//   Row,
//   Col,
//   ListGroup,
//   Image,
//   Form,
//   Button,
//   Card,
// } from "react-bootstrap";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
import { useGetOrderDetailsQuery } from "../slices/orderApiSlice";

const Order = () => {
  const { id: orderId } = useParams();
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  console.log(order);

  return <div>order page</div>;
};

export default Order;

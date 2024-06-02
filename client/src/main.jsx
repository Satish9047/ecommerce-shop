// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails.jsx";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Shipping from "./pages/Shipping.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Payment from "./pages/Payment.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Order from "./pages/Order.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Profile from "./pages/profile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider>
        <BrowserRouter deferLoading={true}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index={true} element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="" element={<PrivateRoute />}>
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/placeorder" element={<PlaceOrder />} />
                <Route path="/order/:id" element={<Order />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

import React, { createContext ,useReducer} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import VehicleListing from "../pages/VehicleListing";
import VehicleDetails from "../pages/VehicleDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";

// import { initialState, reducer } from "../reducer/UseReducer";

// export const UserContext = createContext();

const Routers = () => {

  //  const {state,dispatch} = useReducer(reducer,initialState);

  return (
      <Routes>
      {/* <UserContext.Provider value={{state, dispatch}}> */}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<VehicleListing />} />
      <Route path="/cars/:slug" element={<VehicleDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />

      {/* </UserContext.Provider> */}
      </Routes>
  );
};

export default Routers;

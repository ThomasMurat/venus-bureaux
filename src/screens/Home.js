import React from "react";
import { Link } from "react-router-dom";
 
const Home = () => {
    return (
      <div className="col-12">
        <h1 className="text-danger">Home page</h1>
        <Link to="/one">Go back to profile</Link>
      </div>
    );
  }
export default Home;

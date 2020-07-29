import React from "react";
import {useLocation} from "react-router-dom";

function HomePage() {
  const location = useLocation();
  const {from} = location.state || {from: {pathname: "/"}};
  console.log(from);

  return (
    <div>
      <p>Home</p>
    </div>
  );
}
export default HomePage;

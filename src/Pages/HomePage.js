import React from "react";
import {useLocation} from "react-router-dom";

function HomePage() {
  const location = useLocation();
  const {from} = location.state || {from: {pathname: "/"}};
  console.log("From", from);

  if (from.isAuthenticated) {
    return <p>Logged in Successfully as {from.user.email}</p>;
  } else {
    return <p>Not Logged in</p>;
  }
}
export default HomePage;

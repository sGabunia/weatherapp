import React from "react";

const Header = ({ daysCount, city }) => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        {city} {daysCount} Days Weather Forecast
      </h1>
    </>
  );
};

export default Header;

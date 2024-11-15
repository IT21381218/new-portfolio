import React from "react";
import CountUp from 'react-countup'; // Import CountUp library
import "../styles/countup.css";

function Services() {
  return (
    <section className="services">
      <h1>Visitor Count</h1>
      <p>How many people have visited this website:</p>
      
      <div className="countup-container">
        <h2>
          <CountUp start={0} end={1234} duration={3} separator="," />
        </h2>
      </div>
    </section>
  );
}

export default Services;

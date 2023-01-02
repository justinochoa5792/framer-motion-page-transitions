import React from "react";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.div
      className="container"
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="header">
        <h1>Happy Pickle</h1>
      </div>
      <div className="section-body">
        <div>
          <h2>Design</h2>
          <h2>Company</h2>
          <h2>2022</h2>
        </div>
        <div>
          <h3>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </h3>
          <h3>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </h3>
          <h3>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </h3>
        </div>
      </div>
    </m.div>
  );
};

export default Home;

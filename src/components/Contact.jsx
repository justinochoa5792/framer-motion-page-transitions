import React from "react";
import { motion as m } from "framer-motion";

const Contact = () => {
  return (
    <m.main
      className="contactContainer"
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="contactHeader">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Let's Talk
        </m.h1>
        <div className="letsTalk">
          <div className="findme">
            <h4>Find Me:</h4>
          </div>
          <div className="whereToFind">
            <li className="whereToLi">Twitter</li>
            <li className="whereToLi">Instagram</li>
            <li className="whereToLi">LinkedIn</li>
          </div>
        </div>
      </div>
    </m.main>
  );
};

export default Contact;

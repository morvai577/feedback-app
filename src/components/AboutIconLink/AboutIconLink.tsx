// @flow
import * as React from "react";
import { FaQuestion } from "react-icons/all";
import { Link } from "react-router-dom";

export const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

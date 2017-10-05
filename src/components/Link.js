import React from "react";
import GatsbyLink from "gatsby-link";

import "../css/link.css";

export default function Link({ children, className, to }) {
  return (
    <GatsbyLink className={[`waves-effect waves-light btn`].concat(className || []).join(" ")} to={to}>
      {children}
    </GatsbyLink>
  );
}

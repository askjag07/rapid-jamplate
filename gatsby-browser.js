import React from "react";

import Layout from "./src/components/layout";

import "./src/styles/global/_all.scss";

export const wrapPageElement = function ({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
};

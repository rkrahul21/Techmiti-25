import React from "react";

import { Alert } from "react-bootstrap";

export default function MessageBox(props) {
  return <Alert variant={props.variant || "info"} className="w-[350px] bg-[#cff4fc] p-2 rounded-md text-justify my-2">{props.children}</Alert>;
}

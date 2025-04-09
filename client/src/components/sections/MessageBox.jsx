import React from "react";



export default function MessageBox(props) {
  return (
    <div className="alert alert-danger bg-blue-900 text-white text-center font-bold">
      <strong>{props.children}</strong>
    </div>
  );
}

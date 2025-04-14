import React from "react";



export default function MessageBox(props) {
  return (
    <div className="alert alert-danger bg-[#1d98bc] text-white text-center font-semibold p-2">
      <strong>{props.children}</strong>
    </div>
  );
}

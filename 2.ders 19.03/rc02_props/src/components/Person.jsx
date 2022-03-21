import React from "react";
import Message from "./Message";

function Person({ name, img, tel }) { // direk destracturing
  //   const { name, img, tel } = props; destracturing ornegi
  return (
    <div>
      <Message ad={name} />  // suslunun ici name olmak zorunda
      <h2>{name}</h2>
      <img src={img} alt="" />
      <h3>{tel}</h3>
    </div>
  );
}

export default Person;

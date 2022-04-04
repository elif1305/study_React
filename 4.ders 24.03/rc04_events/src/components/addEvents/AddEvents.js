import React from "react";

const AddEvents = () => {
  function shoot(e, name) {             // function i componentin disinda tanimlarsak calismaz.
    console.log(e);
    alert(`Hello ${name}`);
  }

  return (
    <div>
      {/* <button onClick={shoot}>Take the shoot</button> */}  
      {/* <button onClick={() => shoot()}>Take the shoot</button> */}  
      <button onClick={(e) => shoot(e, "Jane")}>Take the shoot</button>   
      {/* parametre gondermek isterdigimizde arrow function olarakta kullanabliriz  */}
    </div>
  );
};

export default AddEvents;



// <button onClick={shoot()} seklinde yazilirsa sayfa render olur olmaz calisir. yani butona basilmasi beklenmeden.


/* <button onClick={shoot}>Take the shoot</button>  arrow function olarak tanimlamada yapilabilir, ama genelde event  tanimlayacasak kullaniriz. 
button onClick={(e) => shoot(e, "Jane")*/
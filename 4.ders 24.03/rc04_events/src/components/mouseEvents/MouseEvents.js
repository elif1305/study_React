import { useState } from "react";
import "./styles.css";

const MouseEvents = () => {
  const [coordX, setCoordX] = useState(198);  // burada ilk deger yani cordx bizim degerimiz , istedigimizi yazablirz,ikincisi ise set eden function imiz yani setcoordx )
  const [coordY, setCoordY] = useState(200);  // buradai 198 ve 200 initial degerdir.verebilirizde vermeyebilirzde.
  // console.log("coordX", coordX);
  // click event
  const handleClick = (e) => {  //! burada () icine yazilmasi fonksiyonun calismasi icin onemlidir
    // console.log(e);
    // console.log(e.type);
    console.log("target", e.target);  // curser in hedefledigi elemnti gosterir
    console.log("currentTarget", e.currentTarget);   // ana elemnti gosterir
    e.target.tagName === "SPAN" && e.currentTarget.remove();  // carpiya basip kaldirmak (sadece carpi isaretine yani span a basinca kaldirmasi icin yazilmis kosul . (tagName burada span a esittir, && = ise demektir, yani && dan oncesi true ise && dan sonrasini calistir.)
    console.log(e.target.tagName);
  };
  // doubleClick event
  const handleDoubleClick = (e) => console.log("innerText", e.target.innerText);

  // mouseMove event
  const handleMouseMove = (e) => {
    // console.log(e.nativeEvent.offsetX);
    // console.log(e.pageX);
    setCoordX(e.pageX);  // yukaridaki useState ile degerler guncellenor, set edilmesini amaci ise  dgerler guncellendikce bu degerleri ekrana gonderir.
    setCoordY(e.pageY);
  };
  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>X {coordX} </span> and Y {coordY}   // x ve y nin degerini ekrana yazdirmak icin.
      </p>
      <p>
        <span></span> and
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <li id="todo-1" onClick={handleClick}>
            todo item 1 <span>X</span>
          </li>
          <li id="todo-2 " onDoubleClick={handleDoubleClick}>
            todo item 2 <span>X</span>
          </li>
          <li onMouseMove={handleMouseMove}>
            todo item 3 <span>X</span>
          </li>
          <li>
            todo item 4 <span>X</span>
          </li>
          <li>
            todo item 5 <span>X</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;

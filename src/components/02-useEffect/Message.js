import React, { useEffect, useState } from "react";

export const Message = () => {
    
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  //con un return que actua de limpiador
  useEffect(() => {
    //evento para mostrar coordenadas del raton
    const mouseMoveFunction = (e) => {
      const crds = { x: e.x, y: e.y };
      setCoords(crds);
      //console.log(coords);
    };

    window.addEventListener("mousemove", mouseMoveFunction);

    //este return trabaja como limpiador
    return () => {
      window.removeEventListener("mousemove", mouseMoveFunction);
    };
  }, []);

  return (
    <div>
      <h1>Eres genial!!</h1>
      <p>
        x:{x} y:{y}
      </p>
    </div>
  );
};

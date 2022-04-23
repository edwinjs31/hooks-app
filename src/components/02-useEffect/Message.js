import React, { useEffect, useState } from "react";

export const Message = () => {
    
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  //con un return que actua de limpiador
  useEffect(() => {
    //Cuerpo del efecto(componente mondato): evento para mostrar coordenadas del raton
    const mouseMoveFunction = (e) => {
      const crds = { x: e.x, y: e.y };
      setCoords(crds);
    };

    window.addEventListener("mousemove", mouseMoveFunction);

    //face de limpieza(componente desmontado): Elimina el evento
    return () => {
      window.removeEventListener("mousemove", mouseMoveFunction);
    };
    //dependencia por la que escucha: se ejecuta el evento cuando cambia esta dependencia
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

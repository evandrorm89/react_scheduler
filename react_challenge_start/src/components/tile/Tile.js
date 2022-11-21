import React from "react";

export const Tile = ({ tile }) => {
  const values = Object.values(tile);
  return (
    <div className="tile-container">
      {values.map((value, index) => {
        const classe = index === 0 ? 'tile-title' : 'tile';
        return <p key={index} className={classe}>{value}</p>
      })}
    </div>
  );
};

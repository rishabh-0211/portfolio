import React from 'react'

function Icon({iconClass, mediaSrc,platform}) {
  return (
    <>
      <i
        className={
          iconClass +
          " icon text-secondary border border-secondary border-2 rounded-circle"
        }
        onClick={() => window.open(mediaSrc, "_blank")}></i>
      <h6 className="plat">{platform}</h6>
    </>
  );
}

export default Icon
import React from "react";
import { Tilt } from "react-tilt";
import brain from "./brain.jpg";

const defaultOptions = {
  max: 35,
  scale: 1.1,
};

const Logo = () => {
  return (
    <div>
      <Tilt options={defaultOptions} style={{ height: 150, width: 150 }}>
        <div style={{marginLeft: "30px"}}>
          
          <img src={brain} alt="Logo" width={150} style={{borderRadius:"10px"}} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

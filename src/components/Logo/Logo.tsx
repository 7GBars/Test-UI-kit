import React from "react";


export const Logo = () => {
  const logo = new URL('./assets/images/Add_small.svg', import.meta.url);
  return (
    <img src={logo.toString()} alt={'test logo'}/>
  );
};


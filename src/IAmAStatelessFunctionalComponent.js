import React from "react";

const IAmAStatelessFunctionalComponent = ({ firstname, lastname }) => {
  const sayHi = event => {
    alert(`Hi, ${firstname} ${lastname}!`);
  };

  return (
    <div>
      <button type="button" onClick={sayHi}>
        Say Hi to {firstname} {lastname}!
      </button>
    </div>
  );
};

export default IAmAStatelessFunctionalComponent;

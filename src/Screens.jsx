import React from 'react';

const Screens = ({ firstOperand, operator, secondOperand, format }) => {
  return (
    <div className='screens'>
        <span className='first-screen'>
            {firstOperand !== null && `${format(firstOperand)} ${operator}`}
        </span>
        <span className={`second-screen ${
            secondOperand !== null && secondOperand.length > 9 ? "small" : "normal"
        }`}>
            {format(secondOperand)}
        </span>
    </div>
  );
};

export default Screens;
import React, { Component } from 'react';

import './Square.style.scss';
import Circle from '../../MainGame/Figures/Circle/Circle.component';
import Cross from '../../MainGame/Figures/Cross/Cross.component';

function Square(props) {
  let result = '';
  if (props.value == 'X') {
    result = <Cross />
  }
  if (props.value == 'O') {
    result = <Circle />
  }


  return (
    <button className="square" onClick={props.onClick}>
      {result}
    </button>
  );
}

export default Square;
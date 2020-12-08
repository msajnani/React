import React from 'react';
import ReactDOM from 'react-dom';
import {add,sub,mul,div} from "./Calc";

ReactDOM.render(
<>
  <ul>
    <li>Sum is {add(42,4)}</li>
    <li>Sub is {sub(40,4)}</li>
    <li>Mul is {mul(40,4)}</li>
    <li>Div is {div(40,4)}</li>
  </ul>



</>,
document.getElementById("root")
);

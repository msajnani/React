import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import './index.css';
import Sdata from "./Sdata";

//console.log(Sdata[0].sname);

function ncard(val) {
  console.log(val);
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />

  );

}

ReactDOM.render(
  <>

    <h1 className='heading_style'>Best Shows</h1>
    {Sdata.map(ncard)}

  </>, document.getElementById('root')
)
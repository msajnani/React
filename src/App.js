import React from 'react';

function App(){
  let curDate=new Date(2020,5,5,2);
curDate=curDate.getHours();
let greeting=';'
const cssStyle={};

if(curDate >=1 && curDate <12)
{
    greeting='Good Morning';
    cssStyle.color='green';
}else if(curDate>=12 && curDate<19){
    greeting="Good afternoon";
    cssStyle.color='orange';
}else{
    greeting="Good night";  
    cssStyle.color='black';
}

return(

  <>
  <div>
    <h1>Hello Everyone,<span style={cssStyle}>{greeting}</span></h1>
    </div>
</>

)

}

export default App;
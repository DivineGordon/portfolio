//import React from 'react';
const data={'react-redux':{
  Frontend:["HTML","CSS","Javascript"],
  Build:["webpack","Babel"],
 
}}
export const SingleProject=(props)=>{
  const {setView,category}=props;
  let {link ,img ,name ,des,long_des} = props.data;
const goBack=()=>{setView("home")};
const tools_data=data[category];
const tool_keys=Object.keys(tools_data);
const tools= tool_keys.map(k=>{
  if(k==="Frontend"){
  const tools=tools_data.Frontend.join(", ")+(props.data['front']?", "+props.data['front'].join(", "):"")
  return  <h5 key={k}><span className="w3-opacity">{k}: </span>{tools}</h5>
}
  return  <h5 key={k}><span className="w3-opacity">{k}: </span>{tools_data[k].join(", ")}</h5>
});

if(long_des){
des=long_des.map(
  (v,i)=>(<li key={i}>{v}</li>)
)
des=(<ul>{des}</ul>)
}
return (
<div className="w3-card-4 w3-margin w3-white">
  <div className='w3-container'>
    <button onClick={goBack} className='w3-btn w3-black'>BACK</button>  </div>
<img src={"images/"+img.src} alt={img.alt} style={{width:"100%"}} />
<div className="w3-container">
  <h3><a href={link} target="_blank"><b>{name}</b></a></h3>
 {tools}
</div>

<div className="w3-container">
  {long_des?<div>{des}</div> :<p dangerouslySetInnerHTML={{__html:des}} />}
  <div className="w3-row">
    <div className="w3-col m8 s12">
      <p><a className="w3-button w3-padding-large w3-white w3-border"
      href={link} target="_blank"><b>Go to Live Demo »</b></a></p>
    </div>
    <div className="w3-col m4">
      <p><button className="w3-btn w3-padding-large w3-right" ><b>Comments</b> <span className="w3-tag"></span></button></p>
    </div>
  </div>
</div>
</div>
)
}
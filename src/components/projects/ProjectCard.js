//import React from 'react';
let setView,setSingleProject;

export const ProjectCard=(props)=>{
  const {first}=props;
  const {img ,name ,des} = props.data;
  if(first){
    setView=props.setView;
    setSingleProject=props.setSingleProject;
  }
const changeView=(e)=>{
    e.preventDefault();
    setSingleProject({category:"react-redux",name:name})
    setView("single_project")
    }
return (
    <div className="w3-col m3 w3-container w3-border card w3-margin">
    <img src={"images/"+img.src} alt={img.alt}  className="w3-hover-opacity" />
    <div className="w3-container w3-white">
      <p><a onClick={changeView} href="#"><b>{name}</b></a></p>
      <p dangerouslySetInnerHTML={{__html:des}}></p>
    </div>
  </div>

)

}
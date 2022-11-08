//import React from 'react';
const Frontend = ["HTML", "CSS", "Javascript"];
const data = {
  'react-redux': {
    Build: ["webpack", "Babel"],
  },
  Python: {
    "APIs/Cloud Services": ["Google Cloud App Engine", "Google Cloud Functions",
      "Google Cloud Firestore(Firebase)"],
    Backend: ["Flask (python webframework)"],
  },Vue:{
    Build:['Vite']
  },
  MERN:{
    Frontend:['React','Redux','React router'],
    Build: ["webpack", "Babel"],
   Backend:['Mongo db','Express.js','Node.js']
  }
}

const goBack = () => { goBack.setView("home") };

export const SingleProject = (props) => {
  const { setView, category } = props;
  let { link, img, name, des, long_des, type, Git, ...others } = props.data;
  goBack.setView = setView;
  
  if (type === 'web') {
    var front = others.front;
    if (front) front = [...front];
    others.Frontend = front ? (front.push.apply(front, Frontend), front) : Frontend;
    delete others['front'];
  }
  
  
  
  
  others.tools.forEach(tool=>{
  if (tool==='Redux')return;
  let tools_data;
  if(tool==='React'){
    tools_data=data['react-redux']
  }
  else tools_data=data[tool]
  if(tools_data===undefined)return;
  var p, v;
  for (p in tools_data) {
    if (p in others) {
      v = others[p];
      v = [...v];
      v.push.apply(v, tools_data[p]) 
    }

   else  others[p] = tools_data[p]
  }
  })
  delete others['tools'];
  const tool_keys = Object.keys(others);
  const tools = tool_keys.map(k => {
    var v = others[k];
    if ((typeof v) !== 'string') v = others[k].join(", ")
    return <h5 key={k}><span className="w3-opacity">{k}: </span>{v}</h5>
  });

  if (long_des) {
    des = long_des.map(
      (v, i) => (<li key={i}>{v}</li>)
    )
    des = (<ul>{des}</ul>)
  }
  var Github = Git && (<div className="w3-cell" style={{ float: 'right' }}>
    <p><a target="_blank" href={Git} className="w3-btn w3-padding-large w3-right" ><b>Github »</b> <span className="w3-tag"></span></a></p>
  </div>);
  return (
    <div className="w3-row w3-margin">
      <div className="w3-container w3-col m8 w3-card-4 w3-white">
      <div className='w3-container'>
        <button onClick={goBack} className='w3-btn w3-black'>BACK</button>  </div>
      <img src={"images/" + img.src} alt={img.alt} style={{ width: "100%" }} />
      <div className="w3-container">
        <h3><a href={link} target="_blank"><b>{name}</b></a></h3>
        {tools}
      </div>

      <div className="w3-container">
        {long_des ? <div>{des}</div> : <p dangerouslySetInnerHTML={{ __html: des }} />}
        <div className="w3-cell-row">
          <div className="w3-cell" style={{ float: 'left' }}>
            <p><a className="w3-button w3-padding-large w3-white w3-border"
              href={link} target="_blank"><b>Go to Live Demo »</b></a></p>
          </div>
          {Github}
        </div>
      </div>
      </div>
    </div>
  )
}
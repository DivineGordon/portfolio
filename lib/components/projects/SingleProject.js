//import React from 'react';
const Frontend = ["HTML", "CSS", "Javascript"];
const data = {
  'react-redux': {
    Build: ["webpack", "Babel"]
  },
  Python: {
    "APIs/Cloud Services": ["Google Cloud App Engine", "Google Cloud Functions", "Google Cloud Firestore(Firebase)"],
    Backend: ["Flask (python webframework)"]
  }
};

const goBack = () => {
  goBack.setView("home");
};

export const SingleProject = props => {
  const {
    setView,
    category
  } = props;
  let {
    link,
    img,
    name,
    des,
    long_des,
    type,
    Git,
    ...others
  } = props.data;
  goBack.setView = setView;

  if (type === 'web') {
    var front = others.front;
    if (front) front = [...front];
    others.Frontend = front ? (front.push.apply(front, Frontend), front) : Frontend;
    delete others['front'];
  }

  others.tools.forEach(tool => {
    if (tool === 'Redux') return;
    let tools_data;

    if (tool === 'React') {
      tools_data = data['react-redux'];
    } else tools_data = data[tool];

    if (tools_data === undefined) return;
    var p, v;

    for (p in tools_data) {
      if (p in others) {
        v = others[p];
        v = [...v];
        v.push.apply(v, tools_data[p]);
      } else others[p] = tools_data[p];
    }
  });
  delete others['tools'];
  const tool_keys = Object.keys(others);
  const tools = tool_keys.map(k => {
    var v = others[k];
    if (typeof v !== 'string') v = others[k].join(", ");
    return /*#__PURE__*/React.createElement("h5", {
      key: k
    }, /*#__PURE__*/React.createElement("span", {
      className: "w3-opacity"
    }, k, ": "), v);
  });

  if (long_des) {
    des = long_des.map((v, i) => /*#__PURE__*/React.createElement("li", {
      key: i
    }, v));
    des = /*#__PURE__*/React.createElement("ul", null, des);
  }

  var Github = Git && /*#__PURE__*/React.createElement("div", {
    className: "w3-cell",
    style: {
      float: 'right'
    }
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: Git,
    className: "w3-btn w3-padding-large w3-right"
  }, /*#__PURE__*/React.createElement("b", null, "Github \xBB"), " ", /*#__PURE__*/React.createElement("span", {
    className: "w3-tag"
  }))));
  return /*#__PURE__*/React.createElement("div", {
    className: "w3-row w3-margin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w3-container w3-col m8 w3-card-4 w3-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w3-container"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: goBack,
    className: "w3-btn w3-black"
  }, "BACK"), "  "), /*#__PURE__*/React.createElement("img", {
    src: "images/" + img.src,
    alt: img.alt,
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "w3-container"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("a", {
    href: link,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("b", null, name))), tools), /*#__PURE__*/React.createElement("div", {
    className: "w3-container"
  }, long_des ? /*#__PURE__*/React.createElement("div", null, des) : /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: des
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "w3-cell-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w3-cell",
    style: {
      float: 'left'
    }
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: "w3-button w3-padding-large w3-white w3-border",
    href: link,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("b", null, "Go to Live Demo \xBB")))), Github))));
};
//import React from 'react';
const data = {
  'react-redux': {
    Frontend: ["HTML", "CSS", "Javascript"],
    Build: ["webpack", "Babel"]
  }
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
    long_des
  } = props.data;

  const goBack = () => {
    setView("home");
  };

  const tools_data = data[category];
  const tool_keys = Object.keys(tools_data);
  const tools = tool_keys.map(k => {
    if (k === "Frontend") {
      const tools = tools_data.Frontend.join(", ") + (props.data['front'] ? ", " + props.data['front'].join(", ") : "");
      return /*#__PURE__*/React.createElement("h5", {
        key: k
      }, /*#__PURE__*/React.createElement("span", {
        className: "w3-opacity"
      }, k, ": "), tools);
    }

    return /*#__PURE__*/React.createElement("h5", {
      key: k
    }, /*#__PURE__*/React.createElement("span", {
      className: "w3-opacity"
    }, k, ": "), tools_data[k].join(", "));
  });

  if (long_des) {
    des = long_des.map((v, i) => /*#__PURE__*/React.createElement("li", {
      key: i
    }, v));
    des = /*#__PURE__*/React.createElement("ul", null, des);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "w3-card-4 w3-margin w3-white"
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
    className: "w3-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w3-col m8 s12"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: "w3-button w3-padding-large w3-white w3-border",
    href: link,
    target: "_blank"
  }, /*#__PURE__*/React.createElement("b", null, "Go to Live Demo \xBB")))), /*#__PURE__*/React.createElement("div", {
    className: "w3-col m4"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    className: "w3-btn w3-padding-large w3-right"
  }, /*#__PURE__*/React.createElement("b", null, "Comments"), " ", /*#__PURE__*/React.createElement("span", {
    className: "w3-tag"
  })))))));
};
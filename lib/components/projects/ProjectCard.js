//import React from 'react';
let setView, setSingleProject;
export const ProjectCard = props => {
  const {
    first,
    category
  } = props;
  const {
    img,
    name,
    des
  } = props.data;

  if (first) {
    setView = props.setView;
    setSingleProject = props.setSingleProject;
  }

  const changeView = e => {
    e.preventDefault();
    setSingleProject({
      category: category,
      name: name
    });
    setView("single_project");
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "w3-col m3 w3-container w3-border card w3-margin"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/" + img.src,
    alt: img.alt,
    className: "w3-hover-opacity"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w3-container w3-white"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    onClick: changeView,
    href: "#"
  }, /*#__PURE__*/React.createElement("b", null, name))), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: des.substring(0, 50) + '...'
    }
  })));
};
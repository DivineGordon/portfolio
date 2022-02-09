function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//import React, { useState } from 'react';
//import  ReactDOM  from 'react-dom';
import { SingleProject } from '../components/projects/SingleProject.js';
import { ProjectCard } from '../components/projects/ProjectCard.js';
import data from '../data.js';
const useState = React.useState;

const SelectButton = props => {
  const options = props.categories.map((v, i) => {
    if (v === "react-redux") return null;
    return /*#__PURE__*/React.createElement("button", {
      className: "w3-bar-item w3-button",
      value: v,
      key: i + 1
    }, v);
  });
  const {
    setCategory
  } = props;

  const onSelectChange = e => {// setCategory(e.target.value) 
  };

  return ReactDOM.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "w3-margin-right"
  }, "Filter:"), /*#__PURE__*/React.createElement("div", {
    className: "w3-dropdown-hover"
  }, /*#__PURE__*/React.createElement("button", {
    className: "w3-button w3-border"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/react.svg",
    style: {
      width: "20px",
      "height": "20px"
    },
    className: "w3-margin-right"
  }), "React/Redux", /*#__PURE__*/React.createElement("svg", {
    className: "w3-margin-left",
    width: "20",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "#764ABC"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"
  }))), /*#__PURE__*/React.createElement("i", {
    class: "fa fa-caret-down"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: onSelectChange,
    className: "w3-dropdown-content w3-bar-block w3-card-4 w3-white"
  }, /*#__PURE__*/React.createElement("button", {
    className: "w3-bar-item w3-button",
    value: "react-redux",
    key: 0
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/react.svg",
    style: {
      width: "20px",
      "height": "20px"
    },
    className: "w3-margin-right"
  }), "React/Redux", /*#__PURE__*/React.createElement("svg", {
    className: "w3-margin-left",
    width: "20",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "#764ABC"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"
  })))), options.length !== 0 ? options : null))), document.getElementById("category_selector"));
};

const App = () => {
  const [view, setView] = useState("home");
  const [category, setCategory] = useState("react-redux");
  const [singleProject, setSingleProject] = useState({
    name: "",
    category: ""
  });
  let content;
  const categories = Object.keys(data);

  if (view === "home") {
    const emptyObject = {};
    content = data[category].map((d, i) => {
      const props = i === 0 ? {
        setView: setView,
        first: true,
        setSingleProject: setSingleProject
      } : emptyObject;
      return /*#__PURE__*/React.createElement(ProjectCard, _extends({}, props, {
        key: i,
        data: d
      }));
    });
  } else if (view === "single_project") {
    const {
      category,
      name
    } = singleProject;
    content = /*#__PURE__*/React.createElement(SingleProject, {
      category: category,
      data: data[category].find(v => v.name === name),
      setView: setView
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectButton, {
    category: category,
    setCategory: setCategory,
    categories: categories
  }), content);
};

export default App;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./client/components/Portfolios.js":
/*!*****************************************!*\
  !*** ./client/components/Portfolios.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons */ \"./client/components/Buttons.js\");\n/* harmony import */ var _portfolio_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portfolio_data */ \"./client/portfolio_data.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _templateObject14() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: column;\\n\"]);\n\n  _templateObject14 = function _templateObject14() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject13() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: space-evenly;\\n  font-size: 1.25em;\\n\"]);\n\n  _templateObject13 = function _templateObject13() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject12() {\n  var data = _taggedTemplateLiteral([\"\\n  margin: 3em 0;\\n\"]);\n\n  _templateObject12 = function _templateObject12() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject11() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 1.5em;\\n  padding-top: 1em;\\n\"]);\n\n  _templateObject11 = function _templateObject11() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject10() {\n  var data = _taggedTemplateLiteral([\"\\n  font-weight: bold;\\n  font-size: 1.5em;\\n  text-align: center;\\n  margin-top: 2em;\\n  margin-bottom: 0;\\n  @media (max-width: \", \") {\\n    text-align: left;\\n  }\\n\"]);\n\n  _templateObject10 = function _templateObject10() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject9() {\n  var data = _taggedTemplateLiteral([\"\\n  box-sizing: border-box;\\n  height: 1px;\\n  width: 100%;\\n  max-width: 1366px;\\n  display: block;\\n  margin: 0px auto;\\n  background: rgb(236, 236, 236);\\n\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 1.5em;\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 1.5em;\\n  margin-top: 1em;\\n  &:first-child {\\n    margin-top: 0;\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 1.5em;\\n  @media (max-width: \", \") {\\n    text-align: left;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 1.5em;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  margin: 0;\\n  align-self: center;\\n  font-size: 3em;\\n  text-align: center;\\n  @media (max-width: \", \") {\\n    text-align: left;\\n    &:after {\\n      text-align: left;\\n    }\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: column;\\n  padding: 5em 0;\\n  width: 50%;\\n  @media (max-width: \", \") {\\n    width: 90%;\\n  }\\n  &:first-child {\\n    padding-top: 1em;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-top: 4em;\\n  @media (max-width: \", \") {\\n    margin: auto;\\n    font-size: 0.75em;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar SMALL_WIDTH = '768px';\nvar MEDIUM_WIDTH = '1248px';\nvar Portfolios = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), SMALL_WIDTH);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), SMALL_WIDTH);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(_templateObject3(), SMALL_WIDTH);\nvar Detail = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());\nvar Situation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject5());\nvar Info = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject6(), SMALL_WIDTH);\nvar Bullet = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject7());\nvar Result = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject8());\nvar Divider = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject9());\nvar Subheader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject10(), SMALL_WIDTH);\nvar ActionList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject11());\nvar Demo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject12());\n\nvar Portfolio = function Portfolio(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {\n    even: props.even\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Detail, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Subheader, null, \"Overview\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Situation, null, props.situation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Subheader, null, \"Skills\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Info, null, props.technology.join(', ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Subheader, null, \"What I did\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionList, null, props.actions.map(function (action) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bullet, null, action);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Result, null, props.result)), props.elementId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Demo, {\n    id: props.elementId\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: 'auto',\n      marginTop: '3em'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__[\"GitHubButton\"], {\n    href: props.href\n  })));\n};\n\nvar Buttons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject13());\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject14());\n\nvar PortfolioButton = function PortfolioButton(_ref) {\n  var title = _ref.title;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, title));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.scrollTo(0, 0);\n    var script = document.createElement('script');\n    script.src = './bundle.js';\n    document.body.append(script);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Portfolios, null, _portfolio_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (portfolio, idx) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, idx > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Portfolio, _extends({\n      key: idx,\n      even: idx % 2 === 0\n    }, portfolio)));\n  }));\n});\n\n//# sourceURL=webpack:///./client/components/Portfolios.js?");

/***/ }),

/***/ "./client/portfolio_data.js":
/*!**********************************!*\
  !*** ./client/portfolio_data.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  title: 'Developing A Photo Gallery Microservice',\n  technology: ['React', 'Styled Components', 'React Router', 'HTML', 'CSS', 'Node', 'Express', 'MongoDB', 'Webpack', 'AWS', 'Docker'],\n  situation: 'Worked with a team of 3 other developers to create a product page for real estate properties that combined 4 microservices.',\n  actions: ['Created photo gallery front end. UI included a modal image carousel, a form for requesting more information, and additional tabs for geo-spatial information.', 'Implemented RESTful APIs and designed schema for MongoDB.', 'Created proxy server that combined microservices and that served the product page.', 'Deployed microservices and proxy server onto AWS.', 'Optimized product page performance for load time and accessibility using Lighthouse.'],\n  result: 'Deployed product page has first meaningful paint under 2s.',\n  href: 'https://github.com/joshua-t-liu/image-gallery',\n  elementId: 'image-gallery'\n}, {\n  title: 'Designing and Scaling A Customer Reviews Microservice',\n  technology: ['Node', 'Express', 'Nginx', 'PostgreSQL', 'Redis', 'AWS', 'Loader.io', 'New Relic'],\n  situation: 'Worked on designing and scaling a customer reviews microservice for an apparel web application. Goal was to scale microservice service to handle 1000 RPS under load with average load times under 50ms. Database included 50 million customer review records.',\n  actions: ['Desgined schema for PostgreSQL database.', 'Benchmarked database on local machine.', 'Designed RESTful APIs for microservice.', 'Deployed microservice onto AWS.', 'Tested performance using Loader.io and New Relic.', 'Implemented optimization strategies such as load balancing (Nginx) and caching (Redis).'],\n  result: 'Service handles 1200 RPS under load with an average load time of 50ms delay.',\n  href: 'https://github.com/joshua-t-liu/reviews-module'\n}]);\n\n//# sourceURL=webpack:///./client/portfolio_data.js?");

/***/ })

}]);
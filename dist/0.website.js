(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./client/components/About.js":
/*!************************************!*\
  !*** ./client/components/About.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./client/components/Home.js\");\n/* harmony import */ var _Skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Skills */ \"./client/components/Skills.js\");\n/* harmony import */ var _Experience__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Experience */ \"./client/components/Experience.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var stickyTitle = _ref.stickyTitle,\n      setStickyTitle = _ref.setStickyTitle,\n      stickyChat = _ref.stickyChat,\n      setStickyChat = _ref.setStickyChat;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return window.scrollTo(0, 0);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    stickyTitle: stickyTitle,\n    setStickyTitle: setStickyTitle,\n    stickyChat: stickyChat,\n    setStickyChat: setStickyChat\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Skills__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Experience__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n});\n\n//# sourceURL=webpack:///./client/components/About.js?");

/***/ }),

/***/ "./client/components/Experience.js":
/*!*****************************************!*\
  !*** ./client/components/Experience.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SVG */ \"./client/components/SVG.js\");\nfunction _templateObject10() {\n  var data = _taggedTemplateLiteral([\"\\n  color: rgb(123,123,123);\\n  text-align: center;\\n\"]);\n\n  _templateObject10 = function _templateObject10() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject9() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  margin-top: 3em;\\n  align-items: center;\\n  @media (max-width: \", \") {\\n    flex-direction: column;\\n  }\\n\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = _taggedTemplateLiteral([\"\\n  background-color: rgb(255,255,255);\\n  border-radius: 50%;\\n  height: 10em;\\n  width: 10em;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = _taggedTemplateLiteral([\"\\n  width: 15em;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin: 3em;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _templateObject6() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 0.5em;\\n  margin-top: 0.5em;\\n  font-weight: 900;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _taggedTemplateLiteral([\"\\n  background-color: rgb(247,247,247);\\n  border-radius: 50%;\\n  font-size: 2.5em;\\n  text-align: center;\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  top: 50%;\\n  left: 50%;\\n  height: \", \";\\n  width: \", \";\\n  transform: \", \";\\n  z-index: -1;\\n  @media (max-width: \", \") {\\n    transform: \", \";\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n  position: relative;\\n  margin-top: 1.5em;\\n  align-self: stretch;\\n  min-height: calc(75vh - 16em);\\n  z-index: -1;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 1.5em;\\n  margin-top: 1em;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 3em;\\n  margin: 0;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 5em 0;\\n  text-align: center;\\n  &.gray {\\n    background-color: rgb(247,247,247);\\n  }\\n\\n  @media (max-width: \", \") {\\n    font-size: 0.75em;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nvar SMALL_WIDTH = '768px';\nvar MEDIUM_WIDTH = '1248px';\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), SMALL_WIDTH);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(_templateObject2());\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());\nvar Bubbles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());\nvar StyledBubble = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5(), function (_ref) {\n  var size = _ref.size;\n  return \"\".concat(2.25 * size, \"em\");\n}, function (_ref2) {\n  var size = _ref2.size;\n  return \"\".concat(2.25 * size, \"em\");\n}, function (_ref3) {\n  var transform = _ref3.transform;\n  return \"translate(\".concat(transform[0][0], \"em, \").concat(transform[0][1], \"em)\");\n}, SMALL_WIDTH, function (_ref4) {\n  var transform = _ref4.transform;\n  return \"translate(\".concat(transform[1][0], \"em, \").concat(transform[1][1], \"em)\");\n});\nvar SubText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());\n\nvar Bubble = function Bubble(_ref5) {\n  var company = _ref5.company,\n      years = _ref5.years,\n      props = _objectWithoutProperties(_ref5, [\"company\", \"years\"]);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBubble, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, years), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubText, null, company));\n};\n\nvar School = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7());\nvar Circle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject8());\nvar Schools = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject9(), SMALL_WIDTH);\nvar Program = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject10());\n\nvar Badge = function Badge(_ref6) {\n  var image = _ref6.image,\n      title = _ref6.title,\n      degree = _ref6.degree;\n  var Image = image;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(School, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Program, null, degree));\n};\n\nvar schools = [{\n  title: 'Georgia Institute of Techology',\n  degree: 'B.S. Mathematics',\n  image: _SVG__WEBPACK_IMPORTED_MODULE_2__[\"GaTech\"]\n}, {\n  title: 'Hack Reactor',\n  degree: 'Advanced Software Engineering Immersive Program',\n  image: _SVG__WEBPACK_IMPORTED_MODULE_2__[\"HackReactor\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var translation = [[[-7, -6], [-6, -6]], [[0.5, -4.5], [0.5, -2]], [[1, 0.5], [-0.5, 3]], [[-4, 1], [-5, 1]]];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, \"7 Years of Software Implementation Experience\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, null, \"Working with Epic, an enterprise healthcare software\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bubbles, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bubble, {\n    company: \"Epic\",\n    years: \"3 years\",\n    size: 3,\n    transform: translation[0]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bubble, {\n    company: \"HCI Group\",\n    years: \"1 year\",\n    size: 2,\n    transform: translation[1]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bubble, {\n    company: \"Mass General Brigham\",\n    years: \"2 years\",\n    size: 2.5,\n    transform: translation[2]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bubble, {\n    company: \"Huron Consulting\",\n    years: \"1 year\",\n    size: 2,\n    transform: translation[3]\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {\n    className: 'gray'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, \"Where I've Studied\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Schools, null, schools.map(function (school) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Badge, school);\n  }))));\n});\n\n//# sourceURL=webpack:///./client/components/Experience.js?");

/***/ }),

/***/ "./client/components/Home.js":
/*!***********************************!*\
  !*** ./client/components/Home.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons */ \"./client/components/Buttons.js\");\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 1.5em;\\n  width: 50%;\\n  margin: 0 auto;\\n  text-align: center;\\n  & + & {\\n    margin-top: 1em;\\n  }\\n  @media (max-width: \", \") {\\n    width: 90%;\\n  }\\n  // @media (max-width: \", \") {\\n  //   text-align: left;\\n  // }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  //margin-top: \", \";\\n  font-size: 5em;\\n  text-align: center;\\n  //transition: margin-top 0.2s ease-in;\\n  @media (max-width: \", \") {\\n    font-size: 4em;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 5em 0;\\n  min-height: calc(100vh - 10em);\\n  @media (max-width: \", \") {\\n    padding: 4em 0;\\n    min-height: calc(100vh - 8em);\\n    font-size: 0.75em;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nvar SMALL_WIDTH = '768px';\nvar MEDIUM_WIDTH = '1248px';\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), SMALL_WIDTH);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject2(), function (_ref) {\n  var sticky = _ref.sticky;\n  return sticky ? '-0.05em' : null;\n}, SMALL_WIDTH);\nvar About = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject3(), MEDIUM_WIDTH, SMALL_WIDTH);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref2) {\n  var stickyTitle = _ref2.stickyTitle,\n      setStickyTitle = _ref2.setStickyTitle,\n      stickyChat = _ref2.stickyChat,\n      setStickyChat = _ref2.setStickyChat;\n  var title = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var chat = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var options = {\n      root: null,\n      rootMargin: '0px',\n      threshold: 1.0\n    };\n\n    var intersectionCb = function intersectionCb(entries) {\n      entries.forEach(function (entry) {\n        if (entry.target === chat.current) {\n          setStickyChat(!entry.isIntersecting);\n        }\n\n        if (entry.target === title.current) {\n          setStickyTitle(!entry.isIntersecting);\n        }\n      });\n    };\n\n    var observer = new IntersectionObserver(intersectionCb, options);\n    observer.observe(title.current);\n    observer.observe(chat.current);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {\n    ref: title,\n    sticky: stickyTitle\n  }, \"Joshua Liu\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(About, null, \"Full stack enginer with a background in math and software implementation.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(About, null, \"Actively looking for new opportunities, and would love to connect and hear from you.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      marginTop: '6em'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__[\"ChatButton\"], {\n    ref: chat\n  }, \"LET'S CHAT\")));\n});\n\n//# sourceURL=webpack:///./client/components/Home.js?");

/***/ }),

/***/ "./client/components/SVG.js":
/*!**********************************!*\
  !*** ./client/components/SVG.js ***!
  \**********************************/
/*! exports provided: College, BootCamp, GaTech, HackReactor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"College\", function() { return College; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BootCamp\", function() { return BootCamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GaTech\", function() { return GaTech; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HackReactor\", function() { return HackReactor; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n //Icons made by <a href=\"https://creativemarket.com/Becris\" title=\"Becris\">Becris</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\"> www.flaticon.com</a>\n//Icons made by <a href=\"http://www.freepik.com/\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\"> www.flaticon.com</a>\n//Icons made by <a href=\"http://www.dariusdan.com/\" title=\"Darius Dan\">Darius Dan</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\"> www.flaticon.com</a>\n\nvar College = function College() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    id: \"graduate\",\n    \"enable-background\": \"new 0 0 300 300\",\n    height: \"8em\",\n    width: \"8em\",\n    fill: \"rgb(74,74,74)\",\n    viewBox: \"0 0 300 300\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"m237.129 57.037-91.375-26.875c-.784-.23-1.619-.215-2.394.043l-80.625 26.875c-1.633.545-2.735 2.073-2.735 3.795s1.102 3.25 2.735 3.795l9.653 3.218v46.143c-5.14 1.554-8.895 6.33-8.895 11.969 0 6.896 5.61 12.506 12.506 12.506s12.506-5.61 12.506-12.506c0-5.35-3.383-9.913-8.117-11.695v-43.75l11.612 3.87v34.825c0 .171.017.339.038.506-.012.126-.038.249-.038.378v23.422c0 16.37 9.245 31.436 23.553 38.38l12.447 6.041v8.023h-9.067c-30.29 0-54.933 24.643-54.933 54.932v25.068c0 2.209 1.791 4 4 4h156c2.209 0 4-1.791 4-4v-25.068c0-30.289-24.643-54.932-54.932-54.932h-9.068v-8.379l12.137-5.762c14.496-6.883 23.863-22.006 23.863-38.53v-24.079-33.617l37.129-10.92c1.702-.501 2.871-2.063 2.871-3.838s-1.169-3.337-2.871-3.838zm-161.129 73.469c-2.484 0-4.506-2.021-4.506-4.506 0-2.484 2.021-4.506 4.506-4.506s4.506 2.021 4.506 4.506c0 2.484-2.022 4.506-4.506 4.506zm144 110.426v21.068h-24v-24c0-2.209-1.791-4-4-4s-4 1.791-4 4v24h-84v-24c0-2.209-1.791-4-4-4s-4 1.791-4 4v24h-24v-21.068c0-25.878 21.054-46.932 46.933-46.932h9.185c.999 8.986 8.634 16 17.882 16s16.883-7.014 17.882-16h9.186c25.878 0 46.932 21.054 46.932 46.932zm-64-48.932c0 5.514-4.486 10-10 10s-10-4.486-10-10v-10.141l.827.401c2.761 1.34 5.729 2.01 8.698 2.01 2.913 0 5.826-.645 8.545-1.936l1.93-.916zm16.705-27.368-22.066 10.477c-3.284 1.56-7.047 1.543-10.319-.045l-21.273-10.325c-11.571-5.616-19.047-17.856-19.047-31.183v-18.519c13.316 4.662 27.571 6.995 42.685 6.995 15.558 0 32.028-2.479 49.315-7.42v18.718c0 13.449-7.573 25.736-19.295 31.302zm19.295-58.345c-34.913 10.399-65.069 10.479-92 .238v-29.433l43.36 14.453c.41.137.837.205 1.265.205.38 0 .76-.054 1.129-.162l46.246-13.602zm-47.3-22.728-68.051-22.684 68.051-22.684 77.124 22.684z\"\n  })));\n}; //Icons made by <a href=\"https://www.flaticon.com/free-icon/exercise_2928158\" title=\"Good Ware\">Good Ware</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\"> www.flaticon.com</a>\n\n\nvar BootCamp = function BootCamp() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"7em\",\n    height: \"7em\",\n    viewBox: \"0 0 128 128\",\n    fill: \"rgb(74,74,74)\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M121.25,20.673h-2.313V15.517a6.757,6.757,0,0,0-6.75-6.75h-7.25a6.757,6.757,0,0,0-6.749,6.75v17.5H79.531v-.556a6.5,6.5,0,0,0-5.726-6.511,6.389,6.389,0,0,0-4.884,1.619q-.169.155-.327.32-.157-.165-.327-.32a6.363,6.363,0,0,0-4.885-1.619,6.192,6.192,0,0,0-3.943,1.987,6.314,6.314,0,0,0-9.22-.035,6.335,6.335,0,0,0-10.938,4.362v.753H29.813v-17.5a6.758,6.758,0,0,0-6.75-6.75h-7.25a6.757,6.757,0,0,0-6.75,6.75v5.156H6.75A6.758,6.758,0,0,0,0,27.423V56.986a6.758,6.758,0,0,0,6.75,6.75H9.063v5.156a6.757,6.757,0,0,0,6.75,6.75h7.25a6.758,6.758,0,0,0,6.75-6.75v-17.5H39.3c0,.038,0,.077.006.115a1.709,1.709,0,0,0-.023.228v7.2a18.9,18.9,0,0,0,2.348,9.111l6.84,12.39v37.047a1.75,1.75,0,0,0,1.75,1.75H77.781a1.75,1.75,0,0,0,1.75-1.75V80.534L86.7,70.2a11.277,11.277,0,0,0,2.02-6.455V51.389h9.469v17.5a6.757,6.757,0,0,0,6.749,6.75h7.25a6.757,6.757,0,0,0,6.75-6.75V63.736h2.313a6.758,6.758,0,0,0,6.75-6.75V27.423A6.758,6.758,0,0,0,121.25,20.673ZM70.344,32.267a2.844,2.844,0,0,1,3.128-2.83,2.976,2.976,0,0,1,2.559,3.027v.556H70.174A1.74,1.74,0,0,0,70.344,32.267Zm-6.629-2.83c.095-.009.191-.014.285-.014a2.845,2.845,0,0,1,2.844,2.844,1.74,1.74,0,0,0,.17.753H64a6.357,6.357,0,0,0-2.844.675V32.464A2.976,2.976,0,0,1,63.715,29.437ZM66.844,51.05a2.844,2.844,0,1,1-5.688,0V44.971a6.649,6.649,0,0,0,3.041.737h2.647ZM54.813,29.423a2.847,2.847,0,0,1,2.843,2.844V51.05a2.844,2.844,0,1,1-5.687,0V32.267A2.847,2.847,0,0,1,54.813,29.423ZM42.781,32.267a2.844,2.844,0,1,1,5.688,0V51.05a2.844,2.844,0,0,1-5.688,0V32.267ZM6.75,60.236a3.254,3.254,0,0,1-3.25-3.25V27.423a3.254,3.254,0,0,1,3.25-3.25H9.063V60.236Zm19.563,8.656a3.254,3.254,0,0,1-3.25,3.25h-7.25a3.253,3.253,0,0,1-3.25-3.25V15.517a3.253,3.253,0,0,1,3.25-3.25h7.25a3.254,3.254,0,0,1,3.25,3.25V68.892Zm3.5-32.372h9.468V47.889H29.813ZM85.219,63.748a7.789,7.789,0,0,1-1.4,4.46l-7.48,10.78a1.752,1.752,0,0,0-.312,1v35.747H51.969V79.986a1.75,1.75,0,0,0-.218-.846L44.693,66.355a15.392,15.392,0,0,1-1.912-7.42V56.712a6.3,6.3,0,0,0,7.438-1.3,6.314,6.314,0,0,0,9.187,0,6.315,6.315,0,0,0,9.188,0A6.335,6.335,0,0,0,79.531,51.05V43.958a1.75,1.75,0,0,0-1.75-1.75H64.2a2.976,2.976,0,0,1-3.027-2.559c-.009-.089-.013-.178-.014-.266v-.038A2.845,2.845,0,0,1,64,36.52H77.394l.314.019.02,0a7.828,7.828,0,0,1,7.491,7.808v19.4ZM70.344,45.708h5.687V51.05a2.844,2.844,0,1,1-5.687,0Zm18.375,2.181V44.345a11.288,11.288,0,0,0-3.145-7.825H98.188V47.889Zm26.718,21a3.254,3.254,0,0,1-3.25,3.25h-7.25a3.254,3.254,0,0,1-3.25-3.25V15.517a3.254,3.254,0,0,1,3.25-3.25h7.25a3.254,3.254,0,0,1,3.25,3.25V68.892ZM124.5,56.986a3.254,3.254,0,0,1-3.25,3.25h-2.313V24.173h2.313a3.254,3.254,0,0,1,3.25,3.25Z\"\n  }));\n};\n\nvar GaTech = function GaTech() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 250 157.48767\",\n    height: \"7em\",\n    width: \"7em\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", {\n    transform: \"matrix(.81578 0 0 .81578 1.1766 1.1197)\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    fill: \"rgb(74,74,74)\",\n    d: \"m120 60.7v49.5h27.6l2.7-14.1h8.6c-5.1 21.4-28.7 35.6-56.4 33.4-26.3-2-54.5-16.9-54.4-44.7 0.1-30.7 27.6-48.4 53.3-49.5 17.2-0.7 36.5 5.9 50.4 17.4 0.8 0.7 1 0.8 1.1 0.9s0.2 0.1 0.9 0.7l0.8 0.6h30.7v-54.9h-31.9v15.3c-13-7.6-33.6-14.9-57.3-14.8-27.1 0.1-53.5 11.2-72.5 30.4-15.5 15.8-23.8 35-23.6 54.3 0.2 18.9 8.8 37 24 50.9 19.4 17.7 47.8 26.9 75.8 24.6 21.8-1.8 41.2-6.6 55.4-13.7v5.4h33.8v-56.2h8.1v62.5h-16.2v31.9h74.9v-31.9h-16.2v-62.6h34.2l2.5 14.1h27.7v-49.5h-184z\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"m125.4 104.8h17.6l2.7-14.1h19.6l-0.5 3.1c-3.9 25.9-30.9 43.6-62.8 41.2-28.7-2.2-59.5-18.9-59.4-50.1 0.1-29.9 25.3-53.5 58.5-54.9 18.5-0.8 39.2 6.3 54.1 18.6 0.6 0.5 0.6 0.5 0.7 0.6s0.2 0.1 0.5 0.4h23.3v-44.2h-21v19.2l-4.5-2.3c-11.5-8-32.6-16.4-57.6-16.4h-0.4c-25.8 0.1-50.8 10.6-68.7 28.8-14.4 14.7-22.3 32.6-22 50.4 0.2 17.4 8.1 34.1 22.2 46.9 18.3 16.7 45.1 25.4 71.7 23.2 23.2-1.9 43.5-7.3 57.3-15.2l4.1-2.4-0.1 9.3h22.8v-56.2h19v73.4h-16.2v21h64v-21h-16.2v-73.4h44.2l2.5 14.1h17.7v-38.7h-173.1v38.7z\",\n    \"class\": \"st1\",\n    fill: \"rgb(236,236,236)\"\n  })));\n};\n\nvar HackReactor = function HackReactor() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    version: \"1.0\",\n    width: \"7em\",\n    height: \"7em\",\n    viewBox: \"0 0 200 200\",\n    preserveAspectRatio: \"xMidYMid meet\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"metadata\", null, \"Created by potrace 1.16, written by Peter Selinger 2001-2019\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", {\n    transform: \"translate(0.000000,200.000000) scale(0.100000,-0.100000)\",\n    fill: \"#000000\",\n    stroke: \"none\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    fill: \"rgb(74,74,74)\",\n    d: \"M830 1845 c-318 -63 -582 -310 -669 -625 -32 -115 -30 -337 4 -454 40 -137 91 -230 189 -341 133 -151 346 -263 534 -281 l72 -7 0 51 c0 55 -8 62 -63 62 -18 0 -62 9 -99 19 -212 61 -382 202 -478 396 -51 102 -70 177 -77 294 -18 295 144 577 407 711 46 23 175 70 194 70 6 0 11 -20 11 -45 l0 -45 -65 -19 c-94 -29 -185 -86 -265 -166 -80 -81 -127 -155 -163 -258 -22 -63 -25 -88 -25 -207 0 -153 13 -210 77 -324 66 -119 201 -241 321 -291 39 -16 188 -55 213 -55 9 0 12 37 12 154 l0 153 -58 17 c-148 41 -249 164 -260 317 -5 75 9 143 41 199 49 86 147 160 234 178 38 8 38 8 41 61 l3 54 -47 -7 c-26 -3 -79 -22 -119 -41 -87 -41 -179 -134 -220 -221 -77 -162 -42 -383 81 -510 47 -48 138 -110 175 -119 21 -5 24 -12 24 -55 0 -35 -4 -50 -13 -50 -7 0 -48 17 -90 37 -186 90 -311 284 -314 488 -4 271 177 499 445 561 l77 18 0 148 0 148 -32 -1 c-18 0 -62 -7 -98 -14z\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    fill: \"rgb(128,128,128)\",\n    d: \"M1040 1811 l0 -48 76 -13 c227 -36 426 -170 543 -365 105 -173 135 -422 74 -610 -61 -190 -201 -359 -373 -449 -58 -31 -178 -75 -203 -76 -4 0 -7 21 -5 46 l3 47 66 22 c206 69 370 242 430 455 24 83 26 256 3 343 -68 263 -304 469 -571 500 l-43 5 0 -153 0 -154 58 -16 c102 -29 180 -96 238 -205 15 -28 19 -57 19 -140 0 -95 -3 -110 -27 -157 -54 -102 -139 -172 -237 -196 l-51 -12 0 -53 0 -54 38 6 c136 25 257 110 328 230 136 230 49 524 -192 648 l-64 33 0 48 c0 47 0 47 28 41 109 -26 271 -166 330 -287 161 -329 -22 -710 -382 -799 l-86 -21 0 -149 0 -148 29 0 c41 0 154 25 225 50 279 96 500 348 561 640 17 83 20 266 4 342 -23 117 -70 226 -139 328 -44 64 -164 182 -233 229 -112 76 -294 141 -399 141 l-48 0 0 -49z\"\n  })));\n};\n\n\n\n//# sourceURL=webpack:///./client/components/SVG.js?");

/***/ }),

/***/ "./client/components/Skills.js":
/*!*************************************!*\
  !*** ./client/components/Skills.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _templateObject7() {\n  var data = _taggedTemplateLiteral([\"\\n  color: dodgerblue;\\n  @media (max-width: \", \") {\\n    align-self: flex-start;\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 0.75em;\\n  font-weight: normal;\\n  line-height: 1.75em;\\n  text-align: left;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  width: 10em;\\n  height: 6em;\\n  flex-direction: column;\\n  align-items: center;\\n  font-size: 2em;\\n  font-weight: bold;\\n  background-color: rgb(255,255,255);\\n  border-radius: 0.25em;\\n  padding: 1em;\\n  margin 1em;\\n  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px 0px, rgba(0, 0, 0, 0.16) 0px 47px 46px -27px;\\n  @media (max-width: \", \") {\\n    margin-top: 1em;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-evenly;\\n  margin: 1em 0;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 1.5em;\\n  margin-top: 1em;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 3em;\\n  margin: 0;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: column;\\n  padding: 5em 0;\\n  align-items: center;\\n  text-align: center;\\n  background-color: rgb(247,247,247);\\n  @media (max-width: \", \") {\\n    font-size: 0.75em;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar SMALL_WIDTH = '768px';\nvar MEDIUM_WIDTH = '1248px';\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), SMALL_WIDTH);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(_templateObject2());\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());\nvar Groups = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());\nvar SkillSet = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5(), SMALL_WIDTH);\nvar Skills = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject6());\nvar SkillSetTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7(), SMALL_WIDTH);\nvar SKILLS = {\n  languages: ['JavaScript', 'Python', 'MUMPS'],\n  frameworks: {\n    'Front End': ['React', 'React-Native', 'Redux', 'React Router', 'jQuery', 'HTML', 'CSS'],\n    'Back End': ['Node', 'Express', 'Nginx', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],\n    'Other': ['Docker', 'AWS', 'Git', 'Jest, Enzyme', 'Webpack', 'Mocha, Chai', 'New Relic', 'Loader.io']\n  }\n};\n\nvar capitalizeFirstLetter = function capitalizeFirstLetter(str) {\n  return str[0].toUpperCase() + str.substr(1);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var skillsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      align = _useState2[0],\n      setAlign = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var options = {\n      root: null,\n      rootMargin: '0px',\n      threshold: 0\n    };\n\n    var intersectionCb = function intersectionCb(entries) {\n      entries.forEach(function (entry) {\n        if (entry.target === skillsRef.current) {// setAlign(!entry.isIntersecting);\n        }\n      });\n    };\n\n    var observer = new IntersectionObserver(intersectionCb, options);\n    observer.observe(skillsRef.current);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, \"What's On The Table\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Languages:\"), \" \", SKILLS.languages.join(', ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Groups, null, Object.entries(SKILLS.frameworks).map(function (_ref, idx) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        skillset = _ref2[0],\n        skills = _ref2[1];\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkillSet, _extends({\n      ref: !idx ? skillsRef : null\n    }, {\n      align: align\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkillSetTitle, null, skillset), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Skills, null, skills.join(', ')));\n  })));\n});\n\n//# sourceURL=webpack:///./client/components/Skills.js?");

/***/ })

}]);
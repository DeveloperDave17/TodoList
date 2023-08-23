/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    box-sizing: border-box;
    --primary-color: #18191A;
    --secondary-color: #3a3b3c;
    --secondary-color-with-opac: rgba(58, 59, 60, 0.5);
    --tertiary-color: #242526;
    --primary-text: #E4E6EB;
    --secondary-text: #B0B3B8;
    --primary-svg: invert(100%) sepia(75%) saturate(616%) hue-rotate(178deg) brightness(101%) contrast(84%);
}

body {
    margin: 0px;
}

#main-container {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 50px 1fr;
    width: 100vw;
    height: 100vh;
}

#nav-bar-container {
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    align-items: center;
    padding: 24px;
    background-color: var(--secondary-color);
    color: var(--primary-text);
}

#nav-bar-container > img {
    height: 24px;
    width: auto;
    filter: var(--primary-svg);
}

#nav-bar-container>img:nth-child(2) {
    margin-left: max(40px, 20vw);
}

#nav-bar-container>input {
    margin-left: 8px;
    margin-right: max(40px, 15vw);
    border: none;
    outline: none;
    background-color: var(--secondary-text);
    padding: 4px 8px;
    border-radius: 8px;
}

#side-panel-container {
    grid-area: 2 / 1 / 3 / 2;
    background-color: var(--tertiary-color);
    color: var(--primary-text);
    padding: 0px 16px;
}

#project-container {
    grid-area: 2 / 2 / 3 / 3;
    padding: 24px;
    background-color: var(--primary-color);
    color: var(--primary-text);
}

#project-todos-container {
    display: flex;
    flex-grow: 1;
    gap: 50px;
    flex-wrap: wrap;
    max-width: calc(100vw - 200px);
}

.todo-container, #create-todo-container {
    height: 300px;
    width: 300px;
    background-color: var(--secondary-color);
}

.todo-container>img {
    height: 32px;
    width: auto;
    filter: var(--primary-svg);
    align-self: last baseline;
    justify-self: end;
    margin: 0px 10px 10px 0px;
}

.todo-container {
    display: grid;
    grid-template-rows: 4fr 1fr 1fr;
    max-width: 300px;
    max-height: 300px;
    text-align: center;
}

.todo-container>h2:first-child {
    align-self: center;
    justify-self: center;
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
}

.todo-container>p {
    align-self: baseline;
    justify-self: center;
    font-size: 24px;
}

#create-todo-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,0BAA0B;IAC1B,kDAAkD;IAClD,yBAAyB;IACzB,uBAAuB;IACvB,yBAAyB;IACzB,uGAAuG;AAC3G;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,4BAA4B;IAC5B,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,wCAAwC;IACxC,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,0BAA0B;AAC9B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,uCAAuC;IACvC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,uCAAuC;IACvC,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;IACT,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,wCAAwC;AAC5C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,0BAA0B;IAC1B,yBAAyB;IACzB,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":[":root {\n    box-sizing: border-box;\n    --primary-color: #18191A;\n    --secondary-color: #3a3b3c;\n    --secondary-color-with-opac: rgba(58, 59, 60, 0.5);\n    --tertiary-color: #242526;\n    --primary-text: #E4E6EB;\n    --secondary-text: #B0B3B8;\n    --primary-svg: invert(100%) sepia(75%) saturate(616%) hue-rotate(178deg) brightness(101%) contrast(84%);\n}\n\nbody {\n    margin: 0px;\n}\n\n#main-container {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 50px 1fr;\n    width: 100vw;\n    height: 100vh;\n}\n\n#nav-bar-container {\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    align-items: center;\n    padding: 24px;\n    background-color: var(--secondary-color);\n    color: var(--primary-text);\n}\n\n#nav-bar-container > img {\n    height: 24px;\n    width: auto;\n    filter: var(--primary-svg);\n}\n\n#nav-bar-container>img:nth-child(2) {\n    margin-left: max(40px, 20vw);\n}\n\n#nav-bar-container>input {\n    margin-left: 8px;\n    margin-right: max(40px, 15vw);\n    border: none;\n    outline: none;\n    background-color: var(--secondary-text);\n    padding: 4px 8px;\n    border-radius: 8px;\n}\n\n#side-panel-container {\n    grid-area: 2 / 1 / 3 / 2;\n    background-color: var(--tertiary-color);\n    color: var(--primary-text);\n    padding: 0px 16px;\n}\n\n#project-container {\n    grid-area: 2 / 2 / 3 / 3;\n    padding: 24px;\n    background-color: var(--primary-color);\n    color: var(--primary-text);\n}\n\n#project-todos-container {\n    display: flex;\n    flex-grow: 1;\n    gap: 50px;\n    flex-wrap: wrap;\n    max-width: calc(100vw - 200px);\n}\n\n.todo-container, #create-todo-container {\n    height: 300px;\n    width: 300px;\n    background-color: var(--secondary-color);\n}\n\n.todo-container>img {\n    height: 32px;\n    width: auto;\n    filter: var(--primary-svg);\n    align-self: last baseline;\n    justify-self: end;\n    margin: 0px 10px 10px 0px;\n}\n\n.todo-container {\n    display: grid;\n    grid-template-rows: 4fr 1fr 1fr;\n    max-width: 300px;\n    max-height: 300px;\n    text-align: center;\n}\n\n.todo-container>h2:first-child {\n    align-self: center;\n    justify-self: center;\n    font-size: 24px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 300px;\n}\n\n.todo-container>p {\n    align-self: baseline;\n    justify-self: center;\n    font-size: 24px;\n}\n\n#create-todo-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domdisplayer.ts":
/*!*****************************!*\
  !*** ./src/domdisplayer.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMDisplayer: () => (/* binding */ DOMDisplayer)
/* harmony export */ });
/* harmony import */ var _icons_bars_solid_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/bars-solid.svg */ "./src/icons/bars-solid.svg");
/* harmony import */ var _icons_search_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/search-solid.svg */ "./src/icons/search-solid.svg");
/* harmony import */ var _icons_chevron_circle_down_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/chevron-circle-down-solid.svg */ "./src/icons/chevron-circle-down-solid.svg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




var DOMDisplayer = /** @class */ (function () {
    function DOMDisplayer() {
    }
    DOMDisplayer.prototype.displayLayout = function () {
        var mainContainer = document.createElement('div');
        mainContainer.setAttribute('id', 'main-container');
        document.body.appendChild(mainContainer);
        this.displayNavbar();
        this.displaySidePanel();
        this.displayProjectTitle('Today');
        this.displayProjectContainer('Today');
        this.displayCreateTodo();
    };
    DOMDisplayer.prototype.displayNavbar = function () {
        var mainContainer = document.getElementById('main-container');
        var navBarContainer = document.createElement('div');
        navBarContainer.setAttribute('id', 'nav-bar-container');
        var bars = new Image();
        bars.src = _icons_bars_solid_svg__WEBPACK_IMPORTED_MODULE_0__;
        var magnifyingGlass = new Image();
        magnifyingGlass.src = _icons_search_solid_svg__WEBPACK_IMPORTED_MODULE_1__;
        var searchBar = document.createElement('input');
        searchBar.setAttribute('type', 'text');
        searchBar.setAttribute('placeholder', 'search');
        var siteName = document.createElement('h1');
        siteName.textContent = "Let's Todo This";
        navBarContainer.append(bars, magnifyingGlass, searchBar, siteName);
        mainContainer.appendChild(navBarContainer);
    };
    DOMDisplayer.prototype.displaySidePanel = function () {
        var mainContainer = document.getElementById('main-container');
        var sidePanelContainer = document.createElement('div');
        sidePanelContainer.setAttribute('id', 'side-panel-container');
        var projectsContainerTitle = document.createElement('h2');
        projectsContainerTitle.textContent = 'Projects';
        var projectsContainer = document.createElement('div');
        projectsContainer.setAttribute('id', 'projects-container');
        var createProjectButton = document.createElement('button');
        createProjectButton.textContent = 'Create Project';
        sidePanelContainer.append(projectsContainerTitle, projectsContainer, createProjectButton);
        mainContainer.appendChild(sidePanelContainer);
    };
    DOMDisplayer.prototype.displayProjectTitle = function (title) {
        var projectsContainer = document.getElementById('projects-container');
        var projectTitleElement = document.createElement('p');
        projectTitleElement.textContent = title;
        projectsContainer.appendChild(projectTitleElement);
    };
    DOMDisplayer.prototype.displayTodo = function (elementAfter, title, dueDate, priority) {
        var todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
        todoContainer.classList.add('collapsed');
        var titleElement = document.createElement('h2');
        titleElement.textContent = title;
        var dueDateElement = document.createElement('p');
        dueDateElement.textContent = dueDate;
        var dropDownElement = new Image();
        dropDownElement.src = _icons_chevron_circle_down_solid_svg__WEBPACK_IMPORTED_MODULE_2__;
        todoContainer.append(titleElement, dueDateElement, dropDownElement);
        this.displayPriority(todoContainer, priority);
        var projectTodoContainer = document.getElementById('project-todos-container');
        projectTodoContainer.insertBefore(todoContainer, elementAfter);
    };
    DOMDisplayer.prototype.displayTodoAtIndex = function (todoIndex, title, dueDate, priority) {
        var projectTodos = document.querySelectorAll('.todo-container');
        var todoElement = projectTodos[todoIndex];
        if (todoElement === null) {
            var createElement = document.getElementById('create-todo-container');
            this.displayTodo(createElement, title, dueDate, priority);
        }
        else {
            this.displayTodo(todoElement, title, dueDate, priority);
        }
    };
    DOMDisplayer.prototype.displayTodoBeforeCreateDiv = function (title, dueDate, priority) {
        var createElement = document.getElementById('create-todo-container');
        this.displayTodo(createElement, title, dueDate, priority);
    };
    DOMDisplayer.prototype.removeTodoElement = function (todoElement) {
        document.getElementById('project-todos-container').removeChild(todoElement);
    };
    DOMDisplayer.prototype.removeTodoAtIndex = function (todoIndex) {
        var projectTodos = document.querySelectorAll('.todo-container');
        var todoElement = projectTodos[todoIndex];
        if (todoElement !== null) {
            this.removeTodoElement(todoElement);
        }
    };
    DOMDisplayer.prototype.addEventListenerToTodo = function (index, expandTodo) {
        var projectTodos = document.querySelectorAll('.todo-container');
        var todoContainer = projectTodos[index];
        todoContainer.addEventListener('click', expandTodo);
    };
    DOMDisplayer.prototype.displayPriority = function (todoContainer, priority) {
        var backgroundcolor = 'black';
        if (priority === 'low') {
            backgroundcolor = 'green';
        }
        else if (priority === 'medium') {
            backgroundcolor = 'yellow';
        }
        else if (priority === 'high') {
            backgroundcolor = 'red';
        }
        todoContainer.style.backgroundColor = backgroundcolor;
    };
    DOMDisplayer.prototype.displayProjectContainer = function (projectTitle) {
        var mainContainer = document.getElementById('main-container');
        var projectContainer = document.createElement('div');
        projectContainer.setAttribute('id', 'project-container');
        var projectTitleElement = document.createElement('h1');
        projectTitleElement.textContent = projectTitle;
        var projectTodosContainer = document.createElement('div');
        projectTodosContainer.setAttribute('id', 'project-todos-container');
        projectContainer.append(projectTitleElement, projectTodosContainer);
        mainContainer.append(projectContainer);
    };
    DOMDisplayer.prototype.removeProjectContainer = function () {
        var mainContainer = document.getElementById('main-container');
        var projectContainer = document.getElementById('project-container');
        mainContainer.removeChild(projectContainer);
    };
    DOMDisplayer.prototype.displayCreateTodo = function () {
        var projectTodoContainer = document.getElementById('project-todos-container');
        var createTodoContainer = document.createElement('div');
        createTodoContainer.setAttribute('id', 'create-todo-container');
        var createTodoText = document.createElement('h2');
        createTodoText.textContent = '+ Create Todo';
        createTodoContainer.appendChild(createTodoText);
        projectTodoContainer.appendChild(createTodoContainer);
    };
    DOMDisplayer.prototype.displayExpandedTodo = function (todoIndex, title, description, notes, priority, dueDate) {
        var todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
        todoContainer.classList.add('expanded');
        var titleElement = document.createElement('h2');
        titleElement.textContent = title;
        titleElement.setAttribute('contenteditable', 'true');
        var descriptionElement = document.createElement('input');
        descriptionElement.type = 'text';
        descriptionElement.value = description;
        var notesHeader = document.createElement('h3');
        notesHeader.textContent = 'Notes';
        var notesElement = document.createElement('input');
        notesElement.type = 'text';
        notesElement.value = notes;
        var priorityContainer = document.createElement('div');
        var priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority:';
        priorityLabel.setAttribute('for', 'priority');
        var prioritySelection = document.createElement('select');
        prioritySelection.setAttribute('name', 'priority');
        prioritySelection.setAttribute('id', 'priority');
        var lowPriorityOption = document.createElement('option');
        lowPriorityOption.setAttribute('value', 'low');
        lowPriorityOption.textContent = 'low';
        if (priority === 'low') {
            lowPriorityOption.selected = true;
        }
        var medPriorityOption = document.createElement('option');
        medPriorityOption.setAttribute('value', 'medium');
        medPriorityOption.textContent = 'medium';
        if (priority === 'medium') {
            medPriorityOption.selected = true;
        }
        var highPriorityOption = document.createElement('option');
        highPriorityOption.setAttribute('value', 'high');
        highPriorityOption.textContent = 'high';
        if (priority === 'high') {
            highPriorityOption.selected = true;
        }
        var noPriorityOption = document.createElement('option');
        noPriorityOption.setAttribute('value', 'none');
        noPriorityOption.textContent = 'none';
        if (priority === 'none') {
            noPriorityOption.selected = true;
        }
        prioritySelection.append(noPriorityOption, lowPriorityOption, medPriorityOption, highPriorityOption);
        priorityContainer.append(priorityLabel, prioritySelection);
        var dueDateElement = document.createElement('input');
        dueDateElement.type = 'date';
        dueDateElement.value = dueDate;
        var dropDownElement = new Image();
        dropDownElement.src = _icons_chevron_circle_down_solid_svg__WEBPACK_IMPORTED_MODULE_2__;
        todoContainer.append(titleElement, descriptionElement, notesElement, dueDateElement, priorityContainer, dropDownElement);
        this.displayPriority(todoContainer, priority);
        var projectTodoContainer = document.getElementById('project-todos-container');
        var projectTodos = document.querySelectorAll('.todo-container');
        projectTodoContainer.insertBefore(todoContainer, projectTodos[todoIndex]);
        projectTodoContainer.removeChild(projectTodos[todoIndex]);
    };
    DOMDisplayer.prototype.addEventListenersToExpandedTodo = function (todoIndex, updateStoredTitle, updateStoredDesc, updateStoredNotes, updateStoredPriority, updateStoredDueDate, collapseTodo) {
        var projectTodos = document.querySelectorAll('.todo-container');
        var todoContainer = projectTodos[todoIndex];
        var titleElement = todoContainer.querySelector('h2');
        titleElement.addEventListener('input', function () { updateStoredTitle(titleElement.textContent); });
        var inputElements = todoContainer.querySelectorAll('input');
        var descriptionElement = inputElements[0];
        descriptionElement.addEventListener('input', function () { updateStoredDesc(descriptionElement.value); });
        var notesElement = inputElements[1];
        notesElement.addEventListener('input', function () { updateStoredNotes(notesElement.value); });
        var dueDateElement = inputElements[2];
        dueDateElement.addEventListener('input', function () { updateStoredDueDate(dueDateElement.value); });
        var priorityElement = todoContainer.querySelector('select');
        priorityElement.addEventListener('change', function () { updateStoredPriority(priorityElement.value); });
        var collapseElement = todoContainer.querySelector('img');
        collapseElement.addEventListener('click', collapseTodo);
    };
    DOMDisplayer.prototype.addEventListenerToCreateTodo = function (createTodo) {
        var createTodoElement = document.getElementById('create-todo-container');
        createTodoElement.addEventListener('click', function () {
            createTodo();
        });
    };
    return DOMDisplayer;
}());



/***/ }),

/***/ "./src/project.ts":
/*!************************!*\
  !*** ./src/project.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.ts");

var Project = /** @class */ (function () {
    function Project(title) {
        this.title = title;
        this.todos = [];
    }
    Project.prototype.addTodo = function (title, description, dueDate, priority, notes) {
        this.todos.push(new _todoItem__WEBPACK_IMPORTED_MODULE_0__.TodoItem(title, description, dueDate, priority, notes));
    };
    Project.prototype.changeTodoTitle = function (todoIndex, title) {
        this.todos[todoIndex].title = title;
    };
    Project.prototype.changeTodoDescription = function (todoIndex, description) {
        this.todos[todoIndex].description = description;
    };
    Project.prototype.changeTodoNote = function (todoIndex, notes) {
        this.todos[todoIndex].notes = notes;
    };
    Project.prototype.changeDate = function (todoIndex, dueDate) {
        this.todos[todoIndex].dueDate = dueDate;
    };
    Project.prototype.changePriority = function (todoIndex, priority) {
        this.todos[todoIndex].priority = priority;
    };
    Project.prototype.removeTodo = function (todo) {
        var todoIndex = this.todos.findIndex(function (element) { element === todo; });
        this.todos.splice(todoIndex, 1);
    };
    return Project;
}());



/***/ }),

/***/ "./src/todoController.ts":
/*!*******************************!*\
  !*** ./src/todoController.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoController: () => (/* binding */ TodoController)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.ts");
/* harmony import */ var _domdisplayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domdisplayer */ "./src/domdisplayer.ts");


var TodoController = /** @class */ (function () {
    function TodoController() {
        this.domDisplayer = new _domdisplayer__WEBPACK_IMPORTED_MODULE_1__.DOMDisplayer();
        this.projects = [];
    }
    TodoController.prototype.addProject = function (title) { this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(title)); };
    TodoController.prototype.addTodo = function (projectIndex) {
        var defaultTodoTitle = "Title";
        var defaultTodoDescription = "description";
        var defaultDate = "01/01/0000";
        var defaultPriority = "none";
        var defaultNotes = "...";
        this.projects[projectIndex].addTodo(defaultTodoTitle, defaultTodoDescription, defaultDate, defaultPriority, defaultNotes);
    };
    TodoController.prototype.changeProjectTitle = function (projectIndex, title) {
        this.projects[projectIndex].title = title;
    };
    TodoController.prototype.changeTodoTitle = function (projectIndex, todoIndex, title) {
        this.projects[projectIndex].changeTodoTitle(todoIndex, title);
    };
    TodoController.prototype.changeTodoDescription = function (projectIndex, todoIndex, description) {
        this.projects[projectIndex].changeTodoDescription(todoIndex, description);
    };
    TodoController.prototype.changeTodoNote = function (projectIndex, todoIndex, notes) {
        this.projects[projectIndex].changeTodoNote(todoIndex, notes);
    };
    TodoController.prototype.changeDate = function (projectIndex, todoIndex, dueDate) {
        this.projects[projectIndex].changeDate(todoIndex, dueDate);
    };
    TodoController.prototype.changePriority = function (projectIndex, todoIndex, priority) {
        this.projects[projectIndex].changePriority(todoIndex, priority);
    };
    TodoController.prototype.removeProject = function (index) { this.projects.splice(index, 1); };
    TodoController.prototype.removeTodo = function (projectIndex, todoIndex) {
        this.projects[projectIndex].todos.splice(todoIndex, 1);
    };
    TodoController.prototype.createTodo = function (projectIndex) {
        var _this = this;
        var defaultTodoTitle = "Title";
        var defaultTodoDescription = "description";
        var defaultDate = "01/01/0000";
        var defaultPriority = "none";
        var defaultNotes = "...";
        this.projects[projectIndex].addTodo(defaultTodoTitle, defaultTodoDescription, defaultDate, defaultPriority, defaultNotes);
        var todoIndex = this.projects[projectIndex].todos.length - 1;
        this.domDisplayer.displayTodoBeforeCreateDiv(defaultTodoTitle, defaultDate, defaultPriority);
        this.domDisplayer.addEventListenerToTodo(todoIndex, function () { return _this.expandTodo(projectIndex, todoIndex); });
    };
    TodoController.prototype.expandTodo = function (projectIndex, todoIndex) {
        var _this = this;
        var project = this.projects[projectIndex];
        var todo = project.todos[todoIndex];
        this.domDisplayer.displayExpandedTodo(todoIndex, todo.title, todo.description, todo.notes, todo.priority, todo.dueDate);
        this.domDisplayer.addEventListenersToExpandedTodo(todoIndex, function (title) { _this.changeTodoTitle(projectIndex, todoIndex, title); }, function (description) { _this.changeTodoDescription(projectIndex, todoIndex, description); }, function (notes) { _this.changeTodoNote(projectIndex, todoIndex, notes); }, function (priority) { _this.changePriority(projectIndex, todoIndex, priority); }, function (date) { _this.changeDate(projectIndex, todoIndex, date); }, function () { _this.collapseTodo(projectIndex, todoIndex); });
    };
    TodoController.prototype.collapseTodo = function (projectIndex, todoIndex) {
        var _this = this;
        var project = this.projects[projectIndex];
        var todo = project.todos[todoIndex];
        this.domDisplayer.displayTodoAtIndex(todoIndex, todo.title, todo.dueDate, todo.priority);
        this.domDisplayer.addEventListenerToTodo(todoIndex, function () { return _this.expandTodo(projectIndex, todoIndex); });
        // removes the expanded todo
        this.domDisplayer.removeTodoAtIndex(todoIndex + 1);
    };
    TodoController.prototype.loadDefaultPage = function () {
        var _this = this;
        this.addProject('Today');
        this.domDisplayer.displayLayout();
        this.domDisplayer.addEventListenerToCreateTodo(function () {
            _this.createTodo(0);
        });
    };
    return TodoController;
}());



/***/ }),

/***/ "./src/todoItem.ts":
/*!*************************!*\
  !*** ./src/todoItem.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoItem: () => (/* binding */ TodoItem)
/* harmony export */ });
var TodoItem = /** @class */ (function () {
    function TodoItem(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
    return TodoItem;
}());



/***/ }),

/***/ "./src/icons/bars-solid.svg":
/*!**********************************!*\
  !*** ./src/icons/bars-solid.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e6ee87028670d524f01.svg";

/***/ }),

/***/ "./src/icons/chevron-circle-down-solid.svg":
/*!*************************************************!*\
  !*** ./src/icons/chevron-circle-down-solid.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a21f0b8c9de04661a995.svg";

/***/ }),

/***/ "./src/icons/search-solid.svg":
/*!************************************!*\
  !*** ./src/icons/search-solid.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b640bcb34251e930bc6.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoController */ "./src/todoController.ts");

var todoController = new _todoController__WEBPACK_IMPORTED_MODULE_0__.TodoController();
todoController.loadDefaultPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7OztBQ0FrRDtBQUVsRCxJQUFJLGNBQWMsR0FBRyxJQUFJLDJEQUFjLEVBQUUsQ0FBQztBQUMxQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21kaXNwbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvSXRlbS50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtLXByaW1hcnktY29sb3I6ICMxODE5MUE7XG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMzYTNiM2M7XG4gICAgLS1zZWNvbmRhcnktY29sb3Itd2l0aC1vcGFjOiByZ2JhKDU4LCA1OSwgNjAsIDAuNSk7XG4gICAgLS10ZXJ0aWFyeS1jb2xvcjogIzI0MjUyNjtcbiAgICAtLXByaW1hcnktdGV4dDogI0U0RTZFQjtcbiAgICAtLXNlY29uZGFyeS10ZXh0OiAjQjBCM0I4O1xuICAgIC0tcHJpbWFyeS1zdmc6IGludmVydCgxMDAlKSBzZXBpYSg3NSUpIHNhdHVyYXRlKDYxNiUpIGh1ZS1yb3RhdGUoMTc4ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDg0JSk7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4jbWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI25hdi1iYXItY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcbn1cblxuI25hdi1iYXItY29udGFpbmVyID4gaW1nIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZmlsdGVyOiB2YXIoLS1wcmltYXJ5LXN2Zyk7XG59XG5cbiNuYXYtYmFyLWNvbnRhaW5lcj5pbWc6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tbGVmdDogbWF4KDQwcHgsIDIwdncpO1xufVxuXG4jbmF2LWJhci1jb250YWluZXI+aW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBtYXgoNDBweCwgMTV2dyk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQpO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4jc2lkZS1wYW5lbC1jb250YWluZXIge1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XG4gICAgcGFkZGluZzogMHB4IDE2cHg7XG59XG5cbiNwcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XG59XG5cbiNwcm9qZWN0LXRvZG9zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZ2FwOiA1MHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAyMDBweCk7XG59XG5cbi50b2RvLWNvbnRhaW5lciwgI2NyZWF0ZS10b2RvLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLnRvZG8tY29udGFpbmVyPmltZyB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZpbHRlcjogdmFyKC0tcHJpbWFyeS1zdmcpO1xuICAgIGFsaWduLXNlbGY6IGxhc3QgYmFzZWxpbmU7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDBweDtcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNGZyIDFmciAxZnI7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b2RvLWNvbnRhaW5lcj5oMjpmaXJzdC1jaGlsZCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi50b2RvLWNvbnRhaW5lcj5wIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbiNjcmVhdGUtdG9kby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGtEQUFrRDtJQUNsRCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix1R0FBdUc7QUFDM0c7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsdUNBQXVDO0lBQ3ZDLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMTgxOTFBO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzNhM2IzYztcXG4gICAgLS1zZWNvbmRhcnktY29sb3Itd2l0aC1vcGFjOiByZ2JhKDU4LCA1OSwgNjAsIDAuNSk7XFxuICAgIC0tdGVydGlhcnktY29sb3I6ICMyNDI1MjY7XFxuICAgIC0tcHJpbWFyeS10ZXh0OiAjRTRFNkVCO1xcbiAgICAtLXNlY29uZGFyeS10ZXh0OiAjQjBCM0I4O1xcbiAgICAtLXByaW1hcnktc3ZnOiBpbnZlcnQoMTAwJSkgc2VwaWEoNzUlKSBzYXR1cmF0ZSg2MTYlKSBodWUtcm90YXRlKDE3OGRlZykgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCg4NCUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNuYXYtYmFyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XFxufVxcblxcbiNuYXYtYmFyLWNvbnRhaW5lciA+IGltZyB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGZpbHRlcjogdmFyKC0tcHJpbWFyeS1zdmcpO1xcbn1cXG5cXG4jbmF2LWJhci1jb250YWluZXI+aW1nOm50aC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBtYXgoNDBweCwgMjB2dyk7XFxufVxcblxcbiNuYXYtYmFyLWNvbnRhaW5lcj5pbnB1dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIG1hcmdpbi1yaWdodDogbWF4KDQwcHgsIDE1dncpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0KTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc2lkZS1wYW5lbC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XFxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcXG59XFxuXFxuI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIsICNjcmVhdGUtdG9kby1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lcj5pbWcge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBmaWx0ZXI6IHZhcigtLXByaW1hcnktc3ZnKTtcXG4gICAgYWxpZ24tc2VsZjogbGFzdCBiYXNlbGluZTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbjogMHB4IDEwcHggMTBweCAwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNGZyIDFmciAxZnI7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lcj5oMjpmaXJzdC1jaGlsZCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lcj5wIHtcXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbiNjcmVhdGUtdG9kby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBiYXJzSW1hZ2UgZnJvbSAnLi9pY29ucy9iYXJzLXNvbGlkLnN2Zyc7XG5pbXBvcnQgbWFnbmlmeWluZ0dsYXNzSW1hZ2UgZnJvbSAnLi9pY29ucy9zZWFyY2gtc29saWQuc3ZnJztcbmltcG9ydCBkcm9wRG93bkltYWdlIGZyb20gJy4vaWNvbnMvY2hldnJvbi1jaXJjbGUtZG93bi1zb2xpZC5zdmcnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBjbGFzcyBET01EaXNwbGF5ZXIge1xuICAgIFxuICAgIGRpc3BsYXlMYXlvdXQoKSB7XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4tY29udGFpbmVyJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuZGlzcGxheU5hdmJhcigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlTaWRlUGFuZWwoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5UHJvamVjdFRpdGxlKCdUb2RheScpO1xuICAgICAgICB0aGlzLmRpc3BsYXlQcm9qZWN0Q29udGFpbmVyKCdUb2RheScpO1xuICAgICAgICB0aGlzLmRpc3BsYXlDcmVhdGVUb2RvKCk7XG4gICAgfVxuXG4gICAgZGlzcGxheU5hdmJhcigpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBuYXZCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2QmFyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWJhci1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBiYXJzID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJhcnMuc3JjID0gYmFyc0ltYWdlO1xuXG4gICAgICAgIGNvbnN0IG1hZ25pZnlpbmdHbGFzcyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBtYWduaWZ5aW5nR2xhc3Muc3JjID0gbWFnbmlmeWluZ0dsYXNzSW1hZ2U7XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc2VhcmNoQmFyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHNlYXJjaEJhci5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3NlYXJjaCcpO1xuXG4gICAgICAgIGNvbnN0IHNpdGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgc2l0ZU5hbWUudGV4dENvbnRlbnQgPSBgTGV0J3MgVG9kbyBUaGlzYDtcblxuICAgICAgICBuYXZCYXJDb250YWluZXIuYXBwZW5kKGJhcnMsIG1hZ25pZnlpbmdHbGFzcywgc2VhcmNoQmFyLCBzaXRlTmFtZSk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobmF2QmFyQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5U2lkZVBhbmVsKCkge1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHNpZGVQYW5lbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlUGFuZWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlLXBhbmVsLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lclRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCc7XG5cbiAgICAgICAgc2lkZVBhbmVsQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0c0NvbnRhaW5lclRpdGxlLCBwcm9qZWN0c0NvbnRhaW5lciwgY3JlYXRlUHJvamVjdEJ1dHRvbik7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZVBhbmVsQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5UHJvamVjdFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3RUaXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZGlzcGxheVRvZG8oZWxlbWVudEFmdGVyOiBFbGVtZW50LCB0aXRsZTogc3RyaW5nLCBkdWVEYXRlOiBzdHJpbmcsIHByaW9yaXR5OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGR1ZURhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZHVlRGF0ZTtcblxuICAgICAgICBjb25zdCBkcm9wRG93bkVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZHJvcERvd25FbGVtZW50LnNyYyA9IGRyb3BEb3duSW1hZ2U7XG5cbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodGl0bGVFbGVtZW50LCBkdWVEYXRlRWxlbWVudCwgZHJvcERvd25FbGVtZW50KTtcbiAgICAgICAgdGhpcy5kaXNwbGF5UHJpb3JpdHkodG9kb0NvbnRhaW5lciwgcHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kb3MtY29udGFpbmVyJyk7XG4gICAgICAgIHByb2plY3RUb2RvQ29udGFpbmVyLmluc2VydEJlZm9yZSh0b2RvQ29udGFpbmVyLCBlbGVtZW50QWZ0ZXIpO1xuICAgIH1cblxuICAgIGRpc3BsYXlUb2RvQXRJbmRleCh0b2RvSW5kZXg6IG51bWJlciwgdGl0bGU6IHN0cmluZywgZHVlRGF0ZTogc3RyaW5nLCBwcmlvcml0eTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IHByb2plY3RUb2Rvc1t0b2RvSW5kZXhdO1xuICAgICAgICBpZiAodG9kb0VsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRvZG8tY29udGFpbmVyJyk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUb2RvKGNyZWF0ZUVsZW1lbnQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUb2RvKHRvZG9FbGVtZW50LCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheVRvZG9CZWZvcmVDcmVhdGVEaXYodGl0bGU6IHN0cmluZywgZHVlRGF0ZTogc3RyaW5nLCBwcmlvcml0eTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRvZG8tY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuZGlzcGxheVRvZG8oY3JlYXRlRWxlbWVudCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2RvRWxlbWVudCh0b2RvRWxlbWVudDogRWxlbWVudCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2Rvcy1jb250YWluZXInKS5yZW1vdmVDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9kb0F0SW5kZXgodG9kb0luZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gcHJvamVjdFRvZG9zW3RvZG9JbmRleF07XG4gICAgICAgIGlmICh0b2RvRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVUb2RvRWxlbWVudCh0b2RvRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVyVG9Ub2RvKGluZGV4OiBudW1iZXIsIGV4cGFuZFRvZG86ICgpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBwcm9qZWN0VG9kb3NbaW5kZXhdO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kVG9kbyk7XG4gICAgfVxuXG4gICAgZGlzcGxheVByaW9yaXR5KHRvZG9Db250YWluZXI6IEhUTUxEaXZFbGVtZW50LCBwcmlvcml0eTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBiYWNrZ3JvdW5kY29sb3IgPSAnYmxhY2snO1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kY29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yID0gJ3llbGxvdyc7XG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yID0gJ3JlZCc7XG4gICAgICAgIH1cbiAgICAgICAgdG9kb0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kY29sb3I7XG4gICAgfVxuXG4gICAgZGlzcGxheVByb2plY3RDb250YWluZXIocHJvamVjdFRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHByb2plY3RUaXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RUb2Rvc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtdG9kb3MtY29udGFpbmVyJyk7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlRWxlbWVudCwgcHJvamVjdFRvZG9zQ29udGFpbmVyKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQocHJvamVjdENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdENvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZGlzcGxheUNyZWF0ZVRvZG8oKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kb3MtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY3JlYXRlVG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NyZWF0ZS10b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY3JlYXRlVG9kb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjcmVhdGVUb2RvVGV4dC50ZXh0Q29udGVudCA9ICcrIENyZWF0ZSBUb2RvJztcblxuICAgICAgICBjcmVhdGVUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9UZXh0KTtcbiAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZGlzcGxheUV4cGFuZGVkVG9kbyh0b2RvSW5kZXg6IG51bWJlciwgdGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgbm90ZXM6IHN0cmluZywgcHJpb3JpdHk6IHN0cmluZywgZHVlRGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHRpdGxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IG5vdGVzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgbm90ZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuXG4gICAgICAgIGNvbnN0IG5vdGVzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5vdGVzRWxlbWVudC50eXBlID0gJ3RleHQnO1xuICAgICAgICBub3Rlc0VsZW1lbnQudmFsdWUgPSBub3RlcztcblxuICAgICAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3Rpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcblxuICAgICAgICBjb25zdCBsb3dQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsb3dQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgICBsb3dQcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9ICdsb3cnO1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09ICdsb3cnKSB7IGxvd1ByaW9yaXR5T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTsgfVxuXG4gICAgICAgIGNvbnN0IG1lZFByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG1lZFByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gICAgICAgIG1lZFByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gJ21lZGl1bScpIHsgbWVkUHJpb3JpdHlPcHRpb24uc2VsZWN0ZWQgPSB0cnVlOyB9XG5cbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGhpZ2hQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgICAgICAgaGlnaFByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gJ2hpZ2gnO1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09ICdoaWdoJykgeyBoaWdoUHJpb3JpdHlPcHRpb24uc2VsZWN0ZWQgPSB0cnVlOyB9XG5cbiAgICAgICAgY29uc3Qgbm9Qcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBub1ByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbm9uZScpO1xuICAgICAgICBub1ByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gJ25vbmUnO1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09ICdub25lJykgeyBub1ByaW9yaXR5T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTsgfVxuXG4gICAgICAgIHByaW9yaXR5U2VsZWN0aW9uLmFwcGVuZChub1ByaW9yaXR5T3B0aW9uLCBsb3dQcmlvcml0eU9wdGlvbiwgbWVkUHJpb3JpdHlPcHRpb24sIGhpZ2hQcmlvcml0eU9wdGlvbik7XG4gICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdGlvbik7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkdWVEYXRlRWxlbWVudC50eXBlID0gJ2RhdGUnO1xuICAgICAgICBkdWVEYXRlRWxlbWVudC52YWx1ZSA9IGR1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgZHJvcERvd25FbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGRyb3BEb3duRWxlbWVudC5zcmMgPSBkcm9wRG93bkltYWdlO1xuXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRpdGxlRWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50LCBub3Rlc0VsZW1lbnQsIGR1ZURhdGVFbGVtZW50LCBwcmlvcml0eUNvbnRhaW5lciwgZHJvcERvd25FbGVtZW50KTtcbiAgICAgICAgdGhpcy5kaXNwbGF5UHJpb3JpdHkodG9kb0NvbnRhaW5lciwgcHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kb3MtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodG9kb0NvbnRhaW5lciwgcHJvamVjdFRvZG9zW3RvZG9JbmRleF0pO1xuICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0VG9kb3NbdG9kb0luZGV4XSk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnNUb0V4cGFuZGVkVG9kbyh0b2RvSW5kZXg6IG51bWJlciwgdXBkYXRlU3RvcmVkVGl0bGU6ICh0aXRsZTogc3RyaW5nKSA9PiB2b2lkLCB1cGRhdGVTdG9yZWREZXNjOiAoZGVzY3JpcHRpb246IHN0cmluZykgPT4gdm9pZCwgdXBkYXRlU3RvcmVkTm90ZXM6IChub3Rlczogc3RyaW5nKSA9PiB2b2lkLCB1cGRhdGVTdG9yZWRQcmlvcml0eTogKHByaW9yaXR5OiBzdHJpbmcpID0+IHZvaWQsIHVwZGF0ZVN0b3JlZER1ZURhdGU6IChkdWVEYXRlOiBzdHJpbmcpID0+IHZvaWQsIGNvbGxhcHNlVG9kbzogKCkgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IHByb2plY3RUb2Rvc1t0b2RvSW5kZXhdO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvcignaDInKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4geyB1cGRhdGVTdG9yZWRUaXRsZSh0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQpIH0pO1xuXG4gICAgICAgIGNvbnN0IGlucHV0RWxlbWVudHMgPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGlucHV0RWxlbWVudHNbMF07XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHsgdXBkYXRlU3RvcmVkRGVzYyhkZXNjcmlwdGlvbkVsZW1lbnQudmFsdWUpIH0pO1xuXG4gICAgICAgIGNvbnN0IG5vdGVzRWxlbWVudCA9IGlucHV0RWxlbWVudHNbMV07XG4gICAgICAgIG5vdGVzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHsgdXBkYXRlU3RvcmVkTm90ZXMobm90ZXNFbGVtZW50LnZhbHVlKSB9KTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGlucHV0RWxlbWVudHNbMl07XG4gICAgICAgIGR1ZURhdGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4geyB1cGRhdGVTdG9yZWREdWVEYXRlKGR1ZURhdGVFbGVtZW50LnZhbHVlKSB9KTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4geyB1cGRhdGVTdG9yZWRQcmlvcml0eShwcmlvcml0eUVsZW1lbnQudmFsdWUpIH0pO1xuXG4gICAgICAgIGNvbnN0IGNvbGxhcHNlRWxlbWVudCA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbGxhcHNlVG9kbyk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvQ3JlYXRlVG9kbyhjcmVhdGVUb2RvOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVRvZG9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICBjcmVhdGVUb2RvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG8oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgXG5cbn0iLCJpbXBvcnQgeyBUb2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHRvZG9zOiBBcnJheTxUb2RvSXRlbT47XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRvZG8odGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgZHVlRGF0ZTogc3RyaW5nLCBwcmlvcml0eTogc3RyaW5nLCBub3Rlczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaChuZXcgVG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VUb2RvVGl0bGUodG9kb0luZGV4OiBudW1iZXIsIHRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2Rvc1t0b2RvSW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgY2hhbmdlVG9kb0Rlc2NyaXB0aW9uKHRvZG9JbmRleDogbnVtYmVyLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9kb3NbdG9kb0luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNoYW5nZVRvZG9Ob3RlKHRvZG9JbmRleDogbnVtYmVyLCBub3Rlczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9kb3NbdG9kb0luZGV4XS5ub3RlcyA9IG5vdGVzO1xuICAgIH1cblxuICAgIGNoYW5nZURhdGUodG9kb0luZGV4OiBudW1iZXIsIGR1ZURhdGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRvZG9zW3RvZG9JbmRleF0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgY2hhbmdlUHJpb3JpdHkodG9kb0luZGV4OiBudW1iZXIsIHByaW9yaXR5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2Rvc1t0b2RvSW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9kbyh0b2RvOiBUb2RvSXRlbSkge1xuICAgICAgICBsZXQgdG9kb0luZGV4OiBudW1iZXIgPSB0aGlzLnRvZG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4geyBlbGVtZW50ID09PSB0b2RvfSk7XG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgfVxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBET01EaXNwbGF5ZXIgfSBmcm9tIFwiLi9kb21kaXNwbGF5ZXJcIjtcbmltcG9ydCB7IFRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1cIjtcblxuZXhwb3J0IGNsYXNzIFRvZG9Db250cm9sbGVyIHtcbiAgICBwcm9qZWN0czogQXJyYXk8UHJvamVjdD47XG4gICAgZG9tRGlzcGxheWVyOiBET01EaXNwbGF5ZXIgPSBuZXcgRE9NRGlzcGxheWVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgdGhpcy5wcm9qZWN0cyA9IFtdIH1cblxuICAgIGFkZFByb2plY3QodGl0bGU6IHN0cmluZykgeyB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QodGl0bGUpKX1cblxuICAgIGFkZFRvZG8ocHJvamVjdEluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGRlZmF1bHRUb2RvVGl0bGU6IHN0cmluZyA9IFwiVGl0bGVcIjtcbiAgICAgICAgbGV0IGRlZmF1bHRUb2RvRGVzY3JpcHRpb246IHN0cmluZyA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICAgICAgbGV0IGRlZmF1bHREYXRlOiBzdHJpbmcgPSBcIjAxLzAxLzAwMDBcIjtcbiAgICAgICAgbGV0IGRlZmF1bHRQcmlvcml0eTogc3RyaW5nID0gXCJub25lXCI7XG4gICAgICAgIGxldCBkZWZhdWx0Tm90ZXM6IHN0cmluZyA9IFwiLi4uXCI7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS5hZGRUb2RvKGRlZmF1bHRUb2RvVGl0bGUsIGRlZmF1bHRUb2RvRGVzY3JpcHRpb24sIGRlZmF1bHREYXRlLCBkZWZhdWx0UHJpb3JpdHksIGRlZmF1bHROb3Rlcyk7XG4gICAgfVxuXG4gICAgY2hhbmdlUHJvamVjdFRpdGxlKHByb2plY3RJbmRleDogbnVtYmVyLCB0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGNoYW5nZVRvZG9UaXRsZShwcm9qZWN0SW5kZXg6IG51bWJlciwgdG9kb0luZGV4OiBudW1iZXIsIHRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLmNoYW5nZVRvZG9UaXRsZSh0b2RvSW5kZXgsIHRpdGxlKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VUb2RvRGVzY3JpcHRpb24ocHJvamVjdEluZGV4OiBudW1iZXIsIHRvZG9JbmRleDogbnVtYmVyLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS5jaGFuZ2VUb2RvRGVzY3JpcHRpb24odG9kb0luZGV4LCBkZXNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgY2hhbmdlVG9kb05vdGUocHJvamVjdEluZGV4OiBudW1iZXIsIHRvZG9JbmRleDogbnVtYmVyLCBub3Rlczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS5jaGFuZ2VUb2RvTm90ZSh0b2RvSW5kZXgsIG5vdGVzKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VEYXRlKHByb2plY3RJbmRleDogbnVtYmVyLCB0b2RvSW5kZXg6IG51bWJlciwgZHVlRGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS5jaGFuZ2VEYXRlKHRvZG9JbmRleCwgZHVlRGF0ZSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUHJpb3JpdHkocHJvamVjdEluZGV4OiBudW1iZXIsIHRvZG9JbmRleDogbnVtYmVyLCBwcmlvcml0eTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS5jaGFuZ2VQcmlvcml0eSh0b2RvSW5kZXgsIHByaW9yaXR5KTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KGluZGV4OiBudW1iZXIpIHsgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpIH1cblxuICAgIHJlbW92ZVRvZG8ocHJvamVjdEluZGV4OiBudW1iZXIsIHRvZG9JbmRleDogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgfVxuXG4gICAgY3JlYXRlVG9kbyhwcm9qZWN0SW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgZGVmYXVsdFRvZG9UaXRsZTogc3RyaW5nID0gXCJUaXRsZVwiO1xuICAgICAgICBsZXQgZGVmYXVsdFRvZG9EZXNjcmlwdGlvbjogc3RyaW5nID0gXCJkZXNjcmlwdGlvblwiO1xuICAgICAgICBsZXQgZGVmYXVsdERhdGU6IHN0cmluZyA9IFwiMDEvMDEvMDAwMFwiO1xuICAgICAgICBsZXQgZGVmYXVsdFByaW9yaXR5OiBzdHJpbmcgPSBcIm5vbmVcIjtcbiAgICAgICAgbGV0IGRlZmF1bHROb3Rlczogc3RyaW5nID0gXCIuLi5cIjtcbiAgICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLmFkZFRvZG8oZGVmYXVsdFRvZG9UaXRsZSwgZGVmYXVsdFRvZG9EZXNjcmlwdGlvbiwgZGVmYXVsdERhdGUsIGRlZmF1bHRQcmlvcml0eSwgZGVmYXVsdE5vdGVzKTtcbiAgICAgICAgbGV0IHRvZG9JbmRleCA9IHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvcy5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLmRvbURpc3BsYXllci5kaXNwbGF5VG9kb0JlZm9yZUNyZWF0ZURpdihkZWZhdWx0VG9kb1RpdGxlLCBkZWZhdWx0RGF0ZSwgZGVmYXVsdFByaW9yaXR5KTtcbiAgICAgICAgdGhpcy5kb21EaXNwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lclRvVG9kbyh0b2RvSW5kZXgsICgpID0+IHRoaXMuZXhwYW5kVG9kbyhwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCkpO1xuICAgIH1cblxuICAgIGV4cGFuZFRvZG8ocHJvamVjdEluZGV4OiBudW1iZXIsIHRvZG9JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF07XG4gICAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnRvZG9zW3RvZG9JbmRleF07XG4gICAgICAgIHRoaXMuZG9tRGlzcGxheWVyLmRpc3BsYXlFeHBhbmRlZFRvZG8odG9kb0luZGV4LCB0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLm5vdGVzLCB0b2RvLnByaW9yaXR5LCB0b2RvLmR1ZURhdGUpO1xuICAgICAgICB0aGlzLmRvbURpc3BsYXllci5hZGRFdmVudExpc3RlbmVyc1RvRXhwYW5kZWRUb2RvKHRvZG9JbmRleCwgXG4gICAgICAgICAgICAodGl0bGU6IHN0cmluZykgPT4ge3RoaXMuY2hhbmdlVG9kb1RpdGxlKHByb2plY3RJbmRleCwgdG9kb0luZGV4LCB0aXRsZSl9LFxuICAgICAgICAgICAgKGRlc2NyaXB0aW9uOiBzdHJpbmcpID0+IHt0aGlzLmNoYW5nZVRvZG9EZXNjcmlwdGlvbihwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCwgZGVzY3JpcHRpb24pfSxcbiAgICAgICAgICAgIChub3Rlczogc3RyaW5nKSA9PiB7dGhpcy5jaGFuZ2VUb2RvTm90ZShwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCwgbm90ZXMpfSxcbiAgICAgICAgICAgIChwcmlvcml0eTogc3RyaW5nKSA9PiB7dGhpcy5jaGFuZ2VQcmlvcml0eShwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCwgcHJpb3JpdHkpfSxcbiAgICAgICAgICAgIChkYXRlOiBzdHJpbmcpID0+IHt0aGlzLmNoYW5nZURhdGUocHJvamVjdEluZGV4LCB0b2RvSW5kZXgsIGRhdGUpfSxcbiAgICAgICAgICAgICgpID0+IHt0aGlzLmNvbGxhcHNlVG9kbyhwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCl9KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZVRvZG8ocHJvamVjdEluZGV4OiBudW1iZXIsIHRvZG9JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF07XG4gICAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnRvZG9zW3RvZG9JbmRleF07XG4gICAgICAgIHRoaXMuZG9tRGlzcGxheWVyLmRpc3BsYXlUb2RvQXRJbmRleCh0b2RvSW5kZXgsIHRvZG8udGl0bGUsIHRvZG8uZHVlRGF0ZSwgdG9kby5wcmlvcml0eSk7XG4gICAgICAgIHRoaXMuZG9tRGlzcGxheWVyLmFkZEV2ZW50TGlzdGVuZXJUb1RvZG8odG9kb0luZGV4LCAoKSA9PiB0aGlzLmV4cGFuZFRvZG8ocHJvamVjdEluZGV4LCB0b2RvSW5kZXgpKTtcbiAgICAgICAgLy8gcmVtb3ZlcyB0aGUgZXhwYW5kZWQgdG9kb1xuICAgICAgICB0aGlzLmRvbURpc3BsYXllci5yZW1vdmVUb2RvQXRJbmRleCh0b2RvSW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICBsb2FkRGVmYXVsdFBhZ2UoKSB7XG4gICAgICAgIHRoaXMuYWRkUHJvamVjdCgnVG9kYXknKTtcbiAgICAgICAgdGhpcy5kb21EaXNwbGF5ZXIuZGlzcGxheUxheW91dCgpO1xuICAgICAgICB0aGlzLmRvbURpc3BsYXllci5hZGRFdmVudExpc3RlbmVyVG9DcmVhdGVUb2RvKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kbygwKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBUb2RvSXRlbSB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGR1ZURhdGU6IHN0cmluZztcbiAgICBwcmlvcml0eTogc3RyaW5nO1xuICAgIG5vdGVzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBkdWVEYXRlOiBzdHJpbmcsIHByaW9yaXR5OiBzdHJpbmcsIG5vdGVzOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFRvZG9Db250cm9sbGVyIH0gZnJvbSBcIi4vdG9kb0NvbnRyb2xsZXJcIjtcblxubGV0IHRvZG9Db250cm9sbGVyID0gbmV3IFRvZG9Db250cm9sbGVyKCk7XG50b2RvQ29udHJvbGxlci5sb2FkRGVmYXVsdFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
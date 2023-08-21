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
    DOMDisplayer.prototype.displayTodo = function (title, dueDate, priority) {
        var todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
        var titleElement = document.createElement('h2');
        titleElement.textContent = title;
        var dueDateElement = document.createElement('p');
        dueDateElement.textContent = dueDate;
        var dropDownElement = new Image();
        dropDownElement.src = _icons_chevron_circle_down_solid_svg__WEBPACK_IMPORTED_MODULE_2__;
        todoContainer.append(titleElement, dueDateElement, dropDownElement);
        this.displayPriority(todoContainer, priority);
        var projectTodoContainer = document.getElementById('project-todos-container');
        var createTodoContainer = document.getElementById('create-todo-container');
        projectTodoContainer.insertBefore(todoContainer, createTodoContainer);
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
    DOMDisplayer.prototype.removeTodo = function (todoIndex) {
        var projectContainer = document.getElementById('project-container');
        var todoContainers = document.querySelectorAll('todo-container');
        projectContainer.removeChild(todoContainers[todoIndex]);
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
        var projectTodos = document.querySelectorAll('todo-container');
        projectTodoContainer.insertBefore(todoContainer, projectTodos[todoIndex]);
        projectTodoContainer.removeChild(projectTodos[todoIndex + 1]);
    };
    DOMDisplayer.prototype.addEventListenersToExpandedTodo = function (todoIndex, updateStoredTitle, updateStoredDesc, updateStoredNotes, updateStoredPriority, updateStoredDueDate) {
        var projectTodos = document.querySelectorAll('todo-container');
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
    };
    DOMDisplayer.prototype.addEventListenerToCreateTodo = function (createStoredTodo) {
        var _this = this;
        var createTodoElement = document.getElementById('create-todo-container');
        createTodoElement.addEventListener('click', function () {
            var title = 'default';
            var dueDate = '11/11/2011';
            var priority = 'none';
            createStoredTodo(title, '...', '...', dueDate, priority);
            _this.displayTodo(title, dueDate, priority);
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
    TodoController.prototype.loadDefaultPage = function () {
        var _this = this;
        this.addProject('Today');
        this.domDisplayer.displayLayout();
        this.domDisplayer.addEventListenerToCreateTodo(function (title, description, notes, dueDate, priority) {
            _this.projects[0].addTodo(title, description, dueDate, priority, notes);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7QUNBa0Q7QUFFbEQsSUFBSSxjQUFjLEdBQUcsSUFBSSwyREFBYyxFQUFFLENBQUM7QUFDMUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZG9tZGlzcGxheWVyLnRzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0l0ZW0udHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMTgxOTFBO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjM2EzYjNjO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yLXdpdGgtb3BhYzogcmdiYSg1OCwgNTksIDYwLCAwLjUpO1xuICAgIC0tdGVydGlhcnktY29sb3I6ICMyNDI1MjY7XG4gICAgLS1wcmltYXJ5LXRleHQ6ICNFNEU2RUI7XG4gICAgLS1zZWNvbmRhcnktdGV4dDogI0IwQjNCODtcbiAgICAtLXByaW1hcnktc3ZnOiBpbnZlcnQoMTAwJSkgc2VwaWEoNzUlKSBzYXR1cmF0ZSg2MTYlKSBodWUtcm90YXRlKDE3OGRlZykgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCg4NCUpO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuI21haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbiNuYXYtYmFyLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XG59XG5cbiNuYXYtYmFyLWNvbnRhaW5lciA+IGltZyB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZpbHRlcjogdmFyKC0tcHJpbWFyeS1zdmcpO1xufVxuXG4jbmF2LWJhci1jb250YWluZXI+aW1nOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IG1heCg0MHB4LCAyMHZ3KTtcbn1cblxuI25hdi1iYXItY29udGFpbmVyPmlucHV0IHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogbWF4KDQwcHgsIDE1dncpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0KTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuI3NpZGUtcGFuZWwtY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xufVxuXG4jcHJvamVjdC1jb250YWluZXIge1xuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xufVxuXG4jcHJvamVjdC10b2Rvcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGdhcDogNTBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xufVxuXG4udG9kby1jb250YWluZXIsICNjcmVhdGUtdG9kby1jb250YWluZXIge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi50b2RvLWNvbnRhaW5lcj5pbWcge1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBmaWx0ZXI6IHZhcigtLXByaW1hcnktc3ZnKTtcbiAgICBhbGlnbi1zZWxmOiBsYXN0IGJhc2VsaW5lO1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIG1hcmdpbjogMHB4IDEwcHggMTBweCAwcHg7XG59XG5cbi50b2RvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRmciAxZnIgMWZyO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udG9kby1jb250YWluZXI+aDI6Zmlyc3QtY2hpbGQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4udG9kby1jb250YWluZXI+cCB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4jY3JlYXRlLXRvZG8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixrREFBa0Q7SUFDbEQseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsdUdBQXVHO0FBQzNHOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHVDQUF1QztJQUN2QywwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzE4MTkxQTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMzYTNiM2M7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yLXdpdGgtb3BhYzogcmdiYSg1OCwgNTksIDYwLCAwLjUpO1xcbiAgICAtLXRlcnRpYXJ5LWNvbG9yOiAjMjQyNTI2O1xcbiAgICAtLXByaW1hcnktdGV4dDogI0U0RTZFQjtcXG4gICAgLS1zZWNvbmRhcnktdGV4dDogI0IwQjNCODtcXG4gICAgLS1wcmltYXJ5LXN2ZzogaW52ZXJ0KDEwMCUpIHNlcGlhKDc1JSkgc2F0dXJhdGUoNjE2JSkgaHVlLXJvdGF0ZSgxNzhkZWcpIGJyaWdodG5lc3MoMTAxJSkgY29udHJhc3QoODQlKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbmF2LWJhci1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xcbn1cXG5cXG4jbmF2LWJhci1jb250YWluZXIgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBmaWx0ZXI6IHZhcigtLXByaW1hcnktc3ZnKTtcXG59XFxuXFxuI25hdi1iYXItY29udGFpbmVyPmltZzpudGgtY2hpbGQoMikge1xcbiAgICBtYXJnaW4tbGVmdDogbWF4KDQwcHgsIDIwdncpO1xcbn1cXG5cXG4jbmF2LWJhci1jb250YWluZXI+aW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IG1heCg0MHB4LCAxNXZ3KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dCk7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3NpZGUtcGFuZWwtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XFxufVxcblxcbiNwcm9qZWN0LXRvZG9zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDIwMHB4KTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyLCAjY3JlYXRlLXRvZG8tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXI+aW1nIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZmlsdGVyOiB2YXIoLS1wcmltYXJ5LXN2Zyk7XFxuICAgIGFsaWduLXNlbGY6IGxhc3QgYmFzZWxpbmU7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBtYXJnaW46IDBweCAxMHB4IDEwcHggMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRmciAxZnIgMWZyO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1jb250YWluZXI+aDI6Zmlyc3QtY2hpbGQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXI+cCB7XFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4jY3JlYXRlLXRvZG8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYmFyc0ltYWdlIGZyb20gJy4vaWNvbnMvYmFycy1zb2xpZC5zdmcnO1xuaW1wb3J0IG1hZ25pZnlpbmdHbGFzc0ltYWdlIGZyb20gJy4vaWNvbnMvc2VhcmNoLXNvbGlkLnN2Zyc7XG5pbXBvcnQgZHJvcERvd25JbWFnZSBmcm9tICcuL2ljb25zL2NoZXZyb24tY2lyY2xlLWRvd24tc29saWQuc3ZnJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgY2xhc3MgRE9NRGlzcGxheWVyIHtcbiAgICBcbiAgICBkaXNwbGF5TGF5b3V0KCkge1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLWNvbnRhaW5lcicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuICAgICAgICB0aGlzLmRpc3BsYXlOYXZiYXIoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2lkZVBhbmVsKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVByb2plY3RUaXRsZSgnVG9kYXknKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5UHJvamVjdENvbnRhaW5lcignVG9kYXknKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5Q3JlYXRlVG9kbygpO1xuICAgIH1cblxuICAgIGRpc3BsYXlOYXZiYXIoKSB7XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgbmF2QmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdkJhckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1iYXItY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgYmFycyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYXJzLnNyYyA9IGJhcnNJbWFnZTtcblxuICAgICAgICBjb25zdCBtYWduaWZ5aW5nR2xhc3MgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbWFnbmlmeWluZ0dsYXNzLnNyYyA9IG1hZ25pZnlpbmdHbGFzc0ltYWdlO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHNlYXJjaEJhci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBzZWFyY2hCYXIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdzZWFyY2gnKTtcblxuICAgICAgICBjb25zdCBzaXRlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHNpdGVOYW1lLnRleHRDb250ZW50ID0gYExldCdzIFRvZG8gVGhpc2A7XG5cbiAgICAgICAgbmF2QmFyQ29udGFpbmVyLmFwcGVuZChiYXJzLCBtYWduaWZ5aW5nR2xhc3MsIHNlYXJjaEJhciwgc2l0ZU5hbWUpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkJhckNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZGlzcGxheVNpZGVQYW5lbCgpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBzaWRlUGFuZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZVBhbmVsQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2lkZS1wYW5lbC1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXJUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cy1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFByb2plY3QnO1xuXG4gICAgICAgIHNpZGVQYW5lbENvbnRhaW5lci5hcHBlbmQocHJvamVjdHNDb250YWluZXJUaXRsZSwgcHJvamVjdHNDb250YWluZXIsIGNyZWF0ZVByb2plY3RCdXR0b24pO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVQYW5lbENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZGlzcGxheVByb2plY3RUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qZWN0VGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRpc3BsYXlUb2RvKHRpdGxlOiBzdHJpbmcsIGR1ZURhdGU6IHN0cmluZywgcHJpb3JpdHk6IHN0cmluZykge1xuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuXG4gICAgICAgIGNvbnN0IGRyb3BEb3duRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBkcm9wRG93bkVsZW1lbnQuc3JjID0gZHJvcERvd25JbWFnZTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0aXRsZUVsZW1lbnQsIGR1ZURhdGVFbGVtZW50LCBkcm9wRG93bkVsZW1lbnQpO1xuICAgICAgICB0aGlzLmRpc3BsYXlQcmlvcml0eSh0b2RvQ29udGFpbmVyLCBwcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2Rvcy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgY3JlYXRlVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtdG9kby1jb250YWluZXInKTtcbiAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKHRvZG9Db250YWluZXIsIGNyZWF0ZVRvZG9Db250YWluZXIpO1xuICAgIH1cblxuICAgIGRpc3BsYXlQcmlvcml0eSh0b2RvQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCwgcHJpb3JpdHk6IHN0cmluZykge1xuICAgICAgICBsZXQgYmFja2dyb3VuZGNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvciA9ICd5ZWxsb3cnO1xuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvciA9ICdyZWQnO1xuICAgICAgICB9XG4gICAgICAgIHRvZG9Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZGNvbG9yO1xuICAgIH1cblxuICAgIGRpc3BsYXlQcm9qZWN0Q29udGFpbmVyKHByb2plY3RUaXRsZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBwcm9qZWN0VGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUb2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0VG9kb3NDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LXRvZG9zLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZUVsZW1lbnQsIHByb2plY3RUb2Rvc0NvbnRhaW5lcik7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3RDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8odG9kb0luZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQodG9kb0NvbnRhaW5lcnNbdG9kb0luZGV4XSk7XG4gICAgfVxuXG4gICAgZGlzcGxheUNyZWF0ZVRvZG8oKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kb3MtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY3JlYXRlVG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NyZWF0ZS10b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY3JlYXRlVG9kb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjcmVhdGVUb2RvVGV4dC50ZXh0Q29udGVudCA9ICcrIENyZWF0ZSBUb2RvJztcblxuICAgICAgICBjcmVhdGVUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9UZXh0KTtcbiAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZGlzcGxheUV4cGFuZGVkVG9kbyh0b2RvSW5kZXg6IG51bWJlciwgdGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgbm90ZXM6IHN0cmluZywgcHJpb3JpdHk6IHN0cmluZywgZHVlRGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICB0aXRsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC50eXBlID0gJ3RleHQnO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQudmFsdWUgPSBkZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBub3Rlc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG5vdGVzSGVhZGVyLnRleHRDb250ZW50ID0gJ05vdGVzJztcblxuICAgICAgICBjb25zdCBub3Rlc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBub3Rlc0VsZW1lbnQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgbm90ZXNFbGVtZW50LnZhbHVlID0gbm90ZXM7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG5cbiAgICAgICAgY29uc3QgbG93UHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbG93UHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgICAgICAgbG93UHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSAnbG93JztcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSAnbG93JykgeyBsb3dQcmlvcml0eU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7IH1cblxuICAgICAgICBjb25zdCBtZWRQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBtZWRQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgICBtZWRQcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9ICdtZWRpdW0nO1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7IG1lZFByaW9yaXR5T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTsgfVxuXG4gICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG4gICAgICAgIGhpZ2hQcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9ICdoaWdoJztcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSAnaGlnaCcpIHsgaGlnaFByaW9yaXR5T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTsgfVxuXG4gICAgICAgIGNvbnN0IG5vUHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbm9Qcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ25vbmUnKTtcbiAgICAgICAgbm9Qcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9ICdub25lJztcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSAnbm9uZScpIHsgbm9Qcmlvcml0eU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7IH1cblxuICAgICAgICBwcmlvcml0eVNlbGVjdGlvbi5hcHBlbmQobm9Qcmlvcml0eU9wdGlvbiwgbG93UHJpb3JpdHlPcHRpb24sIG1lZFByaW9yaXR5T3B0aW9uLCBoaWdoUHJpb3JpdHlPcHRpb24pO1xuICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZHVlRGF0ZUVsZW1lbnQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZHVlRGF0ZUVsZW1lbnQudmFsdWUgPSBkdWVEYXRlO1xuXG4gICAgICAgIGNvbnN0IGRyb3BEb3duRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBkcm9wRG93bkVsZW1lbnQuc3JjID0gZHJvcERvd25JbWFnZTtcblxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0aXRsZUVsZW1lbnQsIGRlc2NyaXB0aW9uRWxlbWVudCwgbm90ZXNFbGVtZW50LCBkdWVEYXRlRWxlbWVudCwgcHJpb3JpdHlDb250YWluZXIsIGRyb3BEb3duRWxlbWVudCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVByaW9yaXR5KHRvZG9Db250YWluZXIsIHByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG9zLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodG9kb0NvbnRhaW5lciwgcHJvamVjdFRvZG9zW3RvZG9JbmRleF0pO1xuICAgICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0VG9kb3NbdG9kb0luZGV4ICsgMV0pO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzVG9FeHBhbmRlZFRvZG8odG9kb0luZGV4OiBudW1iZXIsIHVwZGF0ZVN0b3JlZFRpdGxlOiAodGl0bGU6IHN0cmluZykgPT4gdm9pZCwgdXBkYXRlU3RvcmVkRGVzYzogKGRlc2NyaXB0aW9uOiBzdHJpbmcpID0+IHZvaWQsIHVwZGF0ZVN0b3JlZE5vdGVzOiAobm90ZXM6IHN0cmluZykgPT4gdm9pZCwgdXBkYXRlU3RvcmVkUHJpb3JpdHk6IChwcmlvcml0eTogc3RyaW5nKSA9PiB2b2lkLCB1cGRhdGVTdG9yZWREdWVEYXRlOiAoZHVlRGF0ZTogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBwcm9qZWN0VG9kb3NbdG9kb0luZGV4XTtcblxuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XG4gICAgICAgIHRpdGxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHsgdXBkYXRlU3RvcmVkVGl0bGUodGl0bGVFbGVtZW50LnRleHRDb250ZW50KSB9KTtcblxuICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnRzID0gdG9kb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBpbnB1dEVsZW1lbnRzWzBdO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7IHVwZGF0ZVN0b3JlZERlc2MoZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlKSB9KTtcblxuICAgICAgICBjb25zdCBub3Rlc0VsZW1lbnQgPSBpbnB1dEVsZW1lbnRzWzFdO1xuICAgICAgICBub3Rlc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7IHVwZGF0ZVN0b3JlZE5vdGVzKG5vdGVzRWxlbWVudC52YWx1ZSkgfSk7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUVsZW1lbnQgPSBpbnB1dEVsZW1lbnRzWzJdO1xuICAgICAgICBkdWVEYXRlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHsgdXBkYXRlU3RvcmVkRHVlRGF0ZShkdWVEYXRlRWxlbWVudC52YWx1ZSkgfSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gdG9kb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgcHJpb3JpdHlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHsgdXBkYXRlU3RvcmVkUHJpb3JpdHkocHJpb3JpdHlFbGVtZW50LnZhbHVlKSB9KTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVyVG9DcmVhdGVUb2RvKGNyZWF0ZVN0b3JlZFRvZG86ICh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBub3Rlczogc3RyaW5nLCBkdWVEYXRlOiBzdHJpbmcsIHByaW9yaXR5OiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlVG9kb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRvZG8tY29udGFpbmVyJyk7XG4gICAgICAgIGNyZWF0ZVRvZG9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSAnMTEvMTEvMjAxMSc7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSAnbm9uZSc7XG4gICAgICAgICAgICBjcmVhdGVTdG9yZWRUb2RvKHRpdGxlLCAnLi4uJywgJy4uLicsIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVRvZG8odGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgXG5cbn0iLCJpbXBvcnQgeyBUb2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHRvZG9zOiBBcnJheTxUb2RvSXRlbT47XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRvZG8odGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgZHVlRGF0ZTogc3RyaW5nLCBwcmlvcml0eTogc3RyaW5nLCBub3Rlczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaChuZXcgVG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VUb2RvVGl0bGUodG9kb0luZGV4OiBudW1iZXIsIHRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2Rvc1t0b2RvSW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgY2hhbmdlVG9kb0Rlc2NyaXB0aW9uKHRvZG9JbmRleDogbnVtYmVyLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9kb3NbdG9kb0luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNoYW5nZVRvZG9Ob3RlKHRvZG9JbmRleDogbnVtYmVyLCBub3Rlczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9kb3NbdG9kb0luZGV4XS5ub3RlcyA9IG5vdGVzO1xuICAgIH1cblxuICAgIGNoYW5nZURhdGUodG9kb0luZGV4OiBudW1iZXIsIGR1ZURhdGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRvZG9zW3RvZG9JbmRleF0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgY2hhbmdlUHJpb3JpdHkodG9kb0luZGV4OiBudW1iZXIsIHByaW9yaXR5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2Rvc1t0b2RvSW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9kbyh0b2RvOiBUb2RvSXRlbSkge1xuICAgICAgICBsZXQgdG9kb0luZGV4OiBudW1iZXIgPSB0aGlzLnRvZG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4geyBlbGVtZW50ID09PSB0b2RvfSk7XG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgfVxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBET01EaXNwbGF5ZXIgfSBmcm9tIFwiLi9kb21kaXNwbGF5ZXJcIjtcbmltcG9ydCB7IFRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1cIjtcblxuZXhwb3J0IGNsYXNzIFRvZG9Db250cm9sbGVyIHtcbiAgICBwcm9qZWN0czogQXJyYXk8UHJvamVjdD47XG4gICAgZG9tRGlzcGxheWVyOiBET01EaXNwbGF5ZXIgPSBuZXcgRE9NRGlzcGxheWVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgdGhpcy5wcm9qZWN0cyA9IFtdIH1cblxuICAgIGFkZFByb2plY3QodGl0bGU6IHN0cmluZykgeyB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QodGl0bGUpKX1cblxuICAgIGFkZFRvZG8ocHJvamVjdEluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGRlZmF1bHRUb2RvVGl0bGU6IHN0cmluZyA9IFwiVGl0bGVcIjtcbiAgICAgICAgbGV0IGRlZmF1bHRUb2RvRGVzY3JpcHRpb246IHN0cmluZyA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICAgICAgbGV0IGRlZmF1bHREYXRlOiBzdHJpbmcgPSBcIjAxLzAxLzAwMDBcIjtcbiAgICAgICAgbGV0IGRlZmF1bHRQcmlvcml0eTogc3RyaW5nID0gXCJub25lXCI7XG4gICAgICAgIGxldCBkZWZhdWx0Tm90ZXM6IHN0cmluZyA9IFwiLi4uXCI7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS5hZGRUb2RvKGRlZmF1bHRUb2RvVGl0bGUsIGRlZmF1bHRUb2RvRGVzY3JpcHRpb24sIGRlZmF1bHREYXRlLCBkZWZhdWx0UHJpb3JpdHksIGRlZmF1bHROb3Rlcyk7XG4gICAgfVxuXG4gICAgY2hhbmdlUHJvamVjdFRpdGxlKHByb2plY3RJbmRleDogbnVtYmVyLCB0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGNoYW5nZVRvZG9UaXRsZShwcm9qZWN0SW5kZXg6IG51bWJlciwgdG9kb0luZGV4OiBudW1iZXIsIHRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLmNoYW5nZVRvZG9UaXRsZSh0b2RvSW5kZXgsIHRpdGxlKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VUb2RvRGVzY3JpcHRpb24ocHJvamVjdEluZGV4OiBudW1iZXIsIHRvZG9JbmRleDogbnVtYmVyLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS5jaGFuZ2VUb2RvRGVzY3JpcHRpb24odG9kb0luZGV4LCBkZXNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgY2hhbmdlVG9kb05vdGUocHJvamVjdEluZGV4OiBudW1iZXIsIHRvZG9JbmRleDogbnVtYmVyLCBub3Rlczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS5jaGFuZ2VUb2RvTm90ZSh0b2RvSW5kZXgsIG5vdGVzKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VEYXRlKHByb2plY3RJbmRleDogbnVtYmVyLCB0b2RvSW5kZXg6IG51bWJlciwgZHVlRGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS5jaGFuZ2VEYXRlKHRvZG9JbmRleCwgZHVlRGF0ZSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUHJpb3JpdHkocHJvamVjdEluZGV4OiBudW1iZXIsIHRvZG9JbmRleDogbnVtYmVyLCBwcmlvcml0eTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS5jaGFuZ2VQcmlvcml0eSh0b2RvSW5kZXgsIHByaW9yaXR5KTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KGluZGV4OiBudW1iZXIpIHsgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpIH1cblxuICAgIHJlbW92ZVRvZG8ocHJvamVjdEluZGV4OiBudW1iZXIsIHRvZG9JbmRleDogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgfVxuXG4gICAgbG9hZERlZmF1bHRQYWdlKCkge1xuICAgICAgICB0aGlzLmFkZFByb2plY3QoJ1RvZGF5Jyk7XG4gICAgICAgIHRoaXMuZG9tRGlzcGxheWVyLmRpc3BsYXlMYXlvdXQoKTtcbiAgICAgICAgdGhpcy5kb21EaXNwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lclRvQ3JlYXRlVG9kbygodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgbm90ZXM6IHN0cmluZywgZHVlRGF0ZTogc3RyaW5nLCBwcmlvcml0eTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzWzBdLmFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFRvZG9JdGVtIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZHVlRGF0ZTogc3RyaW5nO1xuICAgIHByaW9yaXR5OiBzdHJpbmc7XG4gICAgbm90ZXM6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGR1ZURhdGU6IHN0cmluZywgcHJpb3JpdHk6IHN0cmluZywgbm90ZXM6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgVG9kb0NvbnRyb2xsZXIgfSBmcm9tIFwiLi90b2RvQ29udHJvbGxlclwiO1xuXG5sZXQgdG9kb0NvbnRyb2xsZXIgPSBuZXcgVG9kb0NvbnRyb2xsZXIoKTtcbnRvZG9Db250cm9sbGVyLmxvYWREZWZhdWx0UGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
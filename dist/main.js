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

.selected-project {
    color: green;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,0BAA0B;IAC1B,kDAAkD;IAClD,yBAAyB;IACzB,uBAAuB;IACvB,yBAAyB;IACzB,uGAAuG;AAC3G;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,4BAA4B;IAC5B,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,wCAAwC;IACxC,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,0BAA0B;AAC9B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,uCAAuC;IACvC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,uCAAuC;IACvC,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;IACT,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,wCAAwC;AAC5C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,0BAA0B;IAC1B,yBAAyB;IACzB,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB","sourcesContent":[":root {\n    box-sizing: border-box;\n    --primary-color: #18191A;\n    --secondary-color: #3a3b3c;\n    --secondary-color-with-opac: rgba(58, 59, 60, 0.5);\n    --tertiary-color: #242526;\n    --primary-text: #E4E6EB;\n    --secondary-text: #B0B3B8;\n    --primary-svg: invert(100%) sepia(75%) saturate(616%) hue-rotate(178deg) brightness(101%) contrast(84%);\n}\n\nbody {\n    margin: 0px;\n}\n\n#main-container {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 50px 1fr;\n    width: 100vw;\n    height: 100vh;\n}\n\n#nav-bar-container {\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    align-items: center;\n    padding: 24px;\n    background-color: var(--secondary-color);\n    color: var(--primary-text);\n}\n\n#nav-bar-container > img {\n    height: 24px;\n    width: auto;\n    filter: var(--primary-svg);\n}\n\n#nav-bar-container>img:nth-child(2) {\n    margin-left: max(40px, 20vw);\n}\n\n#nav-bar-container>input {\n    margin-left: 8px;\n    margin-right: max(40px, 15vw);\n    border: none;\n    outline: none;\n    background-color: var(--secondary-text);\n    padding: 4px 8px;\n    border-radius: 8px;\n}\n\n#side-panel-container {\n    grid-area: 2 / 1 / 3 / 2;\n    background-color: var(--tertiary-color);\n    color: var(--primary-text);\n    padding: 0px 16px;\n}\n\n#project-container {\n    grid-area: 2 / 2 / 3 / 3;\n    padding: 24px;\n    background-color: var(--primary-color);\n    color: var(--primary-text);\n}\n\n#project-todos-container {\n    display: flex;\n    flex-grow: 1;\n    gap: 50px;\n    flex-wrap: wrap;\n    max-width: calc(100vw - 200px);\n}\n\n.todo-container, #create-todo-container {\n    height: 300px;\n    width: 300px;\n    background-color: var(--secondary-color);\n}\n\n.todo-container>img {\n    height: 32px;\n    width: auto;\n    filter: var(--primary-svg);\n    align-self: last baseline;\n    justify-self: end;\n    margin: 0px 10px 10px 0px;\n}\n\n.todo-container {\n    display: grid;\n    grid-template-rows: 4fr 1fr 1fr;\n    max-width: 300px;\n    max-height: 300px;\n    text-align: center;\n}\n\n.todo-container>h2:first-child {\n    align-self: center;\n    justify-self: center;\n    font-size: 24px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 300px;\n}\n\n.todo-container>p {\n    align-self: baseline;\n    justify-self: center;\n    font-size: 24px;\n}\n\n#create-todo-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.selected-project {\n    color: green;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _icons_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/trash-can-outline.svg */ "./src/icons/trash-can-outline.svg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





var DOMDisplayer = /** @class */ (function () {
    function DOMDisplayer() {
    }
    DOMDisplayer.prototype.displayLayout = function (loadTodaysTodos, createProject) {
        var mainContainer = document.createElement('div');
        mainContainer.setAttribute('id', 'main-container');
        document.body.appendChild(mainContainer);
        this.displayNavbar();
        this.displaySidePanel(loadTodaysTodos, createProject);
    };
    DOMDisplayer.prototype.displayProject = function (project) {
        this.displayProjectContainer(project.title);
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
    DOMDisplayer.prototype.displaySidePanel = function (loadTodaysTodos, createProject) {
        var mainContainer = document.getElementById('main-container');
        var sidePanelContainer = document.createElement('div');
        sidePanelContainer.setAttribute('id', 'side-panel-container');
        var todayElement = document.createElement('p');
        todayElement.textContent = 'Today';
        todayElement.addEventListener('click', loadTodaysTodos);
        var projectsContainerTitle = document.createElement('h2');
        projectsContainerTitle.textContent = 'Projects';
        var projectsContainer = document.createElement('div');
        projectsContainer.setAttribute('id', 'projects-container');
        var createProjectButton = document.createElement('button');
        createProjectButton.textContent = 'Create Project';
        createProjectButton.addEventListener('click', createProject);
        sidePanelContainer.append(todayElement, projectsContainerTitle, projectsContainer, createProjectButton);
        mainContainer.appendChild(sidePanelContainer);
    };
    DOMDisplayer.prototype.displayProjectInSidePanel = function (title, loadProject) {
        var _this = this;
        var projectsContainer = document.getElementById('projects-container');
        var projectTitleElement = document.createElement('p');
        projectTitleElement.addEventListener('click', function () {
            loadProject();
            _this.unSelectProjectInSidePanel();
            projectTitleElement.classList.add('selected-project');
        });
        projectTitleElement.textContent = title;
        projectsContainer.appendChild(projectTitleElement);
        this.unSelectProjectInSidePanel();
        projectTitleElement.classList.add('selected-project');
    };
    DOMDisplayer.prototype.selectProjectInSidePanel = function (targetProject) {
        var projectsContainer = document.getElementById('projects-container');
        var projects = projectsContainer.querySelectorAll('p');
        projects.forEach(function (project) {
            if (project.textContent === targetProject.title) {
                project.classList.add('selected-project');
            }
        });
    };
    DOMDisplayer.prototype.unSelectProjectInSidePanel = function () {
        var projectsContainer = document.getElementById('projects-container');
        var projects = projectsContainer.querySelectorAll('p');
        projects.forEach(function (project) {
            if (project.classList.contains('selected-project')) {
                project.classList.remove('selected-project');
            }
        });
    };
    DOMDisplayer.prototype.displayTodo = function (elementAfter, todo, removeTodo) {
        var _this = this;
        var todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
        todoContainer.classList.add('collapsed');
        var titleElement = document.createElement('h2');
        titleElement.textContent = todo.title;
        var dueDateElement = document.createElement('p');
        dueDateElement.textContent = todo.dueDate;
        var dropDownElement = new Image();
        dropDownElement.src = _icons_chevron_circle_down_solid_svg__WEBPACK_IMPORTED_MODULE_2__;
        todoContainer.append(titleElement, dueDateElement, dropDownElement);
        this.displayPriority(todoContainer, todo.priority);
        var projectTodoContainer = document.getElementById('project-todos-container');
        projectTodoContainer.insertBefore(todoContainer, elementAfter);
        todoContainer.addEventListener('click', function () {
            _this.displayExpandedTodo(todo, todoContainer, removeTodo);
        });
    };
    DOMDisplayer.prototype.displayTodoBeforeCreateDiv = function (todo, removeTodo) {
        var createElement = document.getElementById('create-todo-container');
        this.displayTodo(createElement, todo, removeTodo);
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
    DOMDisplayer.prototype.addEventListenerToTodo = function (todoElement, expandTodo) {
        todoElement.addEventListener('click', expandTodo);
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
    DOMDisplayer.prototype.displayExpandedTodo = function (todo, todoElement, removeTodo) {
        var todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
        todoContainer.classList.add('expanded');
        var trashCanElement = new Image();
        trashCanElement.src = _icons_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
        var titleElement = document.createElement('h2');
        titleElement.textContent = todo.title;
        titleElement.setAttribute('contenteditable', 'true');
        var descriptionElement = document.createElement('input');
        descriptionElement.type = 'text';
        descriptionElement.value = todo.description;
        var notesHeader = document.createElement('h3');
        notesHeader.textContent = 'Notes';
        var notesElement = document.createElement('input');
        notesElement.type = 'text';
        notesElement.value = todo.notes;
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
        if (todo.priority === 'low') {
            lowPriorityOption.selected = true;
        }
        var medPriorityOption = document.createElement('option');
        medPriorityOption.setAttribute('value', 'medium');
        medPriorityOption.textContent = 'medium';
        if (todo.priority === 'medium') {
            medPriorityOption.selected = true;
        }
        var highPriorityOption = document.createElement('option');
        highPriorityOption.setAttribute('value', 'high');
        highPriorityOption.textContent = 'high';
        if (todo.priority === 'high') {
            highPriorityOption.selected = true;
        }
        var noPriorityOption = document.createElement('option');
        noPriorityOption.setAttribute('value', 'none');
        noPriorityOption.textContent = 'none';
        if (todo.priority === 'none') {
            noPriorityOption.selected = true;
        }
        prioritySelection.append(noPriorityOption, lowPriorityOption, medPriorityOption, highPriorityOption);
        priorityContainer.append(priorityLabel, prioritySelection);
        var dueDateElement = document.createElement('input');
        dueDateElement.type = 'date';
        dueDateElement.value = todo.dueDate;
        var dropDownElement = new Image();
        dropDownElement.src = _icons_chevron_circle_down_solid_svg__WEBPACK_IMPORTED_MODULE_2__;
        todoContainer.append(trashCanElement, titleElement, descriptionElement, notesHeader, notesElement, dueDateElement, priorityContainer, dropDownElement);
        this.displayPriority(todoContainer, todo.priority);
        var projectTodoContainer = document.getElementById('project-todos-container');
        projectTodoContainer.insertBefore(todoContainer, todoElement);
        projectTodoContainer.removeChild(todoElement);
        this.addEventListenersToExpandedTodo(todo, todoContainer, removeTodo);
    };
    DOMDisplayer.prototype.addEventListenersToExpandedTodo = function (todo, todoContainer, removeTodo) {
        var _this = this;
        var titleElement = todoContainer.querySelector('h2');
        titleElement.addEventListener('input', function () { todo.title = titleElement.textContent; });
        var inputElements = todoContainer.querySelectorAll('input');
        var descriptionElement = inputElements[0];
        descriptionElement.addEventListener('input', function () { todo.description = descriptionElement.value; });
        var notesElement = inputElements[1];
        notesElement.addEventListener('input', function () { todo.notes = notesElement.value; });
        var dueDateElement = inputElements[2];
        dueDateElement.addEventListener('input', function () { todo.dueDate = dueDateElement.value; });
        var priorityElement = todoContainer.querySelector('select');
        priorityElement.addEventListener('change', function () { todo.priority = priorityElement.value; });
        var images = todoContainer.querySelectorAll('img');
        var removeElement = images[0];
        removeElement.addEventListener('click', removeTodo);
        removeElement.addEventListener('click', function () { return _this.removeTodoElement(todoContainer); });
        var collapseElement = images[1];
        collapseElement.addEventListener('click', function () {
            _this.displayTodo(todoContainer, todo, removeTodo);
            _this.removeTodoElement(todoContainer);
        });
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
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.ts");



var TodoController = /** @class */ (function () {
    function TodoController() {
        this.domDisplayer = new _domdisplayer__WEBPACK_IMPORTED_MODULE_1__.DOMDisplayer();
        this.projects = [];
    }
    TodoController.prototype.removeProject = function (projectToRemove) {
        this.projects.filter(function (project) { return project !== projectToRemove; });
    };
    TodoController.prototype.removeTodo = function (project, todoToRemove) {
        project.todos.filter(function (todo) { return todo !== todoToRemove; });
    };
    TodoController.prototype.createTodo = function (project) {
        var _this = this;
        var defaultTodoTitle = "Title";
        var defaultTodoDescription = "description";
        var defaultDate = "01/01/0000";
        var defaultPriority = "none";
        var defaultNotes = "...";
        var todo = new _todoItem__WEBPACK_IMPORTED_MODULE_2__.TodoItem(defaultTodoTitle, defaultTodoDescription, defaultDate, defaultPriority, defaultNotes);
        project.todos.push(todo);
        this.domDisplayer.displayTodoBeforeCreateDiv(todo, function () { _this.removeTodo(project, todo); });
    };
    TodoController.prototype.loadDefaultPage = function () {
        var _this = this;
        var today = new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Today');
        this.projects.push(today);
        this.domDisplayer.displayLayout(function () { _this.loadProject(today); }, function () { _this.createProject(); });
        this.domDisplayer.displayProject(today);
        this.domDisplayer.addEventListenerToCreateTodo(function () {
            _this.createTodo(today);
        });
    };
    TodoController.prototype.loadTodos = function (project) {
        var _this = this;
        var _loop_1 = function (todo) {
            this_1.domDisplayer.displayTodoBeforeCreateDiv(todo, function () { _this.removeTodo(project, todo); });
        };
        var this_1 = this;
        for (var _i = 0, _a = project.todos; _i < _a.length; _i++) {
            var todo = _a[_i];
            _loop_1(todo);
        }
    };
    TodoController.prototype.createProject = function () {
        var _this = this;
        var defaultProjectName = 'New Project';
        var project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(defaultProjectName);
        this.projects.push(project);
        this.domDisplayer.removeProjectContainer();
        this.domDisplayer.displayProject(project);
        this.domDisplayer.addEventListenerToCreateTodo(function () {
            _this.createTodo(project);
        });
        this.domDisplayer.displayProjectInSidePanel(project.title, function () { _this.loadProject(project); });
    };
    TodoController.prototype.loadProject = function (project) {
        var _this = this;
        this.domDisplayer.removeProjectContainer();
        this.domDisplayer.displayProject(project);
        this.domDisplayer.addEventListenerToCreateTodo(function () {
            _this.createTodo(project);
        });
        this.loadTodos(project);
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

/***/ }),

/***/ "./src/icons/trash-can-outline.svg":
/*!*****************************************!*\
  !*** ./src/icons/trash-can-outline.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtEO0FBRWxELElBQUksY0FBYyxHQUFHLElBQUksMkRBQWMsRUFBRSxDQUFDO0FBQzFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbWRpc3BsYXllci50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LnRzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9Db250cm9sbGVyLnRzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9JdGVtLnRzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC0tcHJpbWFyeS1jb2xvcjogIzE4MTkxQTtcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzNhM2IzYztcbiAgICAtLXNlY29uZGFyeS1jb2xvci13aXRoLW9wYWM6IHJnYmEoNTgsIDU5LCA2MCwgMC41KTtcbiAgICAtLXRlcnRpYXJ5LWNvbG9yOiAjMjQyNTI2O1xuICAgIC0tcHJpbWFyeS10ZXh0OiAjRTRFNkVCO1xuICAgIC0tc2Vjb25kYXJ5LXRleHQ6ICNCMEIzQjg7XG4gICAgLS1wcmltYXJ5LXN2ZzogaW52ZXJ0KDEwMCUpIHNlcGlhKDc1JSkgc2F0dXJhdGUoNjE2JSkgaHVlLXJvdGF0ZSgxNzhkZWcpIGJyaWdodG5lc3MoMTAxJSkgY29udHJhc3QoODQlKTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbiNtYWluLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4jbmF2LWJhci1jb250YWluZXIge1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xufVxuXG4jbmF2LWJhci1jb250YWluZXIgPiBpbWcge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBmaWx0ZXI6IHZhcigtLXByaW1hcnktc3ZnKTtcbn1cblxuI25hdi1iYXItY29udGFpbmVyPmltZzpudGgtY2hpbGQoMikge1xuICAgIG1hcmdpbi1sZWZ0OiBtYXgoNDBweCwgMjB2dyk7XG59XG5cbiNuYXYtYmFyLWNvbnRhaW5lcj5pbnB1dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IG1heCg0MHB4LCAxNXZ3KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dCk7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNzaWRlLXBhbmVsLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbn1cblxuI3Byb2plY3QtY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcbn1cblxuI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBnYXA6IDUwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDIwMHB4KTtcbn1cblxuLnRvZG8tY29udGFpbmVyLCAjY3JlYXRlLXRvZG8tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4udG9kby1jb250YWluZXI+aW1nIHtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZmlsdGVyOiB2YXIoLS1wcmltYXJ5LXN2Zyk7XG4gICAgYWxpZ24tc2VsZjogbGFzdCBiYXNlbGluZTtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBtYXJnaW46IDBweCAxMHB4IDEwcHggMHB4O1xufVxuXG4udG9kby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZnIgMWZyIDFmcjtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvZG8tY29udGFpbmVyPmgyOmZpcnN0LWNoaWxkIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLnRvZG8tY29udGFpbmVyPnAge1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuI2NyZWF0ZS10b2RvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VsZWN0ZWQtcHJvamVjdCB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsa0RBQWtEO0lBQ2xELHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHVHQUF1RztBQUMzRzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHdDQUF3QztJQUN4QywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix1Q0FBdUM7SUFDdkMsMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUztJQUNULGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMTgxOTFBO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzNhM2IzYztcXG4gICAgLS1zZWNvbmRhcnktY29sb3Itd2l0aC1vcGFjOiByZ2JhKDU4LCA1OSwgNjAsIDAuNSk7XFxuICAgIC0tdGVydGlhcnktY29sb3I6ICMyNDI1MjY7XFxuICAgIC0tcHJpbWFyeS10ZXh0OiAjRTRFNkVCO1xcbiAgICAtLXNlY29uZGFyeS10ZXh0OiAjQjBCM0I4O1xcbiAgICAtLXByaW1hcnktc3ZnOiBpbnZlcnQoMTAwJSkgc2VwaWEoNzUlKSBzYXR1cmF0ZSg2MTYlKSBodWUtcm90YXRlKDE3OGRlZykgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCg4NCUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNuYXYtYmFyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XFxufVxcblxcbiNuYXYtYmFyLWNvbnRhaW5lciA+IGltZyB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGZpbHRlcjogdmFyKC0tcHJpbWFyeS1zdmcpO1xcbn1cXG5cXG4jbmF2LWJhci1jb250YWluZXI+aW1nOm50aC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBtYXgoNDBweCwgMjB2dyk7XFxufVxcblxcbiNuYXYtYmFyLWNvbnRhaW5lcj5pbnB1dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIG1hcmdpbi1yaWdodDogbWF4KDQwcHgsIDE1dncpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0KTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc2lkZS1wYW5lbC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XFxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcXG59XFxuXFxuI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIsICNjcmVhdGUtdG9kby1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lcj5pbWcge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBmaWx0ZXI6IHZhcigtLXByaW1hcnktc3ZnKTtcXG4gICAgYWxpZ24tc2VsZjogbGFzdCBiYXNlbGluZTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbjogMHB4IDEwcHggMTBweCAwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNGZyIDFmciAxZnI7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lcj5oMjpmaXJzdC1jaGlsZCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lcj5wIHtcXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbiNjcmVhdGUtdG9kby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlbGVjdGVkLXByb2plY3Qge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYmFyc0ltYWdlIGZyb20gJy4vaWNvbnMvYmFycy1zb2xpZC5zdmcnO1xuaW1wb3J0IG1hZ25pZnlpbmdHbGFzc0ltYWdlIGZyb20gJy4vaWNvbnMvc2VhcmNoLXNvbGlkLnN2Zyc7XG5pbXBvcnQgZHJvcERvd25JbWFnZSBmcm9tICcuL2ljb25zL2NoZXZyb24tY2lyY2xlLWRvd24tc29saWQuc3ZnJztcbmltcG9ydCB0cmFzaENhbkltYWdlIGZyb20gJy4vaWNvbnMvdHJhc2gtY2FuLW91dGxpbmUuc3ZnJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgVG9kb0l0ZW0gfSBmcm9tICcuL3RvZG9JdGVtJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5leHBvcnQgY2xhc3MgRE9NRGlzcGxheWVyIHtcbiAgICBcbiAgICBkaXNwbGF5TGF5b3V0KGxvYWRUb2RheXNUb2RvczogKCkgPT4gdm9pZCwgY3JlYXRlUHJvamVjdDogKCkgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLWNvbnRhaW5lcicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuICAgICAgICB0aGlzLmRpc3BsYXlOYXZiYXIoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2lkZVBhbmVsKGxvYWRUb2RheXNUb2RvcywgY3JlYXRlUHJvamVjdCk7XG4gICAgfVxuXG4gICAgZGlzcGxheVByb2plY3QocHJvamVjdDogUHJvamVjdCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlQcm9qZWN0Q29udGFpbmVyKHByb2plY3QudGl0bGUpO1xuICAgICAgICB0aGlzLmRpc3BsYXlDcmVhdGVUb2RvKCk7XG4gICAgfVxuXG4gICAgZGlzcGxheU5hdmJhcigpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBuYXZCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2QmFyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWJhci1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBiYXJzID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJhcnMuc3JjID0gYmFyc0ltYWdlO1xuXG4gICAgICAgIGNvbnN0IG1hZ25pZnlpbmdHbGFzcyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBtYWduaWZ5aW5nR2xhc3Muc3JjID0gbWFnbmlmeWluZ0dsYXNzSW1hZ2U7XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc2VhcmNoQmFyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHNlYXJjaEJhci5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3NlYXJjaCcpO1xuXG4gICAgICAgIGNvbnN0IHNpdGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgc2l0ZU5hbWUudGV4dENvbnRlbnQgPSBgTGV0J3MgVG9kbyBUaGlzYDtcblxuICAgICAgICBuYXZCYXJDb250YWluZXIuYXBwZW5kKGJhcnMsIG1hZ25pZnlpbmdHbGFzcywgc2VhcmNoQmFyLCBzaXRlTmFtZSk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobmF2QmFyQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5U2lkZVBhbmVsKGxvYWRUb2RheXNUb2RvczogKCkgPT4gdm9pZCwgY3JlYXRlUHJvamVjdDogKCkgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHNpZGVQYW5lbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlUGFuZWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlLXBhbmVsLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHRvZGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9kYXlFbGVtZW50LnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICAgICAgdG9kYXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFRvZGF5c1RvZG9zKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXJUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cy1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFByb2plY3QnO1xuICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvamVjdCk7XG5cbiAgICAgICAgc2lkZVBhbmVsQ29udGFpbmVyLmFwcGVuZCh0b2RheUVsZW1lbnQsIHByb2plY3RzQ29udGFpbmVyVGl0bGUsIHByb2plY3RzQ29udGFpbmVyLCBjcmVhdGVQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlUGFuZWxDb250YWluZXIpO1xuICAgIH1cblxuICAgIGRpc3BsYXlQcm9qZWN0SW5TaWRlUGFuZWwodGl0bGU6IHN0cmluZywgbG9hZFByb2plY3Q6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3RUaXRsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2FkUHJvamVjdCgpO1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdFByb2plY3RJblNpZGVQYW5lbCgpO1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1wcm9qZWN0Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0VGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLnVuU2VsZWN0UHJvamVjdEluU2lkZVBhbmVsKCk7XG4gICAgICAgIHByb2plY3RUaXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJvamVjdCcpO1xuICAgIH1cblxuICAgIHNlbGVjdFByb2plY3RJblNpZGVQYW5lbCh0YXJnZXRQcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4geyBcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdC50ZXh0Q29udGVudCA9PT0gdGFyZ2V0UHJvamVjdC50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1blNlbGVjdFByb2plY3RJblNpZGVQYW5lbCgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdHNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgncCcpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7IFxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQtcHJvamVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc3BsYXlUb2RvKGVsZW1lbnRBZnRlcjogRWxlbWVudCwgdG9kbzogVG9kb0l0ZW0sIHJlbW92ZVRvZG86ICgpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgZHJvcERvd25FbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGRyb3BEb3duRWxlbWVudC5zcmMgPSBkcm9wRG93bkltYWdlO1xuXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRpdGxlRWxlbWVudCwgZHVlRGF0ZUVsZW1lbnQsIGRyb3BEb3duRWxlbWVudCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVByaW9yaXR5KHRvZG9Db250YWluZXIsIHRvZG8ucHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kb3MtY29udGFpbmVyJyk7XG4gICAgICAgIHByb2plY3RUb2RvQ29udGFpbmVyLmluc2VydEJlZm9yZSh0b2RvQ29udGFpbmVyLCBlbGVtZW50QWZ0ZXIpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXhwYW5kZWRUb2RvKHRvZG8sIHRvZG9Db250YWluZXIsIHJlbW92ZVRvZG8pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRpc3BsYXlUb2RvQmVmb3JlQ3JlYXRlRGl2KHRvZG86IFRvZG9JdGVtLCByZW1vdmVUb2RvOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRvZG8tY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuZGlzcGxheVRvZG8oY3JlYXRlRWxlbWVudCwgdG9kbywgcmVtb3ZlVG9kbyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9kb0VsZW1lbnQodG9kb0VsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdG9kb3MtY29udGFpbmVyJykucmVtb3ZlQ2hpbGQodG9kb0VsZW1lbnQpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG9BdEluZGV4KHRvZG9JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IHByb2plY3RUb2Rvc1t0b2RvSW5kZXhdO1xuICAgICAgICBpZiAodG9kb0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVG9kb0VsZW1lbnQodG9kb0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvVG9kbyh0b2RvRWxlbWVudDogRWxlbWVudCwgZXhwYW5kVG9kbzogKCkgPT4gdm9pZCkge1xuICAgICAgICB0b2RvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZFRvZG8pO1xuICAgIH1cblxuICAgIGRpc3BsYXlQcmlvcml0eSh0b2RvQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCwgcHJpb3JpdHk6IHN0cmluZykge1xuICAgICAgICBsZXQgYmFja2dyb3VuZGNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICAgICAgYmFja2dyb3VuZGNvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvciA9ICd5ZWxsb3cnO1xuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmRjb2xvciA9ICdyZWQnO1xuICAgICAgICB9XG4gICAgICAgIHRvZG9Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZGNvbG9yO1xuICAgIH1cblxuICAgIGRpc3BsYXlQcm9qZWN0Q29udGFpbmVyKHByb2plY3RUaXRsZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBwcm9qZWN0VGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUb2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0VG9kb3NDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LXRvZG9zLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZUVsZW1lbnQsIHByb2plY3RUb2Rvc0NvbnRhaW5lcik7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3RDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIGRpc3BsYXlDcmVhdGVUb2RvKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRvZG9zLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBjcmVhdGVUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWF0ZVRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGUtdG9kby1jb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNyZWF0ZVRvZG9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgY3JlYXRlVG9kb1RleHQudGV4dENvbnRlbnQgPSAnKyBDcmVhdGUgVG9kbyc7XG5cbiAgICAgICAgY3JlYXRlVG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUb2RvVGV4dCk7XG4gICAgICAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9Db250YWluZXIpO1xuICAgIH1cblxuICAgIGRpc3BsYXlFeHBhbmRlZFRvZG8odG9kbzogVG9kb0l0ZW0sIHRvZG9FbGVtZW50OiBIVE1MRGl2RWxlbWVudCwgcmVtb3ZlVG9kbzogKCkgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xuXG4gICAgICAgIGNvbnN0IHRyYXNoQ2FuRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0cmFzaENhbkVsZW1lbnQuc3JjID0gdHJhc2hDYW5JbWFnZTtcblxuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0aXRsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC50eXBlID0gJ3RleHQnO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IG5vdGVzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgbm90ZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuXG4gICAgICAgIGNvbnN0IG5vdGVzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5vdGVzRWxlbWVudC50eXBlID0gJ3RleHQnO1xuICAgICAgICBub3Rlc0VsZW1lbnQudmFsdWUgPSB0b2RvLm5vdGVzO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgICAgICBjb25zdCBwcmlvcml0eVNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuXG4gICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxvd1ByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gICAgICAgIGxvd1ByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gJ2xvdyc7XG4gICAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSAnbG93JykgeyBsb3dQcmlvcml0eU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7IH1cblxuICAgICAgICBjb25zdCBtZWRQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBtZWRQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgICBtZWRQcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9ICdtZWRpdW0nO1xuICAgICAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHsgbWVkUHJpb3JpdHlPcHRpb24uc2VsZWN0ZWQgPSB0cnVlOyB9XG5cbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGhpZ2hQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgICAgICAgaGlnaFByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gJ2hpZ2gnO1xuICAgICAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7IGhpZ2hQcmlvcml0eU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7IH1cblxuICAgICAgICBjb25zdCBub1ByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG5vUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdub25lJyk7XG4gICAgICAgIG5vUHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSAnbm9uZSc7XG4gICAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSAnbm9uZScpIHsgbm9Qcmlvcml0eU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7IH1cblxuICAgICAgICBwcmlvcml0eVNlbGVjdGlvbi5hcHBlbmQobm9Qcmlvcml0eU9wdGlvbiwgbG93UHJpb3JpdHlPcHRpb24sIG1lZFByaW9yaXR5T3B0aW9uLCBoaWdoUHJpb3JpdHlPcHRpb24pO1xuICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZHVlRGF0ZUVsZW1lbnQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZHVlRGF0ZUVsZW1lbnQudmFsdWUgPSB0b2RvLmR1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgZHJvcERvd25FbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGRyb3BEb3duRWxlbWVudC5zcmMgPSBkcm9wRG93bkltYWdlO1xuXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRyYXNoQ2FuRWxlbWVudCwgdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnQsIG5vdGVzSGVhZGVyLCBub3Rlc0VsZW1lbnQsIGR1ZURhdGVFbGVtZW50LCBwcmlvcml0eUNvbnRhaW5lciwgZHJvcERvd25FbGVtZW50KTtcbiAgICAgICAgdGhpcy5kaXNwbGF5UHJpb3JpdHkodG9kb0NvbnRhaW5lciwgdG9kby5wcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2Rvcy1jb250YWluZXInKTtcbiAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKHRvZG9Db250YWluZXIsIHRvZG9FbGVtZW50KTtcbiAgICAgICAgcHJvamVjdFRvZG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9kb0VsZW1lbnQpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzVG9FeHBhbmRlZFRvZG8odG9kbywgdG9kb0NvbnRhaW5lciwgcmVtb3ZlVG9kbyk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnNUb0V4cGFuZGVkVG9kbyh0b2RvOiBUb2RvSXRlbSwgdG9kb0NvbnRhaW5lcjogRWxlbWVudCwgcmVtb3ZlVG9kbzogKCkgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XG4gICAgICAgIHRpdGxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHsgdG9kby50aXRsZSA9IHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCB9KTtcblxuICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnRzID0gdG9kb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBpbnB1dEVsZW1lbnRzWzBdO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7IHRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkVsZW1lbnQudmFsdWUgfSk7XG5cbiAgICAgICAgY29uc3Qgbm90ZXNFbGVtZW50ID0gaW5wdXRFbGVtZW50c1sxXTtcbiAgICAgICAgbm90ZXNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4geyB0b2RvLm5vdGVzID0gbm90ZXNFbGVtZW50LnZhbHVlIH0pO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVFbGVtZW50ID0gaW5wdXRFbGVtZW50c1syXTtcbiAgICAgICAgZHVlRGF0ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7IHRvZG8uZHVlRGF0ZSA9IGR1ZURhdGVFbGVtZW50LnZhbHVlIH0pO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5RWxlbWVudCA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgIHByaW9yaXR5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7IHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eUVsZW1lbnQudmFsdWUgfSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdG9kb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcblxuICAgICAgICBjb25zdCByZW1vdmVFbGVtZW50ID0gaW1hZ2VzWzBdO1xuICAgICAgICByZW1vdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVG9kbyk7XG4gICAgICAgIHJlbW92ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlbW92ZVRvZG9FbGVtZW50KHRvZG9Db250YWluZXIpKTtcblxuICAgICAgICBjb25zdCBjb2xsYXBzZUVsZW1lbnQgPSBpbWFnZXNbMV07XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUb2RvKHRvZG9Db250YWluZXIsIHRvZG8sIHJlbW92ZVRvZG8pO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVUb2RvRWxlbWVudCh0b2RvQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvQ3JlYXRlVG9kbyhjcmVhdGVUb2RvOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVRvZG9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICBjcmVhdGVUb2RvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG8oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgXG5cbn0iLCJpbXBvcnQgeyBUb2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHRvZG9zOiBBcnJheTxUb2RvSXRlbT47XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRvZG8odGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgZHVlRGF0ZTogc3RyaW5nLCBwcmlvcml0eTogc3RyaW5nLCBub3Rlczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaChuZXcgVG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VUb2RvVGl0bGUodG9kb0luZGV4OiBudW1iZXIsIHRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2Rvc1t0b2RvSW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgY2hhbmdlVG9kb0Rlc2NyaXB0aW9uKHRvZG9JbmRleDogbnVtYmVyLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9kb3NbdG9kb0luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNoYW5nZVRvZG9Ob3RlKHRvZG9JbmRleDogbnVtYmVyLCBub3Rlczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9kb3NbdG9kb0luZGV4XS5ub3RlcyA9IG5vdGVzO1xuICAgIH1cblxuICAgIGNoYW5nZURhdGUodG9kb0luZGV4OiBudW1iZXIsIGR1ZURhdGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRvZG9zW3RvZG9JbmRleF0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgY2hhbmdlUHJpb3JpdHkodG9kb0luZGV4OiBudW1iZXIsIHByaW9yaXR5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2Rvc1t0b2RvSW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9kbyh0b2RvOiBUb2RvSXRlbSkge1xuICAgICAgICBsZXQgdG9kb0luZGV4OiBudW1iZXIgPSB0aGlzLnRvZG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4geyBlbGVtZW50ID09PSB0b2RvfSk7XG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgfVxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBET01EaXNwbGF5ZXIgfSBmcm9tIFwiLi9kb21kaXNwbGF5ZXJcIjtcbmltcG9ydCB7IFRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1cIjtcblxuZXhwb3J0IGNsYXNzIFRvZG9Db250cm9sbGVyIHtcbiAgICBwcm9qZWN0czogQXJyYXk8UHJvamVjdD47XG4gICAgZG9tRGlzcGxheWVyOiBET01EaXNwbGF5ZXIgPSBuZXcgRE9NRGlzcGxheWVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgdGhpcy5wcm9qZWN0cyA9IFtdOyB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3RUb1JlbW92ZTogUHJvamVjdCkgeyBcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QgIT09IHByb2plY3RUb1JlbW92ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9kbyhwcm9qZWN0OiBQcm9qZWN0LCB0b2RvVG9SZW1vdmU6IFRvZG9JdGVtKSB7XG4gICAgICAgIHByb2plY3QudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvICE9PSB0b2RvVG9SZW1vdmUpO1xuICAgIH1cblxuICAgIGNyZWF0ZVRvZG8ocHJvamVjdDogUHJvamVjdCkge1xuICAgICAgICBsZXQgZGVmYXVsdFRvZG9UaXRsZTogc3RyaW5nID0gXCJUaXRsZVwiO1xuICAgICAgICBsZXQgZGVmYXVsdFRvZG9EZXNjcmlwdGlvbjogc3RyaW5nID0gXCJkZXNjcmlwdGlvblwiO1xuICAgICAgICBsZXQgZGVmYXVsdERhdGU6IHN0cmluZyA9IFwiMDEvMDEvMDAwMFwiO1xuICAgICAgICBsZXQgZGVmYXVsdFByaW9yaXR5OiBzdHJpbmcgPSBcIm5vbmVcIjtcbiAgICAgICAgbGV0IGRlZmF1bHROb3Rlczogc3RyaW5nID0gXCIuLi5cIjtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kb0l0ZW0oZGVmYXVsdFRvZG9UaXRsZSwgZGVmYXVsdFRvZG9EZXNjcmlwdGlvbiwgZGVmYXVsdERhdGUsIGRlZmF1bHRQcmlvcml0eSwgZGVmYXVsdE5vdGVzKTtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICB0aGlzLmRvbURpc3BsYXllci5kaXNwbGF5VG9kb0JlZm9yZUNyZWF0ZURpdih0b2RvLCAoKSA9PiB7IHRoaXMucmVtb3ZlVG9kbyhwcm9qZWN0LCB0b2RvKX0pO1xuICAgIH1cblxuICAgIGxvYWREZWZhdWx0UGFnZSgpIHtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IFByb2plY3QoJ1RvZGF5Jyk7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaCh0b2RheSk7XG4gICAgICAgIHRoaXMuZG9tRGlzcGxheWVyLmRpc3BsYXlMYXlvdXQoKCkgPT4geyB0aGlzLmxvYWRQcm9qZWN0KHRvZGF5KSB9LCAoKSA9PiB7IHRoaXMuY3JlYXRlUHJvamVjdCgpOyB9KTtcbiAgICAgICAgdGhpcy5kb21EaXNwbGF5ZXIuZGlzcGxheVByb2plY3QodG9kYXkpO1xuICAgICAgICB0aGlzLmRvbURpc3BsYXllci5hZGRFdmVudExpc3RlbmVyVG9DcmVhdGVUb2RvKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kbyh0b2RheSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRUb2Rvcyhwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC50b2Rvcykge1xuICAgICAgICAgICAgdGhpcy5kb21EaXNwbGF5ZXIuZGlzcGxheVRvZG9CZWZvcmVDcmVhdGVEaXYodG9kbywgKCkgPT4geyB0aGlzLnJlbW92ZVRvZG8ocHJvamVjdCwgdG9kbyl9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgICAgIGxldCBkZWZhdWx0UHJvamVjdE5hbWUgPSAnTmV3IFByb2plY3QnO1xuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGRlZmF1bHRQcm9qZWN0TmFtZSk7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgdGhpcy5kb21EaXNwbGF5ZXIucmVtb3ZlUHJvamVjdENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmRvbURpc3BsYXllci5kaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgdGhpcy5kb21EaXNwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lclRvQ3JlYXRlVG9kbygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRvZG8ocHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRvbURpc3BsYXllci5kaXNwbGF5UHJvamVjdEluU2lkZVBhbmVsKHByb2plY3QudGl0bGUsICgpID0+IHsgdGhpcy5sb2FkUHJvamVjdChwcm9qZWN0KSB9KTtcbiAgICB9XG5cbiAgICBsb2FkUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuZG9tRGlzcGxheWVyLnJlbW92ZVByb2plY3RDb250YWluZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZG9tRGlzcGxheWVyLmRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgdGhpcy5kb21EaXNwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lclRvQ3JlYXRlVG9kbygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUb2RvKHByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRUb2Rvcyhwcm9qZWN0KTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFRvZG9JdGVtIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZHVlRGF0ZTogc3RyaW5nO1xuICAgIHByaW9yaXR5OiBzdHJpbmc7XG4gICAgbm90ZXM6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGR1ZURhdGU6IHN0cmluZywgcHJpb3JpdHk6IHN0cmluZywgbm90ZXM6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgVG9kb0NvbnRyb2xsZXIgfSBmcm9tIFwiLi90b2RvQ29udHJvbGxlclwiO1xuXG5sZXQgdG9kb0NvbnRyb2xsZXIgPSBuZXcgVG9kb0NvbnRyb2xsZXIoKTtcbnRvZG9Db250cm9sbGVyLmxvYWREZWZhdWx0UGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
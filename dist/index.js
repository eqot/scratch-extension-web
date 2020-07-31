(/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/earth.svg":
/*!*********************************************!*\
  !*** ./node_modules/@mdi/svg/svg/earth.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0ibWRpLWVhcnRoIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE3LjksMTcuMzlDMTcuNjQsMTYuNTkgMTYuODksMTYgMTYsMTZIMTVWMTNBMSwxIDAgMCwwIDE0LDEySDhWMTBIMTBBMSwxIDAgMCwwIDExLDlWN0gxM0EyLDIgMCAwLDAgMTUsNVY0LjU5QzE3LjkzLDUuNzcgMjAsOC42NCAyMCwxMkMyMCwxNC4wOCAxOS4yLDE1Ljk3IDE3LjksMTcuMzlNMTEsMTkuOTNDNy4wNSwxOS40NCA0LDE2LjA4IDQsMTJDNCwxMS4zOCA0LjA4LDEwLjc4IDQuMjEsMTAuMjFMOSwxNVYxNkEyLDIgMCAwLDAgMTEsMThNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaIiAvPjwvc3ZnPg==\"\n\n//# sourceURL=webpack:///./node_modules/@mdi/svg/svg/earth.svg?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/argument-type.js":
/*!************************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/argument-type.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Block argument types\n * @enum {string}\n */\nconst ArgumentType = {\n    /**\n     * Numeric value with angle picker\n     */\n    ANGLE: 'angle',\n\n    /**\n     * Boolean value with hexagonal placeholder\n     */\n    BOOLEAN: 'Boolean',\n\n    /**\n     * Numeric value with color picker\n     */\n    COLOR: 'color',\n\n    /**\n     * Numeric value with text field\n     */\n    NUMBER: 'number',\n\n    /**\n     * String value with text field\n     */\n    STRING: 'string',\n\n    /**\n     * String value with matrix field\n     */\n    MATRIX: 'matrix',\n\n    /**\n     * MIDI note number with note picker (piano) field\n     */\n    NOTE: 'note',\n\n    /**\n     * Inline image on block (as part of the label)\n     */\n    IMAGE: 'image'\n};\n\nmodule.exports = ArgumentType;\n\n\n//# sourceURL=webpack:///./node_modules/scratch-vm/src/extension-support/argument-type.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/block-type.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/block-type.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Types of block\n * @enum {string}\n */\nconst BlockType = {\n    /**\n     * Boolean reporter with hexagonal shape\n     */\n    BOOLEAN: 'Boolean',\n\n    /**\n     * A button (not an actual block) for some special action, like making a variable\n     */\n    BUTTON: 'button',\n\n    /**\n     * Command block\n     */\n    COMMAND: 'command',\n\n    /**\n     * Specialized command block which may or may not run a child branch\n     * The thread continues with the next block whether or not a child branch ran.\n     */\n    CONDITIONAL: 'conditional',\n\n    /**\n     * Specialized hat block with no implementation function\n     * This stack only runs if the corresponding event is emitted by other code.\n     */\n    EVENT: 'event',\n\n    /**\n     * Hat block which conditionally starts a block stack\n     */\n    HAT: 'hat',\n\n    /**\n     * Specialized command block which may or may not run a child branch\n     * If a child branch runs, the thread evaluates the loop block again.\n     */\n    LOOP: 'loop',\n\n    /**\n     * General reporter with numeric or string value\n     */\n    REPORTER: 'reporter'\n};\n\nmodule.exports = BlockType;\n\n\n//# sourceURL=webpack:///./node_modules/scratch-vm/src/extension-support/block-type.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/util/cast.js":
/*!**************************************************!*\
  !*** ./node_modules/scratch-vm/src/util/cast.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Color = __webpack_require__(/*! ../util/color */ \"./node_modules/scratch-vm/src/util/color.js\");\n\n/**\n * @fileoverview\n * Utilities for casting and comparing Scratch data-types.\n * Scratch behaves slightly differently from JavaScript in many respects,\n * and these differences should be encapsulated below.\n * For example, in Scratch, add(1, join(\"hello\", world\")) -> 1.\n * This is because \"hello world\" is cast to 0.\n * In JavaScript, 1 + Number(\"hello\" + \"world\") would give you NaN.\n * Use when coercing a value before computation.\n */\n\nclass Cast {\n    /**\n     * Scratch cast to number.\n     * Treats NaN as 0.\n     * In Scratch 2.0, this is captured by `interp.numArg.`\n     * @param {*} value Value to cast to number.\n     * @return {number} The Scratch-casted number value.\n     */\n    static toNumber (value) {\n        // If value is already a number we don't need to coerce it with\n        // Number().\n        if (typeof value === 'number') {\n            // Scratch treats NaN as 0, when needed as a number.\n            // E.g., 0 + NaN -> 0.\n            if (Number.isNaN(value)) {\n                return 0;\n            }\n            return value;\n        }\n        const n = Number(value);\n        if (Number.isNaN(n)) {\n            // Scratch treats NaN as 0, when needed as a number.\n            // E.g., 0 + NaN -> 0.\n            return 0;\n        }\n        return n;\n    }\n\n    /**\n     * Scratch cast to boolean.\n     * In Scratch 2.0, this is captured by `interp.boolArg.`\n     * Treats some string values differently from JavaScript.\n     * @param {*} value Value to cast to boolean.\n     * @return {boolean} The Scratch-casted boolean value.\n     */\n    static toBoolean (value) {\n        // Already a boolean?\n        if (typeof value === 'boolean') {\n            return value;\n        }\n        if (typeof value === 'string') {\n            // These specific strings are treated as false in Scratch.\n            if ((value === '') ||\n                (value === '0') ||\n                (value.toLowerCase() === 'false')) {\n                return false;\n            }\n            // All other strings treated as true.\n            return true;\n        }\n        // Coerce other values and numbers.\n        return Boolean(value);\n    }\n\n    /**\n     * Scratch cast to string.\n     * @param {*} value Value to cast to string.\n     * @return {string} The Scratch-casted string value.\n     */\n    static toString (value) {\n        return String(value);\n    }\n\n    /**\n     * Cast any Scratch argument to an RGB color array to be used for the renderer.\n     * @param {*} value Value to convert to RGB color array.\n     * @return {Array.<number>} [r,g,b], values between 0-255.\n     */\n    static toRgbColorList (value) {\n        const color = Cast.toRgbColorObject(value);\n        return [color.r, color.g, color.b];\n    }\n\n    /**\n     * Cast any Scratch argument to an RGB color object to be used for the renderer.\n     * @param {*} value Value to convert to RGB color object.\n     * @return {RGBOject} [r,g,b], values between 0-255.\n     */\n    static toRgbColorObject (value) {\n        let color;\n        if (typeof value === 'string' && value.substring(0, 1) === '#') {\n            color = Color.hexToRgb(value);\n        } else {\n            color = Color.decimalToRgb(Cast.toNumber(value));\n        }\n        return color;\n    }\n\n    /**\n     * Determine if a Scratch argument is a white space string (or null / empty).\n     * @param {*} val value to check.\n     * @return {boolean} True if the argument is all white spaces or null / empty.\n     */\n    static isWhiteSpace (val) {\n        return val === null || (typeof val === 'string' && val.trim().length === 0);\n    }\n\n    /**\n     * Compare two values, using Scratch cast, case-insensitive string compare, etc.\n     * In Scratch 2.0, this is captured by `interp.compare.`\n     * @param {*} v1 First value to compare.\n     * @param {*} v2 Second value to compare.\n     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.\n     */\n    static compare (v1, v2) {\n        let n1 = Number(v1);\n        let n2 = Number(v2);\n        if (n1 === 0 && Cast.isWhiteSpace(v1)) {\n            n1 = NaN;\n        } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {\n            n2 = NaN;\n        }\n        if (isNaN(n1) || isNaN(n2)) {\n            // At least one argument can't be converted to a number.\n            // Scratch compares strings as case insensitive.\n            const s1 = String(v1).toLowerCase();\n            const s2 = String(v2).toLowerCase();\n            if (s1 < s2) {\n                return -1;\n            } else if (s1 > s2) {\n                return 1;\n            }\n            return 0;\n        }\n        // Handle the special case of Infinity\n        if (\n            (n1 === Infinity && n2 === Infinity) ||\n            (n1 === -Infinity && n2 === -Infinity)\n        ) {\n            return 0;\n        }\n        // Compare as numbers.\n        return n1 - n2;\n    }\n\n    /**\n     * Determine if a Scratch argument number represents a round integer.\n     * @param {*} val Value to check.\n     * @return {boolean} True if number looks like an integer.\n     */\n    static isInt (val) {\n        // Values that are already numbers.\n        if (typeof val === 'number') {\n            if (isNaN(val)) { // NaN is considered an integer.\n                return true;\n            }\n            // True if it's \"round\" (e.g., 2.0 and 2).\n            return val === parseInt(val, 10);\n        } else if (typeof val === 'boolean') {\n            // `True` and `false` always represent integer after Scratch cast.\n            return true;\n        } else if (typeof val === 'string') {\n            // If it contains a decimal point, don't consider it an int.\n            return val.indexOf('.') < 0;\n        }\n        return false;\n    }\n\n    static get LIST_INVALID () {\n        return 'INVALID';\n    }\n\n    static get LIST_ALL () {\n        return 'ALL';\n    }\n\n    /**\n     * Compute a 1-based index into a list, based on a Scratch argument.\n     * Two special cases may be returned:\n     * LIST_ALL: if the block is referring to all of the items in the list.\n     * LIST_INVALID: if the index was invalid in any way.\n     * @param {*} index Scratch arg, including 1-based numbers or special cases.\n     * @param {number} length Length of the list.\n     * @param {boolean} acceptAll Whether it should accept \"all\" or not.\n     * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.\n     */\n    static toListIndex (index, length, acceptAll) {\n        if (typeof index !== 'number') {\n            if (index === 'all') {\n                return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;\n            }\n            if (index === 'last') {\n                if (length > 0) {\n                    return length;\n                }\n                return Cast.LIST_INVALID;\n            } else if (index === 'random' || index === 'any') {\n                if (length > 0) {\n                    return 1 + Math.floor(Math.random() * length);\n                }\n                return Cast.LIST_INVALID;\n            }\n        }\n        index = Math.floor(Cast.toNumber(index));\n        if (index < 1 || index > length) {\n            return Cast.LIST_INVALID;\n        }\n        return index;\n    }\n}\n\nmodule.exports = Cast;\n\n\n//# sourceURL=webpack:///./node_modules/scratch-vm/src/util/cast.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/util/color.js":
/*!***************************************************!*\
  !*** ./node_modules/scratch-vm/src/util/color.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Color {\n    /**\n     * @typedef {object} RGBObject - An object representing a color in RGB format.\n     * @property {number} r - the red component, in the range [0, 255].\n     * @property {number} g - the green component, in the range [0, 255].\n     * @property {number} b - the blue component, in the range [0, 255].\n     */\n\n    /**\n     * @typedef {object} HSVObject - An object representing a color in HSV format.\n     * @property {number} h - hue, in the range [0-359).\n     * @property {number} s - saturation, in the range [0,1].\n     * @property {number} v - value, in the range [0,1].\n     */\n\n    /** @type {RGBObject} */\n    static get RGB_BLACK () {\n        return {r: 0, g: 0, b: 0};\n    }\n\n    /** @type {RGBObject} */\n    static get RGB_WHITE () {\n        return {r: 255, g: 255, b: 255};\n    }\n\n    /**\n     * Convert a Scratch decimal color to a hex string, #RRGGBB.\n     * @param {number} decimal RGB color as a decimal.\n     * @return {string} RGB color as #RRGGBB hex string.\n     */\n    static decimalToHex (decimal) {\n        if (decimal < 0) {\n            decimal += 0xFFFFFF + 1;\n        }\n        let hex = Number(decimal).toString(16);\n        hex = `#${'000000'.substr(0, 6 - hex.length)}${hex}`;\n        return hex;\n    }\n\n    /**\n     * Convert a Scratch decimal color to an RGB color object.\n     * @param {number} decimal RGB color as decimal.\n     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.\n     */\n    static decimalToRgb (decimal) {\n        const a = (decimal >> 24) & 0xFF;\n        const r = (decimal >> 16) & 0xFF;\n        const g = (decimal >> 8) & 0xFF;\n        const b = decimal & 0xFF;\n        return {r: r, g: g, b: b, a: a > 0 ? a : 255};\n    }\n\n    /**\n     * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.\n     * CC-BY-SA Tim Down:\n     * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb\n     * @param {!string} hex Hex representation of the color.\n     * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.\n     */\n    static hexToRgb (hex) {\n        const shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\n        hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);\n        const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n        return result ? {\n            r: parseInt(result[1], 16),\n            g: parseInt(result[2], 16),\n            b: parseInt(result[3], 16)\n        } : null;\n    }\n\n    /**\n     * Convert an RGB color object to a hex color.\n     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.\n     * @return {!string} Hex representation of the color.\n     */\n    static rgbToHex (rgb) {\n        return Color.decimalToHex(Color.rgbToDecimal(rgb));\n    }\n\n    /**\n     * Convert an RGB color object to a Scratch decimal color.\n     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.\n     * @return {!number} Number representing the color.\n     */\n    static rgbToDecimal (rgb) {\n        return (rgb.r << 16) + (rgb.g << 8) + rgb.b;\n    }\n\n    /**\n    * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.\n    * @param {!string} hex Hex representation of the color.\n    * @return {!number} Number representing the color.\n    */\n    static hexToDecimal (hex) {\n        return Color.rgbToDecimal(Color.hexToRgb(hex));\n    }\n\n    /**\n     * Convert an HSV color to RGB format.\n     * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}\n     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.\n     */\n    static hsvToRgb (hsv) {\n        let h = hsv.h % 360;\n        if (h < 0) h += 360;\n        const s = Math.max(0, Math.min(hsv.s, 1));\n        const v = Math.max(0, Math.min(hsv.v, 1));\n\n        const i = Math.floor(h / 60);\n        const f = (h / 60) - i;\n        const p = v * (1 - s);\n        const q = v * (1 - (s * f));\n        const t = v * (1 - (s * (1 - f)));\n\n        let r;\n        let g;\n        let b;\n\n        switch (i) {\n        default:\n        case 0:\n            r = v;\n            g = t;\n            b = p;\n            break;\n        case 1:\n            r = q;\n            g = v;\n            b = p;\n            break;\n        case 2:\n            r = p;\n            g = v;\n            b = t;\n            break;\n        case 3:\n            r = p;\n            g = q;\n            b = v;\n            break;\n        case 4:\n            r = t;\n            g = p;\n            b = v;\n            break;\n        case 5:\n            r = v;\n            g = p;\n            b = q;\n            break;\n        }\n\n        return {\n            r: Math.floor(r * 255),\n            g: Math.floor(g * 255),\n            b: Math.floor(b * 255)\n        };\n    }\n\n    /**\n     * Convert an RGB color to HSV format.\n     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.\n     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}\n     */\n    static rgbToHsv (rgb) {\n        const r = rgb.r / 255;\n        const g = rgb.g / 255;\n        const b = rgb.b / 255;\n        const x = Math.min(Math.min(r, g), b);\n        const v = Math.max(Math.max(r, g), b);\n\n        // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate\n        let h = 0;\n        let s = 0;\n        if (x !== v) {\n            const f = (r === x) ? g - b : ((g === x) ? b - r : r - g);\n            const i = (r === x) ? 3 : ((g === x) ? 5 : 1);\n            h = ((i - (f / (v - x))) * 60) % 360;\n            s = (v - x) / v;\n        }\n\n        return {h: h, s: s, v: v};\n    }\n\n    /**\n     * Linear interpolation between rgb0 and rgb1.\n     * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.\n     * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.\n     * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.\n     * @return {RGBObject} the interpolated color.\n     */\n    static mixRgb (rgb0, rgb1, fraction1) {\n        if (fraction1 <= 0) return rgb0;\n        if (fraction1 >= 1) return rgb1;\n        const fraction0 = 1 - fraction1;\n        return {\n            r: (fraction0 * rgb0.r) + (fraction1 * rgb1.r),\n            g: (fraction0 * rgb0.g) + (fraction1 * rgb1.g),\n            b: (fraction0 * rgb0.b) + (fraction1 * rgb1.b)\n        };\n    }\n}\n\nmodule.exports = Color;\n\n\n//# sourceURL=webpack:///./node_modules/scratch-vm/src/util/color.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scratch-vm/src/extension-support/argument-type */ \"./node_modules/scratch-vm/src/extension-support/argument-type.js\");\n/* harmony import */ var scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scratch-vm/src/extension-support/block-type */ \"./node_modules/scratch-vm/src/extension-support/block-type.js\");\n/* harmony import */ var scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var scratch_vm_src_util_cast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scratch-vm/src/util/cast */ \"./node_modules/scratch-vm/src/util/cast.js\");\n/* harmony import */ var scratch_vm_src_util_cast__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(scratch_vm_src_util_cast__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mdi_svg_svg_earth_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdi/svg/svg/earth.svg */ \"./node_modules/@mdi/svg/svg/earth.svg\");\n/* harmony import */ var _mdi_svg_svg_earth_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mdi_svg_svg_earth_svg__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar WebExtension = /*#__PURE__*/function () {\n  function WebExtension(runtime) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WebExtension);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"runtime\", void 0);\n\n    this.runtime = runtime;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WebExtension, [{\n    key: \"getInfo\",\n    value: function getInfo() {\n      return {\n        id: 'web',\n        name: 'Web',\n        menuIconURI: _mdi_svg_svg_earth_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n        blockIconURI: _mdi_svg_svg_earth_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n        color1: '#a0a0a0',\n        color2: '#808080',\n        color3: '#606060',\n        blocks: [{\n          opcode: 'goto',\n          blockType: scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_4___default.a.COMMAND,\n          text: 'go to [URL]',\n          arguments: {\n            URL: {\n              type: scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_3___default.a.STRING,\n              defaultValue: 'www.google.co.jp'\n            }\n          }\n        }]\n      };\n    }\n  }, {\n    key: \"goto\",\n    value: function goto(args) {\n      var url = scratch_vm_src_util_cast__WEBPACK_IMPORTED_MODULE_5___default.a.toString(args.URL);\n\n      if (!url.startsWith('https://')) {\n        url = \"https://\".concat(url);\n      }\n\n      window.location.href = url;\n    }\n  }]);\n\n  return WebExtension;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebExtension);\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ }));;
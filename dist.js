"use strict";

require("core-js/modules/es.array.push.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

var _test = require("../vendor/test");

var _utils = require("./utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Swiper from 'react-id-swiper';
// import * as _ from "lodash";
var a = {
  name: "mars"
};
var arr = [1, 2, 3];
console.log(...arr);

var b = _objectSpread(_objectSpread({}, a), {}, {
  name: "sss"
});

console.log(b);

function fun() {
  return _fun.apply(this, arguments);
}

function _fun() {
  _fun = _asyncToGenerator(function* () {
    console.log(...arguments);
  });
  return _fun.apply(this, arguments);
}

Promise.resolve().finally();
fun(_objectSpread(_objectSpread({}, a), {}, {
  age: "18"
}));

class Person {
  constructor() {
    // console.log(_.add(1,2))
    this.age = _utils.global;
    (0, _test.testfun)({
      age: this.age
    });
  }

}

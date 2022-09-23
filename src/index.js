// import { testfun } from "../vendor/test";
import { global, funAsync } from "./utils";
// import Swiper from 'react-id-swiper';
// import * as _ from "lodash";
// import React from "react";
// import ReactDOM from "react-dom";
// import moment from "moment";
// import { Popover, Button } from "gf-antd-mobile";
let a = {
  name: "mars"
}
const arr = [1,2,3]

console.log(...arr);
let b = {...a, name: "sss"}

console.log(b);

async function  fun(...arg) {
  console.log(...arg);
}

// const arrowFun = () => {}
Promise.resolve().finally()
fun({...a, age: "18"})

new Promise();

class Person {
  constructor () {
    // console.log(_.add(1,2))
    this.age = global;
    testfun({age: this.age})
    // moment.locale("en");
    funAsync()
  }
}

// ReactDOM.render(<Button>aaa</Button>, document.getElementById("root"));
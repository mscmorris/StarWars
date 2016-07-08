"use strict"

import angular from "angular"
import DyamicListFactor from "./DynamicListFactory.js"
let moduleName = "DynamicList"

angular
  .module(moduleName, [])
  .factory("DynamicList", DyamicListFactor)

export default moduleName

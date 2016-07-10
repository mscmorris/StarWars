"use strict"

import angular from "angular"
import DynamicListFactory from "./DynamicListFactory.js"
let moduleName = "DynamicList"

angular
  .module(moduleName, [])
  .factory("DynamicList", DynamicListFactory)

export default moduleName

"use strict"

import angular from "angular"
import GenderIconsDirective from "./GenderIconsDirective.js"

let moduleName = "GenderIcons"

angular
  .module(moduleName, [])
  .directive("genderIcon", GenderIconsDirective)


export default moduleName
"use strict"

import angular from "angular"
import PeoplePaneDirective from "./PeoplePaneDirective"

let moduleName = "PeoplePane"

angular
  .module(moduleName, [])
  .directive("peoplePane", PeoplePaneDirective)

export default moduleName
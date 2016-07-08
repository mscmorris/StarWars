"use strict"

import angular from "angular"
import PeoplePaneComponent from "./PeoplePaneComponent.js"

let moduleName = "PeoplePane"

angular
  .module(moduleName, [])
  .component("peoplePane", PeoplePaneComponent)

export default moduleName
"use strict"

import angular from "angular"
import PeopleListComponent from "./PeopleListComponent.js"

let moduleName = "PeopleList"

angular
  .module(moduleName, [])
  .component("peopleList", PeopleListComponent)

export default moduleName
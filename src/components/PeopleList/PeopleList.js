"use strict"

import angular from "angular"
import PeopleListComponent from "./PeopleListComponent.js"
import ListItemComponent from "./ListItemComponent.js"

let moduleName = "PeopleList"

angular
  .module(moduleName, [])
  .component("peopleList", PeopleListComponent)
  .component("listItem", ListItemComponent)

export default moduleName
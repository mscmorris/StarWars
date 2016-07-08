"use strict"

import angular from "angular"
import PeopleListService from "./PeopleListService.js"
import PeopleListComponent from "./PeopleListComponent.js"

let moduleName = "PeopleList"

angular
  .module(moduleName, [])
  .component("peopleList", PeopleListComponent)
  .service("PeopleListService", ["$http", "rx", PeopleListService])

export default moduleName
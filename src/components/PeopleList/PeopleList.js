"use strict"

import angular from "angular"
import PeopleListService from "./PeopleListService.js"
import PeopleListDirective from "./PeopleListDirective.js"

let moduleName = "PeopleList"

angular
  .module(moduleName, [])
  .component("peopleList", PeopleListDirective)
  .service("PeopleListService", ["$http", "rx", PeopleListService])

export default moduleName
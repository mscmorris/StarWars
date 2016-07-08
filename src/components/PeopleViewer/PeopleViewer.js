"use strict"

import angular from "angular"
import PeopleViewerController from "./PeopleViewerController.js"

let moduleName = "PeopleViewer"

angular
  .module(moduleName, [])
  .controller("PeopleViewerController", PeopleViewerController)

export default moduleName
"use strict"

import angular from "angular"

let moduleName = "PeopleViewer"

angular
  .module(moduleName, [])
  .controller("PeopleViewerController", function() {
    this.selected = []
  })

export default moduleName
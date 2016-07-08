"use strict"

import angular from "angular"
import NotAvailable from "./NotAvailable.js"

let moduleName = "StarWarsFilters"

angular
  .module(moduleName, [])
  .filter("na", NotAvailable)

export default moduleName

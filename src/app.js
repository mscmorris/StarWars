"use strict"

// Angular mods
import angular from "angular"
import "angular-route"
import "angular-aria"
import "angular-animate"
import "angular-material"
import "rx-angular"
import "ng-infinite-scroll"

import peopleListModule from "./components/PeopleList/PeopleList.js"
import peoplePaneModule from "./components/PeoplePane/PeoplePane.js"
import peopleViewerModule from "./components/PeopleViewer/PeopleViewer.js"
import dynamicListModule from "./shared/DynamicList/DynamicList.js"

let baseModules = [ "ngRoute", "ngAria", "ngAnimate", "ngMaterial", "infinite-scroll", "rx" ]
let appModules  = [ peopleViewerModule, peopleListModule, peoplePaneModule, dynamicListModule ]
let StarWarsApp = angular
  .module("StarWarsApp", baseModules.concat(appModules))
  .constant("BASE_API", "http://swapi.co/api/people/")

// Base App controller
StarWarsApp.controller("AppController", function($scope) {})
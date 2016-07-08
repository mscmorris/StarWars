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

let StarWarsApp = angular.module("StarWarsApp", [
  "ngRoute", 
  "ngAria", 
  "ngAnimate", 
  "ngMaterial",
  "infinite-scroll",
  "rx",
  peopleViewerModule,
  peopleListModule,
  peoplePaneModule
  ])

// Base App controller
StarWarsApp.controller("AppController", function($scope) {})
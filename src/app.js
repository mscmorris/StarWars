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

let StarWarsApp = angular.module("StarWarsApp", [
  "ngRoute", 
  "ngAria", 
  "ngAnimate", 
  "ngMaterial",
  "infinite-scroll",
  "rx",
  peopleListModule
  ])

// Base App controller
StarWarsApp.controller("AppController", function($scope) {})
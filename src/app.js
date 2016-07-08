"use strict"

// Angular mods
import angular from "angular"
import "angular-route"
import "angular-aria"
import "angular-animate"
import "angular-material"
import "ng-infinite-scroll"

// Modules
import peopleListModule from "./components/PeopleList/PeopleList.js"
import peoplePaneModule from "./components/PeoplePane/PeoplePane.js"
import peopleViewerModule from "./components/PeopleViewer/PeopleViewer.js"
import dynamicListModule from "./shared/DynamicList/DynamicList.js"
import genderIconsModule from "./components/GenderIcons/GenderIcons.js"

// Filters
import filtersModule from "./filters/filters.js"

let baseModules = [ "ngRoute", "ngAria", "ngAnimate", "ngMaterial", "infinite-scroll" ]
let appModules  = [ peopleViewerModule, peopleListModule, peoplePaneModule, dynamicListModule, genderIconsModule, filtersModule ]

let StarWarsApp = angular
  .module("StarWarsApp", baseModules.concat(appModules))
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme("orange")
      .primaryPalette("orange")
      .accentPalette("lime")
      .warnPalette("blue")

    $mdThemingProvider.setDefaultTheme("orange")
      
  })
  .constant("BASE_API", "http://swapi.co/api/people/")

// Base App controller
StarWarsApp.controller("AppController", function($scope) {})
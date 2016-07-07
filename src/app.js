"use strict"

// Angular mods
import angular from "angular"
import "angular-route"
import "angular-aria"
import "angular-animate"
import "angular-material"
import "rx-angular"
import "ng-infinite-scroll"

let StarWarsApp = angular.module("StarWarsApp", [
  "ngRoute", 
  "ngAria", 
  "ngAnimate", 
  "ngMaterial",
  "infinite-scroll",
  "rx"])

StarWarsApp.controller("AppController", function($scope) {})
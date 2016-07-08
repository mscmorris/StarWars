"use strict"

export default function($scope) {  
  $scope.people = []

  this.setPeople = function(people) {
    $scope.people = people
  }
}
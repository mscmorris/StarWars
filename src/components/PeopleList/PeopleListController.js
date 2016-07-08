"use strict"

/**
 * The directive controller to coordinate communication
 * @author mmorris
 */

export default function($scope, rx, PeopleListService) {

  $scope.peopleList = PeopleListService

  $scope.toggle = function(index) {
    this.selected.push($scope.peopleList[index])
    this.onSelectedChanged({ $event: { selected: this.selected }})
  }
}
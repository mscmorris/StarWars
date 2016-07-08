"use strict"

/**
 * The directive controller to coordinate communication
 * @author mmorris
 */

export default function($scope, rx, PeopleListService) {
  
  // var parentController = PeopleViewerController

  $scope.selected = []
  $scope.peopleList = PeopleListService
  
}
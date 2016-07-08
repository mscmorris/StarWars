"use strict" 

export default function() {
  return {
    scope: {
      value: "="
    },
    restrict: "E",
    transclude: true,
    template: "<i class=\"{{classes}}\"></i> {{value}}",
    controller: function($scope) {
      var classes = "fa "
      switch($scope.value) {
        case "male":
          classes += "fa-mars"
          break;
        case "female":
          classes += "fa-venus"
          break;
        default:
          classes += "fa-question"
      }

      $scope.classes = classes
    }
  }
}
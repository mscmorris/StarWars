"use strict"

/**
 * This provides a channel to share state between our children
 * @author mmorris
 */

export default function($scope, DynamicList, BASE_API) {
  let intent$  = $scope.$createObservableFunction("loadMore")

  this.selected = []
  this.list     = []

  // listen for changes to the list and update the list
  DynamicList(intent$, BASE_API)
    .safeApply($scope, list => this.list = list)
    .subscribe()
}
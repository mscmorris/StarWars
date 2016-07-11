"use strict"

/**
 * The component controller to coordinate communication
 * @author mmorris
 */

export default function($scope) {
  this.maxSelectable = 5
  this.intent$ = $scope
    .$createObservableFunction("deselectAll")
    .map(() => { return { type: "deselect" }})

  this.removeSelected = function(model) {
    this.selected = this.selected.filter((e) => model !== e)
    this.onSelectedChange({ $event: { selected: this.selected }}) 
  }

  this.addSelected = function(model) {
    if(!this.canSelectMore()) {
      return
    }
    this.selected.push(model)
    this.onSelectedChange({ $event: { selected: this.selected }})
  }

  this.totalSelected = function() {
    return this.selected.length
  }

  this.canSelectMore = function() {
    return this.totalSelected() < this.maxSelectable
  }
}
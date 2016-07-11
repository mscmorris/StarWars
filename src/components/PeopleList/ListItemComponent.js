"use strict"

export default {
  bindings: {
    "model": "<",
    "displayValue": "<",
    "intent$": "<",
    "onSelected": "&",
    "onDeselected": "&"
  },
  controller: function() {
    this.selected = false
    this.intent$
      .filter(action => action.type === "deselect")
      .subscribe(() => this.deselect())

    this.select = function() {
      this.selected = true
      this.onSelected({ model: this.model })
    }
    this.deselect = function() {
      this.selected = false
      this.onDeselected({ model: this.model })
    }
    this.toggle = function() {
      this.selected ? this.deselect() : this.select()
    }
  },
  template: "<md-list-item ng-class=\"{selected: $ctrl.selected}\" ng-click=\"$ctrl.toggle()\">{{$ctrl.displayValue}}</md-list-item>"
}
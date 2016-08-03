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
    this.enabled  = true

    this.intent$
      .filter(action => action.type === "deselect")
      .subscribe(() => { this.deselect(); this.enable() })

    this.intent$
      .filter(action => action.type === "disable")
      .subscribe(() => this.disable())

    this.intent$
      .filter(action => action.type === "enable")
      .subscribe(() => this.enable())    
      
    this.select = function() {
      this.selected = true
      this.onSelected({ $event: { model: this.model }})
    }
    this.deselect = function() {
      this.selected = false
      this.onDeselected({ $event: { model: this.model }})
    }
    this.enable = function() {
      this.enabled = true
    }
    this.disable = function() {
      this.enabled = false
    }
    this.toggle = function() {
      this.selected ? this.deselect() : this.select()
    }
    this.clickable = function() {
      return this.selected || this.enabled
    }
  },
  template: "<md-list-item ng-class=\"{selected: $ctrl.selected, disabled: !$ctrl.clickable() }\" ng-click=\"$ctrl.clickable() && $ctrl.toggle()\">{{$ctrl.displayValue}}</md-list-item>"
}
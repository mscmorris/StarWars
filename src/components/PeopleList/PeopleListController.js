"use strict"

/**
 * The directive controller to coordinate communication
 * @author mmorris
 */

export default function($scope, rx, PeopleListService) {
  this.peopleList = PeopleListService

  this.toggle = function(index) {
    if(this.isSelected(index)) {
      this.removeSelected(index)
    } else if(this.canSelectMore()) {
        this.addSelected(index)
    }

    this.onSelectedChange({ $event: { selected: this.selected }})
  }

  this.isSelected = function(index) {
    return this.selected.findIndex(e => e.id == index) !== -1
  }

  this.removeSelected = function(index) {
    return this.selected = this.selected.filter(e => e.id !== index)
  }

  this.addSelected = function(index) {
    return this.selected.push(this.peopleList.list.find(e => e.id == index))
  }

  this.canSelectMore = function() {
    return this.selected.length < 5
  }
}
"use strict"

/**
 * The component controller to coordinate communication
 * @author mmorris
 */

export default function(rx) {
  this.maxSelectable = 5
  this.intent$ = new rx.Subject()

  this.deselectAll = function() {
    this.intent$.onNext({ type: "deselect" })
  }

  this.triggerUpdates = function() {
    let array$ = rx.Observable.from(this.selected)
    let count$ = array$.count()
    let disableAll$ = count$
      .filter(count => count >= this.maxSelectable)
      .map(() => { return { type: "disable" }})

    let enableAll$ = count$
      .filter(count => count < this.maxSelectable)
      .map(() => { return { type: "enable" }})

    disableAll$.subscribe(action => this.intent$.onNext(action))
    enableAll$.subscribe(action => this.intent$.onNext(action))
  }

  this.removeSelected = function(model) {
    this.selected = this.selected.filter((e) => model !== e)
    this.triggerUpdates()
    this.onSelectedChange({ $event: { selected: this.selected }}) 
  }

  this.addSelected = function(model) {
    if(!this.canSelectMore()) return
    this.selected.push(model)
    this.triggerUpdates()
    this.onSelectedChange({ $event: { selected: this.selected }})
  }

  this.totalSelected = function() {
    return this.selected.length
  }

  this.canSelectMore = function() {
    return this.totalSelected() < this.maxSelectable
  }
}
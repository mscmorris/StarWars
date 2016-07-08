"use strict"

/**
 * A list which mediates it's own state fetching from an http site
 * @author mmorris
 */

export default function($http) {

  let DynamicList = function(startUrl) {
    this.busy      = false
    this.items     = []
    this.nextPage  = startUrl 
  }

  DynamicList.prototype.fetch = function() {
    if(this.nextPage === null || this.busy) {
      return
    }

    this.busy = true

    $http
    .get(this.nextPage)
    .then(result => {
      this.busy = false
      this.nextPage = result.data.next
      result.data.results.forEach(e => {
        e.id = this.generateId(this.items.length)
        this.items.push(e)
      })
    })
  }

  DynamicList.prototype.generateId = function(seed) {
    return seed + 1
  }

  return DynamicList
}
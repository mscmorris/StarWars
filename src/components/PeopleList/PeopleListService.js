"use strict"

/**
 * Simple service to manage our SWAPI fetches
 * @author mmorris
 */

// The swapi people API base endpoint
const BASE_ENDPOINT = "http://swapi.co/api/people/"

function generateId(seed) {
  return seed + 1
}

// main export
export default function ($http, rx) {

  this.next = BASE_ENDPOINT
  this.busy = false
  this.list = []

  this.fetch = function() {
    if(this.next === null || this.busy) return
      
    this.busy = true

    $http
    .get(this.next)
    .then((result) => {
      this.busy = false
      this.next = result.data.next
      result.data.results.forEach((e) => {
        e.id = generateId(this.list.length)
        this.list.push(e)
      })
    })
  }
}
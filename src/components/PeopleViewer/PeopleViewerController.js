"use strict"

/**
 * This provides a channel to share state between our children
 * @author mmorris
 */

export default function(DynamicList) {
  this.selected = []
  this.items = new DynamicList("http://swapi.co/api/people/")
}
"use strict"

/**
 * This provides a channel to share state between our children
 * @author mmorris
 */

export default function(DynamicList, BASE_API) {
  this.selected = []
  this.items = new DynamicList(BASE_API)
}
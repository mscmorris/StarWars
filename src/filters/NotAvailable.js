"use strict"

/**
 * Friendly way to say N/A
 * @author mmorris
 */

export default function() {
  return function(string) {
    if(string === "n/a") {
      return "Not Available"
    }

    return string
  }
}
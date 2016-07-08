"use strict"

import PeoplePaneController from "./PeoplePaneController.js"

/**
 * This component receives communication to update it's display
 * @author mmorris
 */

export default function() {
  return {
    scope: {},
    transclude: true,
    controller: PeoplePaneController
  }
}
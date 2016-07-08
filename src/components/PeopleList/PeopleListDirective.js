"use strict"

import PeopleListController from "./PeopleListController.js"

/**
 * This directive will work with our viewer and person pane
 * to display manage communications between this list and
 * the selected people display
 * @author mmorris
 */

export default {
    restrict: "E",
    transclude: true,
    controller: PeopleListController,
    templateUrl: "components/PeopleList/PeopleList.html",
    bindings: {
      "selected": "<",
      "onSelectedChanged": "&"
    }
}
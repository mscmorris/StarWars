"use strict"

import PeopleListController from "./PeopleListController.js"

/**
 * This directive will work with our viewer and person pane
 * to display manage communications between this list and
 * the selected people display
 * @author mmorris
 */

export default {
    controller: PeopleListController,
    templateUrl: "components/PeopleList/PeopleList.html",
    bindings: {
      "list": "<",
      "selected": "<",
      "onSelectedChange": "&",
      "onInfiniteScroll": "&"
    }
}
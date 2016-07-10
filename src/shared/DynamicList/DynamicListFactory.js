"use strict"

/**
 * A list which mediates it's own state fetching from an http site
 * @author mmorris
 */
 export default function($http, rx) {
  function HTTPDriver(request$) {
    return request$.flatMapLatest(url => Rx.Observable.fromPromise($.get(url))).share()
  }

  return function DynamicList(intent$, startWith) {
    // set up our state
    const url$  = new Rx.BehaviorSubject(startWith)
    const page$ = new Rx.BehaviorSubject([])
    // Perform the logic
    const request$ = Rx.Observable.when(intent$.and(url$).thenDo((e, url) => url))
    const response$ = HTTPDriver(request$)
    // We're only interested in non-null values
    const nextUrl$ = response$.map(res => res.next).filter(next => next)
    const nextPage$ = response$.map(res => res.results)
    // notify our state that we have changes
    nextUrl$.subscribe(url$)
    nextPage$.subscribe(page$)
    // propagate
    return page$
  }
}
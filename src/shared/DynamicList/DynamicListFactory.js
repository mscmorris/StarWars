"use strict"

/**
 * A reactive http-driven list
 * @author mmorris
 */
 export default function($http, rx) {
  let HTTPDriver = (request$) => request$.flatMapLatest(url => rx.Observable.fromPromise($http.get(url))).share()
  let generateIds = function(array) {
    return array.map((el, idx) => { el.id = idx; return el })
  }

  return function DynamicList(intent$, startWith) {
    const url$  = new rx.BehaviorSubject(startWith)
    const request$ = rx.Observable.when(intent$.and(url$).thenDo((e, url) => url))
    const response$ = HTTPDriver(request$)
    const nextUrl$ = response$.map(res => res.data.next).filter(next => next)
    const nextPage$ = response$.map(res => res.data.results).startWith([])
    nextUrl$.subscribe(url$)
    return nextPage$.scan((a, n) => a.concat(n), []).map(generateIds)
  }
}
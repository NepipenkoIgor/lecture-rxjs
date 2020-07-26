import { fromEvent, iif, merge, Observable, of, zip } from "rxjs";
import { filter, map, pluck, switchMap } from "rxjs/operators";

export const touchStartEvent$ = getX(merge(
    fromEvent<MouseEvent>(document, 'mousedown'),
    fromEvent<TouchEvent>(document, 'touchstart')
))

export const touchEndEvent$ = getX(merge(
    fromEvent<MouseEvent>(document, 'mouseup'),
    fromEvent<TouchEvent>(document, 'touchend')
))

export function getX(source$: Observable<MouseEvent | TouchEvent>) {
    return source$
        .pipe(
            switchMap((event: MouseEvent | TouchEvent) => {
                return iif(
                    () => event instanceof TouchEvent,
                    of(event as TouchEvent).pipe(pluck('changedTouches', 0, "clientX")),
                    of(event as MouseEvent).pipe(pluck('clientX')),
                )
            })
            // map((event: MouseEvent | TouchEvent) => {
            //     if (event instanceof TouchEvent) {
            //         return event.changedTouches[0].clientX;
            //     }
            //     return event.clientX
            // })
        )
}

export function swipe(source1$: Observable<[number, number]>) {
    return source1$.pipe(
        map(([startX, endX]) => {
            console.log('VALUES!!', startX, endX)
            return startX - endX
        }),
        filter((v) => v !== 0)
    )
}

export const swipe$ = swipe(zip(touchStartEvent$, touchEndEvent$));



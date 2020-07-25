import { fromEvent, merge, Observable, zip } from "rxjs";
import { filter, map } from "rxjs/operators";

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
            map((event: MouseEvent | TouchEvent) => {
                if (event instanceof TouchEvent) {
                    return event.changedTouches[0].clientX;
                }
                return event.clientX
            })
        )
}

export function swipe(source1$: Observable<[number, number]>) {
    return source1$.pipe(
        map(([startX, endX]) => startX - endX),
        filter((v) => v !== 0)
    )
}

export const swipe$ = swipe(zip(touchStartEvent$, touchEndEvent$));



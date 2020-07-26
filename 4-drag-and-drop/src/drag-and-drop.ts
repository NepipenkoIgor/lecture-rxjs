import { fromEvent, Observable } from "rxjs";
import { concatMap, map, takeUntil } from "rxjs/operators";

export const box = document.querySelector('.draggable') as HTMLDivElement;

const mousedown$ = fromEvent<MouseEvent>(box, 'mousedown');
const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
const mouseup$ = fromEvent<MouseEvent>(box, 'mouseup');
export const drag$ = drag(mousedown$, mousemove$, mouseup$)

export function drag(
    source1$: Observable<MouseEvent>,
    source2$: Observable<MouseEvent>,
    source3$: Observable<MouseEvent>) {
    return source1$.pipe(
        concatMap((startEv) => {
            return source2$
                .pipe(
                    map((moveEv) => {
                        return {
                            left: moveEv.clientX - startEv.offsetX,
                            top: moveEv.clientY - startEv.offsetY,
                        }
                    }),
                    takeUntil(source3$)
                )
        })
    )
}

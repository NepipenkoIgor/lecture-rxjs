import '../../assets/css/style.css';
import { terminalLog } from "../../utils/log-in-terminal";
import { fromEvent, interval, of } from "rxjs";
import { concatMap, exhaustMap, map, mergeAll, mergeMap, pluck, switchAll, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// interval(1000)
//     .pipe(map((v) => {
//         return of(v * 2)
//     }))
//     .subscribe((v) => {
//         v.subscribe((j) => {
//             terminalLog(j);
//         })
//     })

const inputEl = document.querySelector('input') as HTMLInputElement
const sequence$ = fromEvent<InputEvent>(inputEl, 'input');

sequence$
    .pipe(
        pluck('target', 'value'),
        exhaustMap((v) => {
            return ajax(`http://learn.javascript.ru/courses/groups/api/participants?key=1c4jhut?text=${v}`)
        }),
        // map + switchAll() = switchMap()
        // map + mergeAll() = mergeMap()
        // map + concatAll() = concatMap() === mergeMap(1)
        // map + exhaust() = exhaustMap()
    )
    .subscribe((v) => {
        terminalLog(v);
    })

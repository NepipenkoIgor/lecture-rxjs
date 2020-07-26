import '../../assets/css/style.css';
import { terminalLog } from "../../utils/log-in-terminal";
import { asapScheduler, asyncScheduler, combineLatest, from, interval, of, queueScheduler, Subject } from "rxjs";
import { filter, map, observeOn, take } from "rxjs/operators";


// terminalLog('start');
// setTimeout(()=>terminalLog('timeout 1'));
// setTimeout(()=>terminalLog('timeout 2'));
// Promise.resolve().then(()=>terminalLog('promise 1'));
// Promise.resolve().then(()=>terminalLog('promise 2'));
// terminalLog('end');
// --task1--task2--  --- task3
//   start  timeout1     timeout2
//   end
//   promise 1
//   promise 2

// terminalLog('start');
// from([1, 2, 3, 4, 5], asyncScheduler)
//     .subscribe((v) => {
//         Promise.resolve().then(() => terminalLog('promise 1'));
//         terminalLog(`MACROTASK ${v}`)
//     })
//
// terminalLog('end');

// const a$ = from([1, 2], asyncScheduler);
// const b$ = of(10);
//
// const c$ = combineLatest([a$, b$])
//     .pipe(map(([a, b]: any) => a + b))
//
// c$.subscribe((v) => {
//     terminalLog(v)
// })

const signal: Subject<any> = new Subject<any>();

let count = 0;
const someCalculation = (count: number) => terminalLog(`do some calculation with ${count}`);

terminalLog('start');
signal.pipe(
    //
    //
    observeOn(queueScheduler),
    take(1600))
    .subscribe(() => {
        someCalculation(count);
        signal.next(count++)
    })
signal.next(count++)
terminalLog('start');
// queueScheduler
// asapScheduler
// asyncScheduler
// animationFrameScheduler

from([1, 2, 3, 4])
    .pipe(
        filter((v) => v < 3),
        observeOn(asyncScheduler),
        map(()=>{})
    )

// import '../../assets/css/style.css';
// import { terminalLog } from "../../utils/log-in-terminal";
// import { interval, Observable, pipe, Subscriber } from "rxjs";
// import { filter, takeUntil } from "rxjs/operators";

// function doNothing(source: Observable<any>) {
//     return source;
// }
//
// function toText(source: Observable<any>) {
//     return new Observable((subscriber => {
//         subscriber.next('My text Value')
//         subscriber.complete();
//     }));
// }
//
// function double(source$: Observable<any>) {
//     return new Observable((subscriber => {
//         source$.subscribe((v) => {
//             subscriber.next(v * 2);
//         }, (err) => {
//             subscriber.error(err);
//         }, () => {
//             subscriber.complete();
//         })
//     }))
// }
//
// interval(1000)
//     .pipe(
//         double
//     )
//     .subscribe((v) => {
//         terminalLog(v)
//     }, () => {
//     }, () => {
//         terminalLog('completed')
//     })
//
// class DoubleSubscriber extends Subscriber<number> {
//     next(value: number) {
//         super.next(value * 2);
//     }
// }
//
// function double(source$: Observable<any>) {
//     return source$.lift({
//         call(_subscriber: Subscriber<any>, source: Observable<any>) {
//             source.subscribe(new DoubleSubscriber(_subscriber))
//         }
//     })
//     // const o$ = new Observable();
//     // o$.source = source$;
//     // o$.operator = {
//     //     call(_subscriber: Subscriber<any>, source: Observable<any>) {
//     //         source.subscribe(new DoubleSubscriber(_subscriber))
//     //     }
//     // }
//     // return o$;
// }

// const pipe = (...fns: Function[]) => (source: Observable<any>) =>
//     fns.reduce((acc, fn) => fn(acc), source)

// const doubleWithFilter = pipe(
//     double,
//     filter((v: number) => v % 3 === 0)
// )
//
// interval(1000)
//     .pipe(
//         doubleWithFilter
//     )
//     .subscribe((v) => {
//         terminalLog(v)
//     }, () => {
//     }, () => {
//         terminalLog('completed')
//     })

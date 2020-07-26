// import { EMPTY, interval, of, throwError, zip } from "rxjs";
// import { catchError, delay, map, retry, retryWhen, switchMap, tap } from "rxjs/operators";
//
// const sequence1$ = interval(500);
// const sequence2$ = of('1', '2', '3', 4, '5', '6', '7')
//
// const sequence$ = zip(sequence1$, sequence2$)
//
// sequence$.pipe(
//     switchMap(([_x, y]) => {
//         return of(y)
//             .pipe(
//                 map((y) => {
//                     // try{
//                     //     return (y as any).toUpperCase()
//                     // } catch (e) {
//                     //      return  'N'
//                     // }
//                     return (y as any).toUpperCase()
//                 }),
//                 // retryWhen((obs)=>obs.pipe(delay(5000))),
//                 catchError((err, obs) => {
//                     terminalLog(`catchError => ${err}`);
//                     return throwError('my custom err');
//                 }),
//                 tap((v) => {
//                     terminalLog(`tap => ${v}`);
//                     console.log()
//                 })
//             )
//     })
// ).subscribe((v) => {
//     terminalLog(v);
// }, (err) => {
//     terminalLog(`ErrCB ${err}`);
// }, () => {
//     terminalLog('completed');
// })

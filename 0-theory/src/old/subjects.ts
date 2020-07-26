// import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";
//
// import './component-1';
// import './component-2';
// import { ajax } from "rxjs/ajax";
// // Subject = Observable + observer
//
// // sequence$$.next('RxJS');
// // sequence$$.next('is');
// // sequence$$.next('awesome');
//
// // sequence$$.subscribe((v) => {
// //     terminalLog(v);
// // })
// // sequence$$.next('but');
// // sequence$$.next('we');
// // sequence$$.next('love');
// // sequence$$.next('TypeScript');
// // sequence$$.complete();
// // setTimeout(()=>{
// //     sequence$$.subscribe((v) => {
// //         terminalLog(v);
// //     })
// // }, 5000)
//
// function getItems(url: string) {
//     let sequence$$: AsyncSubject<any>;
//     return new Observable((subscriber) => {
//         if (!sequence$$) {
//             sequence$$ = new AsyncSubject<any>() // Observable + observer
//             ajax(url).subscribe(sequence$$)
//         }
//         return sequence$$.subscribe(subscriber)
//     })
// }
//
// const items = getItems('http://learn.javascript.ru/courses/groups/api/participants?key=1c4jhut')
//
//
// items.subscribe((v) => {
//     console.log(v);
// })
//
// setTimeout(()=>{
//     items.subscribe((v) => {
//         console.log(v);
//     })
// }, 5000)

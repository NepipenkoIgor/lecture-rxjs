// import { ConnectableObservable, interval, ReplaySubject, Subject, Subscription } from "rxjs";
// import { multicast, publish, refCount, share } from "rxjs/operators";
//
// // const subject = new ReplaySubject(1)
// const regularObservable = interval(1000)
//     .pipe(
//         share()
//         // publish(), //  multicast+subject;
//         // refCount()
//         // multicast(subject)
//     ) //as ConnectableObservable<any>
//
// const sub1: Subscription = regularObservable.subscribe((v) => {
//     terminalLog(`Sub 1 => ${v}`);
// })
//
// // setTimeout(() => {
// //     connectableObservable.connect()
// // }, 2000)
// let sub2: Subscription;
// setTimeout(() => {
//     sub2 = regularObservable.subscribe((v) => {
//         terminalLog(`Sub 2 => ${v}`);
//     })
// }, 5000)
//
//
// setTimeout(() => {
//     // sub1.unsubscribe();
//     sub2.unsubscribe();
// }, 7000)
//
// setTimeout(() => {
//     regularObservable.subscribe((v) => {
//         terminalLog(`Sub 3=> ${v}`);
//     });
// }, 9000)

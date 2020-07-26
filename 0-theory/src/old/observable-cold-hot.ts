//
// import { fromEvent, interval, Observable } from "rxjs";
// import { terminalLog } from "../../../utils/log-in-terminal";
//
//
// const  sequence = new Observable((subscriber)=>{
//     terminalLog('Init me')
//     let count = 1;
//     const intId = setInterval(() => {
//         count++;
//         subscriber.next(Date.now());
//         if(count === 5){
//             subscriber.complete();
//             clearInterval(intId);
//         }
//     }, 1000)
// })
// //     //interval(1000)
// sequence.subscribe((v) =>terminalLog(`Sub 1 => ${v}`),()=>{}, ()=>{
//     terminalLog('completed')
// })
//
// setTimeout(()=>{
//     sequence.subscribe((v) =>terminalLog(`Sub 2 => ${v}`),()=>{}, ()=>{
//         terminalLog('completed')
//     })
// } , 5000)
//
// // const sequence: Observable<MouseEvent> = new Observable((subscriber)=>{
// //     document.addEventListener('click', (e: MouseEvent)=>{
// //         subscriber.next(e)
// //     })
// // })
//
// // sequence.subscribe((v: MouseEvent) =>terminalLog(`Sub 1 => ${v.clientX}`))
// //
// // setTimeout(()=>{
// //     sequence.subscribe((v: MouseEvent) =>terminalLog(`Sub 2 => ${v.clientX}`))
// // } , 5000)

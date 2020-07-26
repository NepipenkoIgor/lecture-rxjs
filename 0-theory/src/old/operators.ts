// import '../../assets/css/style.css';
// // import { terminalLog } from "../../utils/log-in-terminal";
// import { interval } from "rxjs";
// import { filter, map, skip, take, tap } from "rxjs/operators";
//
// const sequence1$ = interval(1000);
//
// /*
//   sequence1$: ---0---1---2---3---4---5---6--
//       filter((x)=>x%2 === 0)
//               ---0-------2-------4-------6--
//       tap((x)=>x*2)
//               ---0-------2-------4-------6--
//       map((x)=>x*2)
//               ---0-------4-------8-------12--
//       tap((x)=>x*2)
//               ---0-------4-------8-------12--
//       skip(2)
//               -------------------8-------12--
//       take(2)
//   sequence2$  -------------------8-------12|
//  */
//
// const sequence2$ = sequence1$.pipe(
//     filter((x)=>x%2 === 0),
//     tap((x)=>x*2),
//     map((x) => x * 2),
//     tap((x)=>x*2),
//     skip(2),
//     take(2)
// )
//
// // sequence2$.subscribe((v) => terminalLog(v), ()=>{}, ()=>{
// //     terminalLog('completed')
// // })

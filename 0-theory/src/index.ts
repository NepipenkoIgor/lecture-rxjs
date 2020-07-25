import '../../assets/css/style.css';
import { terminalLog } from "../../utils/log-in-terminal";
import { defer, from, iif, of, range, timer } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { map } from "rxjs/operators";
//
// of(1, 2, 3, 4, 5)
//     .subscribe((v) => terminalLog(v))


// from([1, 2, 3, 4, 5])
//     .subscribe((v) => terminalLog(v))

// range(2, 10)
//     .subscribe((v) => terminalLog(v))

// timer(5000, 1000)
//     .subscribe((v) => terminalLog(v))
// const random = Math.round(Math.random() * 10)
// const sequence = iif(() => {
//     return random >= 5;
// }, of(`First, number is ${random}`), of(`Second, number is ${random}`))
// const sequence = defer(() => {
//     return random >= 5
//         ? random >= 8
//             ? of(`First, number is ${random}`)
//             : of(`Third, number is ${random}`)
//         : of(`Second, number is ${random}`)
// })
// sequence.subscribe((v) => terminalLog(v))

// const sequence = from(fetch('http://learn.javascript.ru/courses/groups/api/participants?key=1c4jhut')
//     .then((res)=>res.json()))
// const sequence = ajax('http://learn.javascript.ru/courses/groups/api/participants?key=1c4jhut')
//     .pipe(
//         map((res: AjaxResponse) => res.response)
//     )
// sequence.subscribe((v) => console.log(v))

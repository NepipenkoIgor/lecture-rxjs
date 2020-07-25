import '../../assets/css/style.css';
import { interval } from "rxjs";
import { terminalLog } from "../../utils/log-in-terminal";
import {skipLimit} from './skip-limit'
const sequence$ =  interval(1000)
    /*
sequence$:  ---0---1---2---3---4---5---6---
     skipLimit(2, 3)
sequence2$: -----------2---3---4-----------
 */

sequence$.pipe(
    skipLimit(2, 3)
)
.subscribe((v)=>{
    terminalLog(v);
})

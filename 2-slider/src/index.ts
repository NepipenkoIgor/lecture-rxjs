import 'bootstrap';
import 'bootstrap-slider';
import '../../assets/css/style.css';
import './styles.css';

import './slider'
import { sliderResultSequence$ } from "./slider";
import { terminalLog } from "../../utils/log-in-terminal";

sliderResultSequence$
    .subscribe(([_e, value]: [MouseEvent, number]) => {
        terminalLog(`Результат голосования: ${value}%`)
    })

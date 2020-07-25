import '../../assets/css/style.css';
import { terminalLog } from "../../utils/log-in-terminal";
import { swipe$ } from "./swipe";

swipe$.subscribe((direction) => {
    if (direction > 0) {
        terminalLog(`Swipe left`);
        return
    }
    terminalLog(`Swipe right`);

})

import { singleton } from "./service";
import { terminalLog } from "../../../utils/log-in-terminal";

singleton.data.subscribe((data)=>{
    terminalLog(data)
})

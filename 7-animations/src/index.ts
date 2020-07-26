import '../../assets/css/style.css';
import './styles.css';
import { animateDown } from "./animate";
import { terminalLog } from "../../utils/log-in-terminal";

const element = document.querySelector('.animated-shape') as HTMLElement;
animateDown(element)
    .subscribe((frame)=>{
        terminalLog(`Координата: ${frame}px`)
    }, ()=>{}, ()=>{
        terminalLog(`Анимация окончена`)
    })

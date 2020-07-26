import '../../assets/css/style.css';
import './styles.css';
import { ajax } from "rxjs/ajax";
import { fromEvent } from "rxjs";
import { liveSearch, request } from "./live-search";

const inputEl = document.querySelector('#search') as HTMLInputElement;
const container = document.querySelector('.container') as HTMLDivElement;


liveSearch(
    fromEvent<InputEvent>(inputEl, 'input'),
    (text: string) => request(ajax(`https://api.github.com/search/repositories?q=${text}`))
)
    .subscribe((htmlStr: string) => {
        container.innerHTML = htmlStr;
    })

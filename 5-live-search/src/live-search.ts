import { EMPTY, fromEvent, Observable } from "rxjs";
import {
    bufferCount, catchError,
    concatAll,
    debounceTime,
    distinctUntilChanged,
    filter, map,
    pluck,
    reduce,
    switchMap, tap
} from "rxjs/operators";
import { AjaxResponse } from "rxjs/ajax";


interface IResult {
    name: string,
    description: string;
    owner: {
        avatar_url: string
    }
}

export function liveSearch(source$: Observable<InputEvent>, sourceFn: (text: string) => Observable<any>) {
    return source$
        .pipe(
            debounceTime(300),
            pluck<InputEvent, string>('target', 'value'),
            filter((text: string) => text.length > 3),
            tap(()=>{
                // loader show
            }),
            distinctUntilChanged(),
            switchMap(sourceFn)
        )
}


export function request(source$: Observable<AjaxResponse>): Observable<string> {
    return source$
        .pipe(
            pluck<AjaxResponse, IResult[]>('response', 'items'),
            concatAll(),
            map((item: IResult) => createCard(item)),
            bufferCount(3),
            reduce((resultStr, htmlStrs) => {
                return resultStr += createRow(htmlStrs)
            }, ''),
            map((htmlStr) => htmlStr.trim().replace(/\s+(<)/g, '<')),
            tap(()=>{
                // loader hide
            }),
            catchError(() => EMPTY)
        )
}


export function createCard({name, description, owner: {avatar_url}}: IResult) {
    return `
   <div class="col-sm-6 col-md-4">
      <div class="card">
          <img class="card-img-top" src=${avatar_url} alt=${name}>
          <div class="card-body">
              <h5 class="card-title">${name}</h5> 
              <p class="card-text">${description}</p> 
          </div>
      </div>
   </div>`
}

export function createRow(htmlStrs: string[]) {
    return `<div class="row">${htmlStrs.join(' ')}</div>`
}

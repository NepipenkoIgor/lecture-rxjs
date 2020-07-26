import { Observable, timer } from "rxjs";
import { ajax } from "rxjs/ajax";
import { concatAll, pluck, share, shareReplay, switchMap, toArray } from "rxjs/operators";


class UserService {
    private  uniqueNameSequence$!: Observable<any>

    public getNames(){
        if(!this.uniqueNameSequence$){
            this.uniqueNameSequence$ =  timer(0, 16000)
                .pipe(
                    switchMap(()=>{
                        return ajax('http://learn.javascript.ru/courses/groups/api/participants?key=1c4jhut')
                            .pipe(
                                pluck('response'),
                                concatAll(),
                                pluck('profileName'),
                                toArray(),
                            )
                    }),
                    shareReplay()
                )
        }
        return this.uniqueNameSequence$;
    }
}

export const userService = new UserService();

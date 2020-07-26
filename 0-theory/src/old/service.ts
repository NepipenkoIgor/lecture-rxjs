import { Subject } from "rxjs";


class DataService {
    private dataSequence$ = new Subject()

    public get data() {
        return this.dataSequence$.asObservable();
    }

    public setData(data: any) {
        this.dataSequence$.next(data);
    }
}

export const singleton = new DataService();

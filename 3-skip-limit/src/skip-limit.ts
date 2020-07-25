import { Observable, Subscriber, TeardownLogic } from "rxjs";

export class SkipLimitSubscriber extends Subscriber<any> {

    private _interval: number = 1;
    private _count: number = 1;

    public constructor(subscriber: Subscriber<any>,
                       private _skip: number, private _limit: number) {
        super(subscriber);
    }

    public next(value?: any) {
       // [ 2, 5]
        // [7, 10]
        const borderLeft = this._interval * (this._skip + this._limit) - this._limit;
        const borderRight = borderLeft + this._limit;
        if(borderLeft < this._count && this._count <= borderRight){
            super.next(value);
            this._count++;
            if(borderRight< this._count){
                this._interval++;
            }
            return;
        }
        this._count++;

    }

}

export function skipLimit(skip: number, limit: number) {
    return (source: Observable<any>) => {
        return source.lift({
            call(subscriber: Subscriber<any>, source: any): TeardownLogic {
                source.subscribe(new SkipLimitSubscriber(subscriber, skip, limit))
            }
        })
    }
}

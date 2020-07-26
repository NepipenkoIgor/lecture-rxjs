import { TestScheduler } from "rxjs/testing";
import { getX, swipe } from "./swipe";
import { hot } from "jasmine-marbles";
import { zip } from "rxjs";

function createTouchEvent(clientX: number) {
    return new TouchEvent('event', {
        changedTouches: [new Touch({clientX, identifier: 1, target: new EventTarget()})]
    })
}

describe('[Swipe] test functionality jasmine marbles', () => {
    it('getX should transform right', () => {
        const touch1$ = hot('-a--b----c--|', {
            a: createTouchEvent(10),
            b: createTouchEvent(1),
            c: createTouchEvent(22)
        })
        const expected$ = hot('          -a--b----c--|', {
            a: 10, b: 1, c: 22
        })
        expect(
            getX(touch1$)
        ).toBeObservable(expected$)
    })
    it('swipe should transform right', () => {
        const touch1$ = hot('-a----b------|', {
            a: createTouchEvent(10),
            b: createTouchEvent(1),
        })
        const touch2$ = hot('---a-----b-----c---|', {
            a: createTouchEvent(2),
            b: createTouchEvent(33),
            c: createTouchEvent(133),
        })
        const expected$ = hot('          ---a-----b---|', {
            a: 8, b: -32
        })
        expect(
            swipe(zip(getX(touch1$), getX(touch2$)))
        ).toBeObservable(expected$)
    })
})

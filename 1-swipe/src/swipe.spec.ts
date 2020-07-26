import { TestScheduler } from "rxjs/testing";
import { getX } from "./swipe";

function createTouchEvent(clientX: number) {
    return new TouchEvent('event', {
        changedTouches: [new Touch({clientX, identifier: 1, target: new EventTarget()})]
    })
}

describe('[Swipe] test functionality', () => {
    let testScheduler: TestScheduler
    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected)
        })
    })
    it('getX should transform right', () => {
        testScheduler.run((helpers) => {
            const {hot, expectObservable} = helpers;
            const touch1 = hot('-a--b----c--|', {
                a: createTouchEvent(10),
                b: createTouchEvent(1),
                c: createTouchEvent(22)
            })
            const expected = '          -a--b----c--|'
            expectObservable(
              getX(touch1)
            ).toBe(expected, {
                a: 10, b: 1, c: 22
            })
        })
    })
})

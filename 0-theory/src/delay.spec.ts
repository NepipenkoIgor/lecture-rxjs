import { TestScheduler } from "rxjs/testing";
import { delay } from "./delay";
import { map } from "rxjs/operators";

describe('Rxjs base test ', () => {
    let testScheduler: TestScheduler
    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected)
        })
    })
    it('generate stream right', () => {
        testScheduler.run((helpers) => {
            const {cold, expectObservable} = helpers;
            const sequence = cold('-a--b--c---|', {a: 2, b: 3, c: 4})
            const expected = '           9s -a--b--c---|'
            expectObservable(
                sequence
                    .pipe(
                        delay(9000),
                        map((x) => x ** 2)
                    )
            ).toBe(expected, {
                a: 4, b: 9, c: 16
            })
        })
    })
})

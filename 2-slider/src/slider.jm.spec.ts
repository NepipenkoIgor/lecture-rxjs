import { hot } from "jasmine-marbles";
import { getValue, sliderSequence } from "./slider";

const fakeElement = {};
const initialValueObj = {
    element: {} as HTMLElement,
    value: 5
};

(window as any).drawCb = function () {
}

describe('[Slider] test functionality jasmine marbles', () => {
    beforeEach(() => {
        spyOn(window as any, 'drawCb')
    })
    xit('getValue  should return value and start with initial value', () => {
        const sliderActions$ = hot('-a--b----c--|', {
            a: {delegateTarget: {previousElementSibling: fakeElement}, value: {newValue: 6}},
            b: {delegateTarget: {previousElementSibling: fakeElement}, value: {newValue: 3}},
            c: {delegateTarget: {previousElementSibling: fakeElement}, value: {newValue: 7}},
        })
        const expected$ = hot('         ea--b----c--|', {
            e: 5, a: 6, b: 3, c: 7
        })
        expect(
            getValue(sliderActions$, initialValueObj, (window as any).drawCb)
        ).toBeObservable(expected$)
    })
    xit('should call draw cb', () => {
        const sliderActions$ = hot('-a--b----c--|', {
            a: {delegateTarget: {previousElementSibling: fakeElement}, value: {newValue: 6}},
            b: {delegateTarget: {previousElementSibling: fakeElement}, value: {newValue: 3}},
            c: {delegateTarget: {previousElementSibling: fakeElement}, value: {newValue: 7}},
        })

        getValue(sliderActions$, initialValueObj, (window as any).drawCb)
            .subscribe(() => {
            }, () => {
            }, () => {
                expect((window as any).drawCb).toHaveBeenCalledTimes(4);
                expect((window as any).drawCb.calls.allArgs()).toEqual([
                    [initialValueObj],
                    [{element: fakeElement, value: 6}],
                    [{element: fakeElement, value: 3}],
                    [{element: fakeElement, value: 7}],
                ]);
            })
    })
    it('sliderSequence should give right percentage', () => {
        const sliderActions1$ = hot('-a----------|', {
            a: {delegateTarget: {previousElementSibling: fakeElement}, value: {newValue: 6}}
        });
        const sliderActions2$ = hot('----b-------|', {
            b: {delegateTarget: {previousElementSibling: fakeElement}, value: {newValue: 3}}
        });
        const sliderActions3$ = hot('---------c--|', {
            c: {delegateTarget: {previousElementSibling: fakeElement}, value: {newValue: 7}}
        });
        const expected1$ = hot('      ea--b----c--|', {
            e: 50,
            a: 53,
            b: 47,
            c: 53
        })
        sliderSequence(
            getValue(sliderActions1$, initialValueObj, (window as any).drawCb),
            getValue(sliderActions2$, initialValueObj, (window as any).drawCb),
            getValue(sliderActions3$, initialValueObj, (window as any).drawCb)
        ).subscribe((v)=>{
            console.log('V!!!!', v)
        })

        expect(
            sliderSequence(
                getValue(sliderActions1$, initialValueObj, (window as any).drawCb),
                getValue(sliderActions2$, initialValueObj, (window as any).drawCb),
                getValue(sliderActions3$, initialValueObj, (window as any).drawCb)
            )
        ).toBeObservable(expected1$)
    })
})

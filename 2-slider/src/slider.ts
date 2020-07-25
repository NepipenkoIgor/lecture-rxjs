import { combineLatest, fromEvent, Observable } from "rxjs";
import { map, pluck, startWith, tap, withLatestFrom } from "rxjs/operators";

const qualitySlider = $('#quality').slider();
const ratingSlider = $('#rating').slider();
const actualSlider = $('#actual').slider();

const quality$ = getValue(fromEvent(qualitySlider, 'change'), {
    element: qualitySlider.parent().children(':first-child')[0],
    value: 5
}, redrawSlider)
const rating$ = getValue(fromEvent(ratingSlider, 'change'), {
    element: ratingSlider.parent().children(':first-child')[0],
    value: 5
}, redrawSlider)
const actual$ = getValue(fromEvent(actualSlider, 'change'), {
    element: actualSlider.parent().children(':first-child')[0],
    value: 5
}, redrawSlider)



export  const sliderResultSequence$ = fromEvent<MouseEvent>(document.querySelector('#send-result') as HTMLElement, 'click')
    .pipe(
        withLatestFrom(sliderSequence(quality$, rating$, actual$))
    )

export function sliderSequence(...source$: Observable<any>[]) {
    return combineLatest<number[]>(source$)
        .pipe(
            map(([quality, rating, actual]) => {
                return Math.round((quality + rating + actual) / 3) * 10;
            })
        )
}


function getValue(source$: Observable<any>, initialValue: any, sideCb: any) {
    return source$
        .pipe(
            map(({delegateTarget: {previousElementSibling}, value: {newValue}}) => {
                return {
                    element: previousElementSibling,
                    value: newValue
                }
            }),
            startWith(initialValue),
            tap(sideCb),
            pluck('value')
        )
}

function redrawSlider({element, value}: any) {
    const sliderTrack = element.querySelector('.slider-track');
    const v = value * 10;
    sliderTrack.classList.remove('bad', 'good', 'warn');
    if (v < 40) {
        sliderTrack.classList.add('bad')
        return;
    }
    if (v >= 40 && v <= 70) {
        sliderTrack.classList.add('warn')
        return;
    }
    sliderTrack.classList.add('good')
}

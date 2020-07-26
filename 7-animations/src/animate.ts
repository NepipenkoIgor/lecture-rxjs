import { animationFrameScheduler, defer, interval } from "rxjs";
import { map, takeWhile, tap } from "rxjs/operators";

const animationFn = (percentage: number) => {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
}


function elapsed(schedule = animationFrameScheduler) {
    return defer(() => {
            const start = schedule.now()
            return interval(0, schedule)
                .pipe(
                    map(() => schedule.now() - start)
                )
        }
    )
}


function duration(ms: number, schedule = animationFrameScheduler) {
    return elapsed(schedule)
        .pipe(
            map((time) => time / ms),
            takeWhile((percentage) => percentage <= 1)
        )
}

const distance = (px: number) => (percentage: number) => percentage * px;


export function animateDown(element: HTMLElement) {
    return duration(20000)
        .pipe(
            map(animationFn),
            map(distance(100)),
            tap((frame)=>{
                 element.style.transform = `translate3d(0,${frame}px,0)`
            })
        )
}

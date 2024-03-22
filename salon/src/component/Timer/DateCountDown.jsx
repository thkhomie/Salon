import { useEffect, useRef, useState } from "react"

export default function DateCountDown() {

    const [timeOfDays, setTimeOfDays] = useState('00');
    const [timeOfHours, setTimeOfHours] = useState('00');
    const [timeOfMinutes, setTimeOfMinutes] = useState('00');
    const [timeOfSeconds, setTimeOfSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDown = new Date(`March 22, 2025 00:00:00`).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDown - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                // update timer
                setTimeOfDays(days);
                setTimeOfHours(hours);
                setTimeOfMinutes(minutes);
                setTimeOfSeconds(seconds);
            }

        }, 1000);
    };


    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })



    return (

        <div className="bg-overlayBg text-white font-bold flex items-center p-3 m-4 absolute right-12 top-20 w-fit">
            
            <div className="flex flex-col items-center">
                <p className="text-2xl">{timeOfDays}</p>
                <p className="text-sm">Days</p>
                
            </div>

            <span className="mx-3">:</span>

            <div className="flex flex-col items-center">
                <p className="text-2xl">{timeOfHours}</p>
                <p className="text-sm">Hours</p>
            </div>

            <span className="mx-3">:</span>

            <div className="flex flex-col items-center">
                <p className="text-2xl">{timeOfMinutes}</p>
                <p className="text-sm">Minutes</p>
            </div>

            <span className="mx-3">:</span>

            <div className="flex flex-col items-center">
                <p className="text-2xl">{timeOfSeconds}</p>
                <p className="text-sm">Seconds</p>
            </div>

        </div>
    )
}
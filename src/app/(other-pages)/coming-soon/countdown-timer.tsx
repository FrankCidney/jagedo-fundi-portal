'use client';

import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

function Render({ days, hours, minutes, seconds, completed }: any) {
  if (completed) {
    // Render a completed state
    return <span>Countdown completed</span>;
  } else {
    // Render a countdown
    return (
      <div className="flex items-center gap-3 text-center text-3xl font-medium text-gray-1000 md:text-5xl xl:gap-4 xl:text-6xl 2xl:gap-6 2xl:text-7xl">
        <div className="min-w-[45px] md:min-w-[70px] xl:min-w-[90px] 2xl:min-w-[100px]">
          <p>{days < 10 ? `0${days}` : days}</p>
          <p className="mt-2 text-xs font-semibold uppercase text-gray-1000/50 xl:text-sm">
            day
          </p>
        </div>
        <span className="flex -translate-y-3 flex-col items-center justify-center gap-1 md:gap-2 xl:gap-3 2xl:-translate-y-3.5">
          <span className="h-1 w-1 rounded-full bg-gray-400 md:h-1.5 md:w-1.5 xl:h-2 xl:w-2"></span>
          <span className="h-1 w-1 rounded-full bg-gray-400 md:h-1.5 md:w-1.5 xl:h-2 xl:w-2"></span>
        </span>
        <div className="min-w-[45px] md:min-w-[70px] xl:min-w-[90px] 2xl:min-w-[100px]">
          <p>{hours < 10 ? `0${hours}` : hours}</p>
          <p className="mt-2 text-xs font-semibold uppercase text-gray-1000/50 xl:text-sm">
            hour
          </p>
        </div>
        <span className="flex -translate-y-3 flex-col items-center justify-center gap-1 md:gap-2 xl:gap-3 2xl:-translate-y-3.5">
          <span className="h-1 w-1 rounded-full bg-gray-400 md:h-1.5 md:w-1.5 xl:h-2 xl:w-2"></span>
          <span className="h-1 w-1 rounded-full bg-gray-400 md:h-1.5 md:w-1.5 xl:h-2 xl:w-2"></span>
        </span>
        <div className="min-w-[45px] md:min-w-[70px] xl:min-w-[90px] 2xl:min-w-[100px]">
          <p>{minutes < 10 ? `0${minutes}` : minutes}</p>
          <p className="mt-2 text-xs font-semibold uppercase text-gray-1000/50 xl:text-sm">
            min
          </p>
        </div>
        <span className="flex -translate-y-3 flex-col items-center justify-center gap-1 md:gap-2 xl:gap-3 2xl:-translate-y-3.5">
          <span className="h-1 w-1 rounded-full bg-gray-400 md:h-1.5 md:w-1.5 xl:h-2 xl:w-2"></span>
          <span className="h-1 w-1 rounded-full bg-gray-400 md:h-1.5 md:w-1.5 xl:h-2 xl:w-2"></span>
        </span>
        <div className="min-w-[45px] md:min-w-[70px] xl:min-w-[90px] 2xl:min-w-[100px]">
          <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
          <p className="mt-2 text-xs font-semibold uppercase text-gray-1000/50 xl:text-sm">
            sec
          </p>
        </div>
      </div>
    );
  }
}

export default function CountdownTimer() {
  const [targetDate, setTargetDate] = useState<number | null>(null);

  useEffect(() => {
    // Calculate the target date only on the client side
    const target = new Date('2024-11-15T00:00:00').getTime();

    // Calculate the current time
    const now = Date.now();

    // Calculate the time difference
    const timeDifference = target - now;

    // Set the target date based on the difference
    setTargetDate(now + timeDifference);
  }, []);

  // Calculate the time difference between now and November 15th
  // const targetDate = new Date('2024-11-15T00:00:00').getTime(); // Convert to timestamp (number)
  // const now = Date.now(); 
  // const timeDifference = targetDate - now; 

  if (!targetDate) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-t-transparent border-gray-400 rounded-full animate-spin"></div>
      </div>
    ); // Render nothing until targetDate is set
  }

  return (
    <div>
      {/* <Countdown date={Date.now() + 2000000000} renderer={Render} /> */}
      <Countdown date={targetDate} renderer={Render} />
    </div>
  );
}

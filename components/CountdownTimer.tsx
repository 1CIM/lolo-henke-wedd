import React from 'react';
import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [weddingTime, setWeddingTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date('8/05/2023 13:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setWeddingTime(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {weddingTime ? (
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Bröllopsfilm</a>
      ) : (
        <p>
          {days} dagar {hours} timmar {minutes} minuter {seconds} sekunder
        </p>
      )}
    </>
  );
};

export default CountdownTimer;

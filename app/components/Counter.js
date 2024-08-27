"use client";
import { useState, useEffect, useRef } from "react";

export default function Counter({ targetNumber, classLists }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let observer;
    const startCounting = () => {
      let start = 0;
      const end = targetNumber;
      if (start === end) return;

      const incrementTime = (500 / end) * 2;
      const timer = setInterval(() => {
        start += 1;
        setCount(Math.min(start, end));
        if (start >= end) clearInterval(timer);
      }, incrementTime);
    };

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startCounting();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [targetNumber, classLists]);

  return (
    <div ref={ref}>
      <h2 className={classLists}>{`${count}+`}</h2>
    </div>
  );
}

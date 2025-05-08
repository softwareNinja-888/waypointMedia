import { useState, useEffect, useRef} from 'react';

function Stat({ targetNumber = 100, name = 'Stat Name', isVisible ,className}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
  
      const end = parseInt(targetNumber); // Remove "+" or "%" for counting
      if (isNaN(end)) return;
  
      let start = 0;
      const duration = 1000;
      const stepTime = Math.max(Math.floor(duration / end), 20);
  
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        }
      }, stepTime);
  
      return () => clearInterval(counter);
    }, [isVisible, targetNumber]);
  
    // Determine suffix to append
    const suffix = targetNumber.includes('%') ? '%' : targetNumber.includes('+') ? '+' : '';
  
    return (
      <div className={`flex flex-col justify-center items-center bg-grayBg w-full h-40 rounded-2xl ${className}`}>
        <div className="text-4xl ">
          {count}{suffix}
        </div>
        <div className="font-">{name}</div>
      </div>
    );
  }
  

export function About({content}) {
    const [statsVisible, setStatsVisible] = useState(false);
    const statsRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {

            setStatsVisible(true);
            observer.disconnect(); // Trigger once
          }
        },
        { threshold: 0.4 }
      );
      console.log(statsRef)

      if (statsRef.current) {
        observer.observe(statsRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row px-20 py-20 gap-20">
                <div className="text-3xl font-Cal_Sans flex-1/2 self-center">{content.name} is a dynamic and innovative social media marketing firm specilizing in the Tourism market, based in the heart of Eswatini</div>
                <div className="grid grid-cols-2 gap-3 flex-1/2 font-Poppins" ref={statsRef}>

                    {/* IMCREMENTING STATS */}
                    <Stat targetNumber="24+" name="Years of Experinece" isVisible={statsVisible} />
                    <Stat targetNumber="200+" name="Competed Projects" isVisible={statsVisible} />
                    <Stat targetNumber="100%" name="Customer Satisfaction" isVisible={statsVisible} className='col-span-2'/>
                </div>
            </div>
        </>
    );
}
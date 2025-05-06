import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export function Waves({heightCon='h-[250px]',heightWave='h-[140px]',inverse=false,waveColor='bg-mainGreen',bgColor='#f8f7f5'}) {
  const controls = useAnimationControls();

  const wave1 =
    "M0,200L60,220C120,240,240,280,360,270C480,260,600,220,720,200C840,180,960,170,1080,190C1200,210,1320,250,1380,270L1440,290L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z";

  const wave2 =
    "M0,200L60,240C120,280,240,340,360,350C480,360,600,330,720,280C840,230,960,150,1080,120C1200,90,1320,80,1380,75L1440,70L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z";

  const wave3 =
    "M0,200L60,160C120,120,240,60,360,60C480,60,600,120,720,180C840,240,960,280,1080,280C1200,280,1320,240,1380,220L1440,200L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z";

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({ d: wave2, transition: { duration: 4, ease: "easeInOut" } });
        await controls.start({ d: wave3, transition: { duration: 4, ease: "easeInOut" } });
        await controls.start({ d: wave1, transition: { duration: 4, ease: "easeInOut" } });
      }
    };
    loop();
  }, [controls]);

  return (
    <div className={`relative ${waveColor} ${heightCon} `}>
      <div className={`absolute  left-0 w-full overflow-hidden leading-[0] ${inverse ? 'bottom-0 rotate-180' : 'top-0'} `}>
        <svg
          className={`relative block w-full ${heightWave}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill={bgColor}
            initial={{ d: wave1 }}
            animate={controls}
          />
        </svg>
      </div>
    </div>
  );
}
